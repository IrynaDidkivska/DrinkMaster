import Select from "react-select";
import styled from "styled-components";

export const FormStyled = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`;
export const InputContStyled = styled("div")`
  width: fit-content;
  position: relative;
  width: 100%;
  & svg {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.mainText};
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InputStyled = styled("input")`
  width: 100%;
  height: 54px;
  padding: 18px 24px;
  background: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Manrope-400";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainText};
    font-family: "Manrope-400";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28; /* 128.571% */
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
  @media (min-width: 768px) {
    width: 264px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 24px;
  }
`;

export const SelectStyled = styled(Select)`
  .customSelect__ {
    &control {
      color: ${({ theme }) => theme.colors.mainText}; //#F3F3F3
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.28;
      width: 100%;
      padding: 18px 24px;
      height: 54px;
      border-radius: 200px;
      background-color: ${({ theme }) => theme.colors.secondaryText}; //#161F37
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
        stroke: ${({ theme }) => theme.colors.mainText};
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
        height: 56px;
        font-size: 17px;
        line-height: 1.56;
        padding: 14px 24px;
      }
    }
    &value-container {
      height: 23px;
      padding: 0;
    }
    &placeholder {
      color: ${({ theme }) => theme.colors.mainText};
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      color: ${({ theme }) => theme.colors.mainText};
      padding: 0;
    }
    &indicators {
      height: 24px;
      padding: 0;
      & svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.colors.mainText};
      }
    }
    &input-container {
      color: ${({ theme }) => theme.colors.secondaryText};
      height: 18px;
      margin: 0;
      padding: 0;
    }
    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      & svg {
        width: 24px;
        height: 24px;
      }
    }
    &menu {
      margin-top: 4px;
      border-radius: 12px;
      background-color: #161f37;
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 128%;
      padding: 8px;
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
      gap: 6px;
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
        background-color: #434d67;
        border-radius: 20px;
        border: 8px solid transparent;
      }
      @media (min-width: 768px) {
        padding: 6px 16px;
      }
    }
    &option {
      text-overflow: ellipsis;
      height: 18px;
      cursor: pointer;
      color: rgba(243, 243, 243, 0.4);
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
  }
`;
