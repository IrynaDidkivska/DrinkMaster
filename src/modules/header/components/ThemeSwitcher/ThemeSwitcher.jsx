import { Switcher } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
  return (
    <Switcher>
      <label>
        <input type="checkbox" />
        <span></span>
      </label>
    </Switcher>
  );
};

export default ThemeSwitcher;
