import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { isModalMobileMenuOpen } from '@/redux/Global/selectors.js';

import navLinksData from '@/shared/data/nav-links-data.js';

import { SpriteSVG } from '@/shared/icons/SpriteSVG.jsx';
import Logo from '@/shared/components/Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

import { StyledLink } from '@/shared/components/Navbar/Navbar.styled.js';
import { Container } from '@/shared/styles/Container.js';
import {
  Ellipse222,
  Ellipse223,
  Ellipse224,
  StyledBtnClose,
  StyledBtnGroup,
  StyledMobileBody,
  StyledMobileHeader,
  StyledMobileMenu,
  StyledMobileNavBar,
  StyledMobileWrapper,
} from './MobileMenu.styled';

export const MobileMenu = ({ toggleMenu }) => {
  const isOpen = useSelector(isModalMobileMenuOpen);

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <StyledMobileMenu open={isOpen}>
      <StyledMobileHeader>
        <Container>
          <StyledMobileWrapper>
            <Logo />
            <StyledBtnGroup>
              <ThemeSwitcher />
              <StyledBtnClose onClick={toggleMenu}>
                <SpriteSVG name="close" />
              </StyledBtnClose>
            </StyledBtnGroup>
          </StyledMobileWrapper>
        </Container>
      </StyledMobileHeader>
      <StyledMobileBody>
        <Container>
          <StyledMobileNavBar>
            {navLinksData.map((navItem, index) => (
              <StyledLink
                key={index}
                to={{ pathname: navItem.path }}
                onClick={() => handleLinkClick()}
              >
                {navItem.label}
              </StyledLink>
            ))}
          </StyledMobileNavBar>
        </Container>
      </StyledMobileBody>
      <Ellipse222 />
      <Ellipse223 />
      <Ellipse224 />
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
