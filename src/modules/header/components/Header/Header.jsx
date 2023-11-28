import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isModalMobileMenuOpen } from '@/redux/Global/selectors.js';
import { setModalMobileMenuOpen } from '@/redux/Global/globalSlice.js';

import useResponsive from '@/hooks/useResponsive.jsx';
import { MobileMenu } from '../MobileMenu/MobileMenu.jsx';
import { SpriteSVG } from '@/shared/icons/SpriteSVG.jsx';
import { User } from '../User/User.jsx';
import Logo from '@/shared/components/Logo/Logo';

import { Container } from '@/shared/styles/Container';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {
  SrtledHeaderInner,
  StyledHeader,
  StyledRightWrapper,
  StyledMobileMenuBtn,
} from './Header.styled';
import Navbar from '@/shared/components/Navbar/Navbar.jsx';

const Header = () => {
  const { isLargeScreen, isMediumScreen } = useResponsive();

  const dispatch = useDispatch();

  const isOpen = useSelector(isModalMobileMenuOpen);

  const toggleMenu = () => {
    dispatch(setModalMobileMenuOpen(!isOpen));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <StyledHeader>
      <Container>
        <SrtledHeaderInner>
          <Logo />
          {isLargeScreen && <Navbar />}

          <StyledRightWrapper>
            {isLargeScreen && <ThemeSwitcher />}

            <User />
            {isMediumScreen && (
              <StyledMobileMenuBtn onClick={toggleMenu}>
                <SpriteSVG name="toggle" />
              </StyledMobileMenuBtn>
            )}
          </StyledRightWrapper>
        </SrtledHeaderInner>
      </Container>
      {isMediumScreen && <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
