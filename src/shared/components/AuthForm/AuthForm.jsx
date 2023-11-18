import { useLocation } from "react-router-dom";
import SignIn from "../../../pages/Signin/Signin";
import { confirmNamePage } from "../../helpers/confirmNamePage";
import SignUp from "../../../pages/Signup/Signup";

const AuthForm = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return <>{namePage.signin ? <SignIn /> : <SignUp />}</>;
};

export default AuthForm;
