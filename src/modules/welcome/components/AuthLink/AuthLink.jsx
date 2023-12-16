import { StyledLinkWrapp } from '@/pages/Welcome/Welcome.styled';
import { SignIn, SignUp } from './AuthLink.styled';

const AuthLink = () => {
  return (
    <>
      <StyledLinkWrapp>
        <SignUp to="/signup">Sign Up</SignUp>
        <SignIn to="/signin">Sign In</SignIn>
      </StyledLinkWrapp>
    </>
  );
};

export default AuthLink;
