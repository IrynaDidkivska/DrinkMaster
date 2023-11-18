import PropTypes from "prop-types";
import { StyledSubitle } from "./StyledSubitle.styled";

const Subtitle = ({ Subtitle, name }) => {
  return <StyledSubitle name={name}>{Subtitle}</StyledSubitle>;
};

export default Subtitle;

Subtitle.propTypes = {
  Subtitle: PropTypes.string.isRequired,
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
