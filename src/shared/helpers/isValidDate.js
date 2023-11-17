import { StyledDatetime } from "../../pages/Signup/Signup.styled";

export const isValidDate = (currentDate) => {
  return (
    currentDate.isBefore(StyledDatetime.moment()) ||
    currentDate.isSame(StyledDatetime.moment(), "day")
  );
};
