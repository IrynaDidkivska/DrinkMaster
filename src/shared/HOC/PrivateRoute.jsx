import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsAuth);

  if (!isLoggedIn) {
    return <Navigate to="/welcome" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
