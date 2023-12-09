import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/Auth/selectors';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsAuth);

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
