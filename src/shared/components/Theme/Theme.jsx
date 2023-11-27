import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { toggleThemeDark } from '@/redux/theme/slice';
import { confirmNamePage } from '@/shared/helpers/confirmNamePage';

const Theme = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const namePage = confirmNamePage(pathname);
  const isMustBeDark = namePage.welcome || namePage.signup || namePage.signin;

  useEffect(() => {
    isMustBeDark && dispatch(toggleThemeDark());
  }, [dispatch, isMustBeDark]);
  return null;
};

export default Theme;
