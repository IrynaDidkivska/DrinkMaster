import { useMediaQuery } from 'react-responsive';
import Logo from '../../../../shared/components/Logo/Logo';
import Navbar from '../../../../shared/components/Navbar/Navbar';
import { Container } from '../../../../shared/styles/Container';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {
  SrtledHeaderInner,
  StyledHeader,
  StyledLeftWrapper,
  StyledMobileMenuBtn,
} from './Header.styled';
import { MobileMenu } from '../MobileMenu/MobileMenu.jsx';
import { useEffect, useState } from 'react';
import { EditProfile } from '../EditProfile/EditProfile.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTabletScreen = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <StyledHeader>
      <Container>
        <SrtledHeaderInner>
          <Logo />
          {isDesktopScreen ? <Navbar /> : null}

          <StyledLeftWrapper>
            {isDesktopScreen ? <ThemeSwitcher /> : null}

            <EditProfile />
            {isTabletScreen ? (
              <StyledMobileMenuBtn onClick={toggleMenu}>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.25 15.8333H4.75"
                    stroke="#F3F3F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.25 9.5H4.75"
                    stroke="#F3F3F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.25 22.1667H4.75"
                    stroke="#F3F3F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.25 28.5H4.75"
                    stroke="#F3F3F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </StyledMobileMenuBtn>
            ) : null}
          </StyledLeftWrapper>
        </SrtledHeaderInner>
      </Container>
      {isTabletScreen ? (
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      ) : null}
    </StyledHeader>
  );
};

export default Header;
