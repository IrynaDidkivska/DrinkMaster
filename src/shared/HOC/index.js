// export { default as PrivateRoute } from "./PrivateRoute";
// export { default as PublicRoute } from "./PublicRoute";
import { lazy } from "react";

export const PrivateRoute = lazy(() => import("./PrivateRoute"));
export const PublicRoute = lazy(() => import("./PublicRoute"));
