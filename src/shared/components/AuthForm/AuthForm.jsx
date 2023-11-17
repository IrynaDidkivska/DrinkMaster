import { useLocation } from "react-router-dom";
import SignIn from "../../../pages/Signin/Signin";
import { confirmNamePage } from "../../helpers/confirmNamePage";
import SignUp from "../../../pages/Signup/Signup";
import { StyledWrapper } from "../../../modules/welcome/components/Welcome/Welcome.styled";

const AuthForm = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <StyledWrapper>{namePage.signin ? <SignIn /> : <SignUp />}</StyledWrapper>
  );
};

export default AuthForm;
