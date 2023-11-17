import PropTypes from 'prop-types';
import Logo from '../../../../shared/components/Logo/Logo';
import { StyledLink } from '../../../../shared/components/Navbar/Navbar.styled.js';
import { Container } from '../../../../shared/styles/Container.js';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

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
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG.jsx';

export const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledMobileMenu open={isOpen}>
      <StyledMobileHeader>
        <Container>
          <StyledMobileWrapper>
            <Logo />
            <StyledBtnGroup>
              <ThemeSwitcher />
              <StyledBtnClose onClick={toggleMenu}>
                <SpriteSVG name="close-menu" />
              </StyledBtnClose>
            </StyledBtnGroup>
          </StyledMobileWrapper>
        </Container>
      </StyledMobileHeader>
      <StyledMobileBody>
        <Container>
          <StyledMobileNavBar>
            <StyledLink>Home</StyledLink>
            <StyledLink>Drinks</StyledLink>
            <StyledLink>Add drink</StyledLink>
            <StyledLink>My drinks</StyledLink>
            <StyledLink>Favorites</StyledLink>
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
