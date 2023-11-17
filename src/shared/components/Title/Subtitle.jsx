import PropTypes from "prop-types";
import { StyledSubitle } from "./StyledSubitle.styled";

const Subtitle = ({ children, name }) => {
  return <StyledSubitle name={name}>{children}</StyledSubitle>;
};

export default Subtitle;

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.shape({
    welcome: PropTypes.bool,
    signin: PropTypes.bool,
    signup: PropTypes.bool,
    drinks: PropTypes.bool,
    add: PropTypes.bool,
    favorites: PropTypes.bool,
    home: PropTypes.bool,
    my: PropTypes.bool,
  }).isRequired,
};
