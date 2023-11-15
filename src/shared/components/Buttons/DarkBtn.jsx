import PropTypes from "prop-types";
import { StyledBtn } from "./DarkBtn.styled";

const DarkBtn = ({ children }) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default DarkBtn;

DarkBtn.propTypes = {
  children: PropTypes.node,
};
