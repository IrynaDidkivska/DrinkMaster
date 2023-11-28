import { useLocation } from 'react-router-dom';
import AuthForm from '@/shared/components/AuthForm/AuthForm';
import AuthLink from '@/shared/components/AuthForm/AuthLink/AuthLink';
import Subtitle from '@/shared/components/Title/Subtitle';
import {
  OverlayCentered,
  OverlayLeft,
  OverlayRight,
  StyledWrapper,
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
            <p>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </p>
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
