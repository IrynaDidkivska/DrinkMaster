import Select from "react-select";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IngredientSelect = styled(Select)`
  .ingredientSelect__ {
    &control {
      align-content: center;
      width: 200px;
      height: 50px;
      background: transparent;
      border-radius: 200px;
      padding: 16px 18px;
      border: 1px solid rgba(243, 243, 243, 0.5);
      box-shadow: none !important;
      outline: transparent !important;
      &:hover,
      &:focus {
        border: 1px solid rgba(243, 243, 243, 0.5);
        cursor: pointer;
      }
      &--is-focused {
      }
      & svg {
      }
      &--menu-is-open {
        & svg {
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: transparent;
      }
    }
    &value-container {
      padding: 0;
    }
    &placeholder {
    }
    &single-value {
      margin: 0;
      color: ${({ theme }) => theme.colors.mainText};
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 14px; /* 100% */
    }
    &indicators {
      padding: 0;
      width: 18px;
      height: 100%;
      & svg {
        width: 18px;
        height: 18px;
        fill: ${({ theme }) => theme.colors.mainText};
      }
    }
    &input-container {
      & input {
        width: 100px;
      }
      flex-grow: 0;
      flex-shrink: 1;
      padding: 0;
      margin: 0;
      color: #f3f3f3;
      font-family: "Manrope-400";
      font-size: 14px;
      font-weight: 400;
      line-height: 1; /* 100% */
      width: fit-content;
    }

    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      & svg {
        width: 18px;
        height: 18px;
      }
    }
    &menu {
      margin-top: 0;
      width: 200px;
      background: ${({ theme }) => theme.colors.secondaryText};
      border-radius: 12px;
      color: rgba(243, 243, 243, 0.4);
      white-space: nowrap;
      font-family: "Manrope-400";
      font-size: 12px;
      font-weight: 400;
      line-height: 1.33; /* 133.333% */
      padding: 8px;
    }
    &menu-list {
      text-overflow: ellipsis;
      gap: 6px;
      display: flex;
      flex-direction: column;
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
    }
    &option {
      height: 18px;
      text-overflow: ellipsis;
      cursor: pointer;
      color: rgba(243, 243, 243, 0.4);
      font-family: "Manrope-400";
      font-size: 12px;
      font-weight: 400;
      line-height: 1.33; /*133.333% */
      &--is-focused,
      &:active,
      &--is-selected {
        background: transparent;
        background-color: none;
        color: ${({ theme }) => theme.colors.mainText};
        &:active {
          background-color: transparent;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputStyled = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.colors.mainText};
  padding: 16px 18px;
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  opacity: 0.8;
  outline: transparent;
  color: #f3f3f3;

  /* text-align: center; */
  font-family: "Manrope-400";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
`;

export const RemoveBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  & svg {
    width: 18px;
    height: 18px;
    stroke: white;
  }
`;
