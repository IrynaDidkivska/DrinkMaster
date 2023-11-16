import { StyledLogo, StyledLogoImg, StyledLogoTitle } from './Logo.styled';
import logo from '../../icons/logo.png';

const Logo = () => {
  return (
    <StyledLogo>
      <StyledLogoImg src={logo} alt="logo" />
      <StyledLogoTitle>Drink Master</StyledLogoTitle>
    </StyledLogo>
  );
};

export default Logo;
