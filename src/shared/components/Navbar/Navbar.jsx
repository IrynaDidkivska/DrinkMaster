import { StyledLink, StyledNavBar } from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledLink
        to={{
          pathname: "/home",
        }}
      >
        Home
      </StyledLink>
      <StyledLink
        to={{
          pathname: "/drinks",
        }}
      >
        Drinks
      </StyledLink>
      <StyledLink
        to={{
          pathname: "/add",
        }}
      >
        Add drink
      </StyledLink>
      <StyledLink
        to={{
          pathname: "/my",
        }}
      >
        My drinks
      </StyledLink>
      <StyledLink
        to={{
          pathname: "/favorites",
        }}
      >
        Favorites
      </StyledLink>
    </StyledNavBar>
  );
};

export default Navbar;
