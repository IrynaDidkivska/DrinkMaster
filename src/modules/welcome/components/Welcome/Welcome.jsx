import { useLocation } from "react-router-dom";
import AuthForm from "../../../../shared/components/AuthForm/AuthForm";
import AuthLink from "../../../../shared/components/AuthForm/AuthLink/AuthLink";
import { Container } from "../../../../shared/styles/Container";
import {
  OverlayCentered,
  OverlayLeft,
  OverlayRight,
  StyledWrapper,
} from "./Welcome.styled";

const Welcome = () => {
  const location = useLocation();
  return (
    <StyledWrapper>
      <Container>
        {location.pathname === "/welcome" ? (
          <>
            <h1>Welcome to the app!</h1>
            <p>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </p>
            <AuthLink />
          </>
        ) : (
          <AuthForm />
        )}
      </Container>

      <OverlayCentered />
      <OverlayLeft />
      <OverlayRight />
    </StyledWrapper>
  );
};

export default Welcome;
