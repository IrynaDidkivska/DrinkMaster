import { StyledTitle } from "./Title.styled";
import PropTypes from "prop-types";

const Title = ({ children, name }) => {
  return <StyledTitle name={name}>{children}</StyledTitle>;
};

export default Title;

Title.propTypes = {
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
