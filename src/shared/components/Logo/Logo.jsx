import { StyledLogo, StyledLogoTitle } from "./Logo.styled";
import { SpriteSVG } from "../../icons/SpriteSVG";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <StyledLogo onClick={handleClick}>
      <SpriteSVG name={"logo"} />
      <StyledLogoTitle>Drink Master</StyledLogoTitle>
    </StyledLogo>
  );
};

export default Logo;
