import { Route, Routes } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import { routes } from "./shared/services/routes";
import { lazy } from "react";
import NotFound from "./pages/NotFound/NotFound";
import {
  AddDrink,
  Drinks,
  DrinkWithID,
  Favorites,
  HomePage,
  MyDrinks,
  Signin,
  Signup,
} from "./pages";

const Welcome = lazy(() =>
  import("./modules/welcome/components/Welcome/Welcome")
);
// const PrivateRoute = lazy(() => import("./shared/HOC/PublicRoute"));
// const PublickRoute = lazy(() => import("./shared/HOC/PublicRoute"));

function App() {
  return (
    <Routes>
      <Route path={routes.ROOT} element={<SharedLayout />}>
        <Route
          path={routes.HOME}
          // element={<PrivateRoute component={<HomePage />} />}
          element={<HomePage />}
        />
        <Route
          path={routes.DRINKSPAGE}
          // element={<PrivateRoute component={<Drinks />} />}
          element={<Drinks />}
        />
        <Route
          path={routes.ADD}
          // element={<PrivateRoute component={<AddDrink />} />}
          element={<AddDrink />}
        />
        <Route
          path={routes.FAVORITES}
          // element={<PrivateRoute component={<Favorites />} />}
          element={<Favorites />}
        />
        <Route
          path={routes.MYDRINKS}
          // element={<PrivateRoute component={<MyDrinks />} />}
          element={<MyDrinks />}
        />
        <Route
          path={routes.DRINKSPAGEWITHID}
          // element={<PrivateRoute component={<DrinkWithID />} />}
          element={<DrinkWithID />}
        />

        <Route
          path={routes.SIGNUP}
          // element={<PublicRoute component={<Signup />} />}
          element={<Signup />}
        />
        <Route
          path={routes.SIGNIN}
          // element={<PublicRoute component={<Signin />} />}
          element={<Signin />}
        />
        <Route
          path={routes.WELCOME}
          element={<Welcome />}
          // element={<PublicRoute component={<Welcome />} />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
