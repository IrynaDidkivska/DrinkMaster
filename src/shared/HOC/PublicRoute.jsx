import { Navigate } from "react-router";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/Auth/selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
};
