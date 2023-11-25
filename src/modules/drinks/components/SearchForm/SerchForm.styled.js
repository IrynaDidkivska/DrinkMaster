import Select from "react-select";
import styled from "styled-components";

export const FormStyled = styled("form")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.mainText};

  input {
    width: 100%;
    padding: 18px 24px;
    font-family: "Manrope-400";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28; /* 128.571% */

    background: transparent;
    border-radius: 200px;
    border: 1px solid ${({ theme }) => theme.colors.link};
    outline: transparent;
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.mainPage};

    &::placeholder {
      color: ${({ theme }) => theme.colors.mainPage};
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.28; /* 128.571% */
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    margin-top: 60px;
    input {
      width: 264px;
      padding: 14px 24px;
      font-size: 17px;
      line-height: 1.56;
      &::placeholder {
        font-size: 17px;
        line-height: 1.56;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-top: 80px;
  }
`;
// Search button
export const InputContStyled = styled("div")`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    top: 17px;
    right: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    cursor: pointer;

    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
    }
    svg {
      width: 20px;
      height: 20px;
      transition: ${({ theme }) => theme.transition};
      stroke: ${({ theme }) => theme.colors.mainText};
      fill: transparent;
      &:hover,
      &:focus {
        scale: 1.3;
      }
    }
  }
`;

// Select
export const SelectStyled = styled(Select)`
  width: 100%;
  .customSelect__ {
    &control {
      color: ${({ theme }) => theme.popUp.main}; //#F3F3F3
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.28;
      border-radius: 200px;
      /* background-color: lightblue; */
      background-color: ${({ theme }) => theme.popUp.secondary}; //#161F37
      border: none !important;
      box-shadow: none !important;
      outline: transparent !important;

      &:hover,
      &:focus {
        border: none;
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        border: none;
        outline: transparent;
        outline-color: transparent;
      }
      & svg {
        transition: ${({ theme }) => theme.transition};
        stroke: ${({ theme }) => theme.popUp.main};
      }
      &--menu-is-open {
        & svg {
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: black;
      }
      @media (min-width: 768px) {
        width: 199px;
        font-size: 17px;
        line-height: 1.56;
      }
    }
    &option {
      padding: 0;
      text-overflow: ellipsis;
    }

    &value-container {
      padding: 18px 24px;
      padding-right: 0;
      @media (min-width: 768px) {
        padding: 14px 24px;
        padding-right: 0;
      }
    }
    &placeholder {
      color: ${({ theme }) => theme.popUp.main};
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      color: ${({ theme }) => theme.colors.mainText};
      padding: 0;
    }
    &indicators {
      & svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.popUp.main};
      }
    }
    &input-container {
      color: ${({ theme }) => theme.colors.active};
      margin: 0;
      padding: 0;
    }
    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      padding-right: 17px;
      & svg {
        width: 24px;
        height: 24px;
      }
    }
    &menu {
      margin-top: 4px;
      border-radius: 12px;

      background-color: ${({ theme }) => theme.switcher.color};
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 128%;
      padding: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media (min-width: 768px) {
        width: 199px;
        font-size: 17px;
        line-height: 1.56;
        border-radius: 20px;
      }
    }
    &menu-list {
      text-overflow: ellipsis;
      overflow-x: hidden;
      gap: 8px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.background.scrollbar};
        border-radius: 20px;
        border: 8px solid transparent;
      }
      @media (min-width: 768px) {
        padding: 6px 16px;
      }
    }
    &option {
      text-overflow: ellipsis;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.mainPage};
      background: none;
      &--is-focused,
      &:active,
      &--is-selected {
        background-color: none;

        color: ${({ theme }) => theme.colors.mainText};
        &:active {
          background-color: transparent;
        }
      }
    }
    &input {
      color: red;
    }
  }
`;

export const StyledResetButton = styled.button`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
