import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import { routes } from "./shared/services/routes";
import NotFound from "./pages/NotFound/NotFound";
// import PublicRoute from "./shared/HOC/PublicRoute";
import HomePage from "./pages/HomePage/HomePage";
// import PrivateRoute from "./shared/HOC/PrivateRoute";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Drinks from "./pages/Drinks/Drinks";
import AddDrink from "./pages/AddDrink/AddDrink";
import Favorites from "./pages/Favorites/Favorites";
import MyDrinks from "./pages/MyDrinks/MyDrinks";
import Welcome from "./modules/welcome/components/Welcome/Welcome";

function App() {
  return (
    <Routes>
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
      <Route path={routes.ROOT} element={<Layout />}>
        <Route
          index
          element={<Welcome />}
          // element={<PublicRoute component={<Welcome />} />}
        />
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
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
