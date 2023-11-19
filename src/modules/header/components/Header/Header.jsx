import { useMediaQuery } from "react-responsive";
import Logo from "../../../../shared/components/Logo/Logo";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import { Container } from "../../../../shared/styles/Container";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  SrtledHeaderInner,
  StyledHeader,
  StyledRightWrapper,
  StyledMobileMenuBtn,
} from "./Header.styled";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";
import { useEffect } from "react";
import { SpriteSVG } from "../../../../shared/icons/SpriteSVG.jsx";
import { User } from "../User/User.jsx";
import { useDispatch, useSelector } from "react-redux";
import { isModalMobileMenuOpen } from "../../../../redux/Global/selectors.js";
import { setModalMobileMenuOpen } from "../../../../redux/Global/globalSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(isModalMobileMenuOpen);

  const toggleMenu = () => {
    dispatch(setModalMobileMenuOpen(!isOpen));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const isTabletScreen = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <StyledHeader>
      <Container>
        <SrtledHeaderInner>
          <Logo />
          {isDesktopScreen ? <Navbar /> : null}

          <StyledRightWrapper>
            {isDesktopScreen ? <ThemeSwitcher /> : null}

            <User />
            {isTabletScreen ? (
              <StyledMobileMenuBtn onClick={toggleMenu}>
                <SpriteSVG name="toggle" />
              </StyledMobileMenuBtn>
            ) : null}
          </StyledRightWrapper>
        </SrtledHeaderInner>
      </Container>
      {isTabletScreen ? (
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      ) : null}
    </StyledHeader>
  );
};

export default Header;
