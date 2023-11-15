import LigthBtn from "../../../../shared/components/Buttons/LigthBtn";
import { StyledWrapper } from "./Welcome.styled";
import AuthLink from "../../../../shared/components/StyledLink/StyledLink";

const Welcome = () => {
  return (
    <StyledWrapper>
      <h1>Welcome to the app!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>

      <LigthBtn>Sign Up</LigthBtn>
      <AuthLink to="/login">Sign In</AuthLink>
    </StyledWrapper>
  );
};

export default Welcome;
