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
  const handleLinkClick = (path) => {
    window.location.href = path;
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
            <StyledLink onClick={() => handleLinkClick("/home")}>
              Home
            </StyledLink>
            <StyledLink onClick={() => handleLinkClick("/drinks")}>
              Drinks
            </StyledLink>
            <StyledLink onClick={() => handleLinkClick("/add")}>
              Add drink
            </StyledLink>
            <StyledLink onClick={() => handleLinkClick("/my")}>
              My drinks
            </StyledLink>
            <StyledLink onClick={() => handleLinkClick("/favorites")}>
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
