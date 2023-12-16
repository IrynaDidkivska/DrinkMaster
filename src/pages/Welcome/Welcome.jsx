import { useLocation } from 'react-router-dom';
import AuthForm from '@/modules/welcome/components/AuthForm/AuthForm';
import AuthLink from '@/modules/welcome/components/AuthLink/AuthLink';
import Subtitle from '@/shared/components/Title/Subtitle';
import {
  OverlayCentered,
  OverlayLeft,
  OverlayRight,
  StyledWrapper,
  WelcomeContent,
  WelcomeWrapper,
} from './Welcome.styled';

const Welcome = () => {
  const location = useLocation();

  return (
    <StyledWrapper>
      <>
        {location.pathname === '/welcome' ? (
          <WelcomeWrapper>
            <Subtitle Subtitle="Welcome to the app!" />
            <WelcomeContent>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </WelcomeContent>
            <AuthLink />
          </WelcomeWrapper>
        ) : (
          <AuthForm />
        )}
      </>

      <OverlayCentered />
      <OverlayLeft />
      <OverlayRight />
    </StyledWrapper>
  );
};

export default Welcome;
