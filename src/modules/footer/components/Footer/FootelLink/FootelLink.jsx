import navLinksData from '@/shared/data/nav-links-data';
import { StyledLinkFooter, StyledNavFooter } from './FootelLink.styled';

const FootelLink = () => {
  return (
    <StyledNavFooter>
      {navLinksData.map((navItem, index) => (
        <StyledLinkFooter
          key={index}
          to={{ pathname: navItem.path }}
          rel="prefetch"
        >
          {navItem.label}
        </StyledLinkFooter>
      ))}
    </StyledNavFooter>
  );
};

export default FootelLink;
