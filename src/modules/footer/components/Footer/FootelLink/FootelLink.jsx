import { StyledLinkFooter, StyledNavFooter } from './FootelLink.styled';

const FootelLink = () => {
  return (
    <StyledNavFooter>
      <StyledLinkFooter
        to={{
          pathname: '/drinks',
        }}
        rel="prefetch"
      >
        Drinks
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: '/add',
        }}
        rel="prefetch"
      >
        Add drink
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: '/my',
        }}
        rel="prefetch"
      >
        My drinks
      </StyledLinkFooter>
      <StyledLinkFooter
        to={{
          pathname: '/favorites',
        }}
        rel="prefetch"
      >
        Favorites drinks
      </StyledLinkFooter>
    </StyledNavFooter>
  );
};

export default FootelLink;
