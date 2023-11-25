import PropTypes from 'prop-types';
import { LinkStyled } from './StyledLink.styled';

const StyledLink = ({ children }) => {
  return <LinkStyled>{children}</LinkStyled>;
};

export default StyledLink;

StyledLink.propTypes = {
  children: PropTypes.node,
};
