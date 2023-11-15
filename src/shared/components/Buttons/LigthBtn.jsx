import PropTypes from "prop-types";
import { StyledBtn } from "./LigthBtn.styled";

const LigthBtn = ({ children }) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default LigthBtn;

LigthBtn.propTypes = {
  children: PropTypes.node,
};
