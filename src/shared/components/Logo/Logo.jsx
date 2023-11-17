import { StyledLogo, StyledLogoTitle } from "./Logo.styled";
import { SpriteSVG } from "../../icons/SpriteSVG";

const Logo = () => {
  return (
    <StyledLogo>
      <SpriteSVG name={"logo"} />
      <StyledLogoTitle>Drink Master</StyledLogoTitle>
    </StyledLogo>
  );
};

export default Logo;
