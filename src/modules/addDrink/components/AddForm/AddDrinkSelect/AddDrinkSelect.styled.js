import Select from "react-select";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
  .addDrink__ {
    &control {
      width: 100%;
      background: transparent;
      border-radius: 0;
      align-items: start;
      gap: 8px;
      border: none !important;
      box-shadow: none !important;
      outline: transparent !important;
      &:hover,
      &:focus {
        border-bottom: 1px solid rgba(243, 243, 243, 0.5);
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        outline-color: transparent;
      }
      & svg {
        transition: ${({ theme }) =>
          theme.transition};transform 200ms ease-in-out;
      }
      &--menu-is-open {
        & svg {
          transform: rotateX(180deg);
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: black;
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
      font-family: 'Manrope-400';
      font-size: 14px;
      font-weight: 400;
      line-height: 14px; /* 100% */
    }
    &indicators {
      padding: 0;
      width: 20px;
      height: 20px;
      & svg {
        width: 20px;
        height: 20px;
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
      font-family: 'Manrope-400';
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
        width: 20px;
        height: 20px;
      }
    }
    &menu {
      margin-top: -10px;
      width: fit-content;
      background: ${({ theme }) => theme.colors.secondaryText};
      border-radius: 12px;
      color: rgba(243, 243, 243, 0.4);
      white-space: nowrap;
      font-family: 'Manrope-400';
      font-size: 12px;
      font-weight: 400;
      line-height: 1.33; /* 133.333% */
      right: 0;
      padding: 8px;
    }
    &menu-list {
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
      }
    }
    &option {
      height: 18px;
      text-overflow: ellipsis;
      cursor: pointer;
      color: rgba(243, 243, 243, 0.4);
      font-family: 'Manrope-400';
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

    @media screen and (min-width: 768px) {
      .addDrink__ {
        &menu-list {
          gap: 8px;
        }
        &menu {
          border-radius: 20px;
          padding: 14px;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      addDrink__ {
        &option {
          font-size: 14px;
          line-height: 1.28; /*133.333% */
        }
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  color: ${({ theme }) => theme.colors.mainText};
  height: 34px;
  @media screen and (min-width: 768px) {
    height: 41px;
  }
`;

export const LabelStyled = styled.div`
  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Manrope-400";
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 31px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    letter-spacing: -0.32px;
    font-size: 16px;
  }
`;
