import { useLocation } from 'react-router-dom';
import SignIn from '@/pages/Signin/Signin';
import { confirmNamePage } from '../../helpers/confirmNamePage';
import SignUp from '@/pages/Signup/Signup';
import { WelcomeWrapper } from '@/modules/welcome/components/Welcome/Welcome.styled';

const AuthForm = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <WelcomeWrapper>{namePage.signin ? <SignIn /> : <SignUp />}</WelcomeWrapper>
  );
};

export default AuthForm;
