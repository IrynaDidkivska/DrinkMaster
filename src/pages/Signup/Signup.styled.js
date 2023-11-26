import styled from "styled-components";
import Datetime from "react-datetime";

//Datetime
export const StyledDatatimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledDatetime = styled(Datetime)`
  font-family: "Manrope-500";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;

  .rdtPicker {
    width: 219px;
    height: 242px;
    padding: 14px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.background.dropdown};

    .rdtPrev,
    .rdtNext {
      color: rgba(243, 243, 243, 0.5);
      &:hover {
        color: black; // измените цвет стрелок листания вправо и влево
      }
    }

    .rdtSwitch:hover {
      color: black; // измените цвет текста при наведении на месяц и год
    }

    table {
      td {
        width: 24px;
        height: 24px;
        border-radius: 50%;

        &.rdtDay:hover {
          color: black; // измените цвет текста при наведении на ячейку календаря
        }

        thead {
          font-family: "Manrope-500";
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.32px;
        }

        &:hover {
          cursor: pointer;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          color: ${({ theme }) => theme.colors.secondaryText};
          background-color: ${({ theme }) => theme.colors.iconColor};
        }
      }
    }
  }

  input {
    display: block;
    padding: 14px 0 14px 24px;
    min-width: 335px;
    min-height: 54px;
    text-align: center;
    line-height: 1.28; /* 26.52px */
    background-color: transparent;
    outline: transparent;
    border-radius: 200px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    opacity: 0.8;
    transition: ${({ theme }) => theme.transition};

    &:focus {
      border: 1px solid rgba(243, 243, 243, 0.5);
    }

    &::placeholder {
      text-align: left;
      color: rgba(243, 243, 243, 0.5);
    }
  }
`;

export const DivWrapper = styled.div`
  position: relative;
`;

export const StyledCalendarSvg = styled.div`
  position: absolute;
  right: 10%;
  transform: translateX(-10%);
  stroke: ${({ theme }) => theme.colors.iconColor};
  fill: transparent;
  pointer-events: none;
  width: 20px;
  height: 20px;
  fill: transparent;
  top: 15px;
  right: 20px;

  @media screen and (min-width: 768px) {
    transform: translateX(-15%);
  }
`;

export const StyleRedSvg = styled(StyledCalendarSvg)`
  stroke: #da1414;
  fill: #da1414;
`;

export const StyleGreenSvg = styled(StyledCalendarSvg)`
  stroke: #3cbc81;
`;
