import { useLocation } from 'react-router-dom';

import { confirmNamePage } from '@/shared/helpers/confirmNamePage';

import SignIn from '@/modules/welcome/components/Signin/Signin';
import SignUp from '@/modules/welcome/components/Signup/Signup';
import { WelcomeWrapper } from '@/pages/Welcome/Welcome.styled';

const AuthForm = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);

  return (
    <WelcomeWrapper>{namePage.signin ? <SignIn /> : <SignUp />}</WelcomeWrapper>
  );
};

export default AuthForm;
