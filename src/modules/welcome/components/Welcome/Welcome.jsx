import AuthLink from "../../../../shared/components/AuthForm/AuthLink/AuthLink";
import {
  OverlayCentered,
  OverlayLeft,
  OverlayRight,
  StyledWrapper,
} from "./Welcome.styled";

const Welcome = () => {
  return (
    <StyledWrapper>
      <h1>Welcome to the app!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <AuthLink />
      <OverlayCentered />
      <OverlayLeft />
      <OverlayRight />
    </StyledWrapper>
  );
};

export default Welcome;
