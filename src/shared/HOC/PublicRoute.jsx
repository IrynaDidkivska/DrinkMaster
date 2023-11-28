import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/Auth/selectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/home" state={{ from: location }} />;
  }
  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
};
