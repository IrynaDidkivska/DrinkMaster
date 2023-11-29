import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/theme/slice';
import { Switcher } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  return (
    <Switcher>
      <label>
        <input type="checkbox" />
        <span onClick={() => dispatch(toggleTheme())}></span>
      </label>
    </Switcher>
  );
};

export default ThemeSwitcher;
