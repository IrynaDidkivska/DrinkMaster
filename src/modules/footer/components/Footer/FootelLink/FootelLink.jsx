import { StyledLinkFooter, StyledNavFooter } from "./FootelLink.styled";

const FootelLink = () => {
  return (
    <StyledNavFooter>
      <StyledLinkFooter
        to={{
          pathname: "/drinks",
        }}
      >
        Drinks
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: "/add",
        }}
      >
        Add drink
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: "/my",
        }}
      >
        My drinks
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: "/favorites",
        }}
      >
        Favorites drinks
      </StyledLinkFooter>
    </StyledNavFooter>
  );
};

export default FootelLink;
