import navLinksData from '@/shared/data/nav-links-data';
import { StyledLink, StyledNavBar } from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavBar>
      {navLinksData.map((navItem, index) => (
        <StyledLink key={index} to={{ pathname: navItem.path }}>
          {navItem.label}
        </StyledLink>
      ))}
    </StyledNavBar>
  );
};

export default Navbar;
