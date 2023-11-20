import PropTypes from "prop-types";
import Logo from "../../../../shared/components/Logo/Logo";
import { StyledLink } from "../../../../shared/components/Navbar/Navbar.styled.js";
import { Container } from "../../../../shared/styles/Container.js";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";

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
} from "./MobileMenu.styled";
import { SpriteSVG } from "../../../../shared/icons/SpriteSVG.jsx";

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
