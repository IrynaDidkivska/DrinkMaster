import { Route, Routes } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import { routes } from "./shared/services/routes";
import { Suspense, lazy } from "react";
import { PrivateRoute, PublicRoute } from "./shared/HOC";
import NotFound from "./pages/NotFound/NotFound";
import {
  AddDrink,
  Drinks,
  DrinkWithID,
  Favorites,
  HomePage,
  MyDrinks,
} from "./pages";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./shared/styles/theme";
import { Global } from "./shared/styles/Global";
const Welcome = lazy(() =>
  import("./modules/welcome/components/Welcome/Welcome")
);

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Global />
      <Suspense>
        <Routes>
          <Route path={routes.ROOT} element={<SharedLayout />}>
            <Route
              index
              // element={<PrivateRoute><HomePage /></PrivateRoute>}
              element={<HomePage />}
            />
            <Route
              path={routes.DRINKSPAGE}
              // element={<PrivateRoute><Drinks /></PrivateRoute>}
              element={<Drinks />}
            />
            <Route
              path={routes.ADD}
              // element={
              //   <PrivateRoute>
              //     <AddDrink />
              //   </PrivateRoute>
              // }
              element={<AddDrink />}
            />
            <Route
              path={routes.FAVORITES}
              // element={<PrivateRoute ><Favorites /></PrivateRoute>}
              element={<Favorites />}
            />
            <Route
              path={routes.MYDRINKS}
              // element={<PrivateRoute><MyDrinks /></PrivateRoute>}
              element={<MyDrinks />}
            />
            <Route
              path={routes.DRINKSPAGEWITHID}
              // element={<PrivateRoute><DrinkWithID /></PrivateRoute>}
              element={<DrinkWithID />}
            />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
