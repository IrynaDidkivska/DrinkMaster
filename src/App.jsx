import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { routes } from './shared/services/routes';
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
  Welcome,
} from './pages';
import { useTheme } from './hooks/useTheme';
import { currentUserThunk } from './redux/Auth/operations';
import Loader from './shared/components/Loader/Loader';

import { Global } from './shared/styles/Global';
import { darkTheme, lightTheme } from './shared/styles/theme';

function App() {
  const { theme } = useTheme();
  const isRefresh = useSelector(state => state.auth.isRefresh);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return isRefresh ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Global />
      <Suspense fallback={<Loader />}>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
