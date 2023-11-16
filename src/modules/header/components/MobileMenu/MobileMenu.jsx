import PropTypes from 'prop-types';
import Logo from '../../../../shared/components/Logo/Logo';
import { StyledHeaderLink } from '../../../../shared/components/Navbar/Navbar.styled.js';
import { Container } from '../../../../shared/styles/Container.js';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

import {
  StyledBtnClose,
  StyledBtnGroup,
  StyledMobileBody,
  StyledMobileHeader,
  StyledMobileMenu,
  StyledMobileNavBar,
} from './MobileMenu.styled';

export const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledMobileMenu open={isOpen}>
      <Container>
        <StyledMobileHeader>
          <Logo />

          <StyledBtnGroup>
            <ThemeSwitcher />
            <StyledBtnClose onClick={toggleMenu}>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 9.5L9.5 28.5"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 9.5L28.5 28.5"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </StyledBtnClose>
          </StyledBtnGroup>
        </StyledMobileHeader>

        <StyledMobileBody>
          <StyledMobileNavBar>
            <StyledHeaderLink>Home</StyledHeaderLink>
            <StyledHeaderLink>Drinks</StyledHeaderLink>
            <StyledHeaderLink>Add drink</StyledHeaderLink>
            <StyledHeaderLink>My drinks</StyledHeaderLink>
            <StyledHeaderLink>Favorites</StyledHeaderLink>
          </StyledMobileNavBar>
        </StyledMobileBody>
      </Container>
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
