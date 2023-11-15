import { StyledHeaderLink, StyledNavBar } from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledHeaderLink>Home</StyledHeaderLink>
      <StyledHeaderLink>Drinks</StyledHeaderLink>
      <StyledHeaderLink>Add drink</StyledHeaderLink>
      <StyledHeaderLink>My drinks</StyledHeaderLink>
      <StyledHeaderLink>Favorites </StyledHeaderLink>
    </StyledNavBar>
  );
};

export default Navbar;
