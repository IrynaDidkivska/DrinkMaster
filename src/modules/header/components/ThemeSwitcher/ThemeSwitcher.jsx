import { useDispatch } from "react-redux";
import { Switcher } from "./ThemeSwitcher.styled";
import { toggleTheme } from "../../../../redux/theme/slice";

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
