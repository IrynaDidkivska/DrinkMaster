import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { confirmNamePage } from '@/shared/helpers/confirmNamePage';
import { toggleThemeDark } from '@/redux/theme/slice';

export const useTheme = () => {
  const { theme } = useSelector(state => state.theme);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const namePage = confirmNamePage(pathname);
  const isMustBeDark = namePage.welcome || namePage.signup || namePage.signin;

  useEffect(() => {
    if (isMustBeDark) {
      dispatch(toggleThemeDark());
    }
  }, [dispatch, isMustBeDark]);

  return { isMustBeDark, theme };
};
