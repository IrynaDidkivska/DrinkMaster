import Logo from '../../../../shared/components/Logo/Logo';
import Navbar from '../../../../shared/components/Navbar/Navbar';
import { Container } from '../../../../shared/styles/Container';
import EditProfile from '../EditProfile/EditProfile.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {
  SrtledHeaderInner,
  StyledHeader,
  StyledProfileWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <SrtledHeaderInner>
          <Logo />
          <Navbar />
          <StyledProfileWrapper>
            <ThemeSwitcher />
            <EditProfile />
          </StyledProfileWrapper>
        </SrtledHeaderInner>
      </Container>
    </StyledHeader>
  );
};

export default Header;
