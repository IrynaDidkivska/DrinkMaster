import PropTypes from "prop-types";
import { StyledBtn } from "./LigthBtn.styled";

const LigthBtn = ({ onClick, children }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

export default LigthBtn;

LigthBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
