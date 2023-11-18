import { StyledDatetime } from "../../pages/Signup/Signup.styled";
import moment from "moment";

export const isValidDate = (currentDate) => {
  return (
    currentDate.isBefore(StyledDatetime.moment()) ||
    currentDate.isSame(StyledDatetime.moment(), "day")
  );
};
