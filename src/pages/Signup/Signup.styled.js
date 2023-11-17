import styled from "styled-components";
import Datetime from "react-datetime";

//Datetime
export const StyledDatatimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .rdtPicker {
    width: 280px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 35.94%,
      rgba(106, 70, 165, 1) 61.04%,
      rgba(133, 93, 175, 1) 100%
    );

    @media screen and (min-width: 768px) {
      width: 250px;
    }
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    border-radius: 20px;
  }
  .rdtPicker td.rdtToday:before {
    display: none;
  }
  td.rdtActive.rdtToday:before {
    display: none;
  }
  .rdtPicker td:hover {
    background: linear-gradient(
      96.76deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
    text-shadow: 0 -1px 0 rgba (0, 0, 0, 0.25);
    border-radius: 20px;
  }

  element.style {
  }
  .rdtPicker thead tr:first-of-type th:hover {
    background: transparent;
  }
`;
export const StyledDatetime = styled(Datetime)`
  input {
    width: 280px;
    font-family: Poppins-Regular;
    font-size: 18px;
    line-height: 1.5;
    border: none;

    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    background-color: transparent;

    @media screen and (min-width: 768px) {
      padding-left: 12px;
      width: 181px;
    }
    &:focus {
      outline: none;
    }
    &::placeholder {
      background-color: transparent;
    }
  }
`;

export const StyledCalendarSvg = styled.div`
  position: absolute;
  right: 10%;
  transform: translateX(-10%);
  stroke: ${({ theme }) => theme.colors.iconColor};
  pointer-events: none;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    right: 15%;
    transform: translateX(-15%);
  }
`;
