import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './shared/services/routes';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute, PublicRoute } from './shared/HOC';
import SharedLayout from './shared/components/SharedLayout/SharedLayout';
import NotFound from './pages/NotFound/NotFound';
import {
  AddDrink,
  Drinks,
  DrinkWithID,
  Favorites,
  HomePage,
  MyDrinks,
} from './pages';
import { currentUserThunk } from './redux/Auth/operations';
import Loader from './shared/components/Loader/Loader';
const Welcome = lazy(() =>
  import('./modules/welcome/components/Welcome/Welcome')
);
import { getWakeUpServer } from './shared/services/api-service';
import Theme from './shared/components/Theme/Theme';

import { Global } from './shared/styles/Global';
import { darkTheme, lightTheme } from './shared/styles/theme';

function App() {
  const { theme } = useSelector(state => state.theme);
  const isRefresh = useSelector(state => state.auth.isRefresh);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getWakeUpServer();
  }, []);

  return isRefresh ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Theme />
      <Global />
      <Suspense>
        <Routes>
          <Route
            path={routes.ROOT}
            element={
              <PrivateRoute>
                <SharedLayout />
              </PrivateRoute>
            }
          >
            <Route path={routes.HOME} element={<HomePage />} />
            <Route path={routes.DRINKSPAGE} element={<Drinks />} />
            <Route path={routes.ADD} element={<AddDrink />} />
            <Route path={routes.FAVORITES} element={<Favorites />} />
            <Route path={routes.MYDRINKS} element={<MyDrinks />} />
            <Route path={routes.DRINKSPAGEWITHID} element={<DrinkWithID />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path={routes.SIGNUP}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path={routes.SIGNIN}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path={routes.WELCOME}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
