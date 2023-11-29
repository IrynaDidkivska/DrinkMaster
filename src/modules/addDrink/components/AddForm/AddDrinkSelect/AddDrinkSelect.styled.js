import Select from 'react-select';
import styled from 'styled-components';

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
      color: ${({ theme }) => theme.popUp.main};
      &:hover,
      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.link};
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        outline-color: transparent;
      }
      & svg {
        transition: ${({ theme }) => theme.transition};
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
      color: ${({ theme }) => theme.colors.link};
      &:active {
        color: ${({ theme }) => theme.colors.mainPage};
      }
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      margin: 0;
      line-height: 14px; /* 100% */
      color: ${({ theme }) => theme.colors.mainText};
    }
    &indicators {
      padding: 0;
      width: 20px;
      height: 20px;
      & svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.mainPage};
      }
    }
    &input-container {
      color: ${({ theme }) => theme.colors.mainText};
      & input {
        width: 100px;
      }
      flex-grow: 0;
      flex-shrink: 1;
      padding: 0;
      margin: 0;
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
      background-color: ${({ theme }) => theme.switcher.color};
      border-radius: 12px;
      color: rgba(243, 243, 243, 0.4);
      white-space: nowrap;
      font-size: 12px;
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
        background-color: ${({ theme }) => theme.background.scrollbar};
        border-radius: 20px;
      }
    }
    &option {
      height: 18px;
      text-overflow: ellipsis;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.link};
      font-size: 12px;
      line-height: 1.33; /*133.333% */
      &--is-focused,
      &:active,
      &--is-selected {
        color: ${({ theme }) => theme.colors.mainText};
        background: transparent;
        background-color: none;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.link};
  height: 34px;
  @media screen and (min-width: 768px) {
    height: 41px;
  }
`;

export const LabelStyled = styled.div`
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 31px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    letter-spacing: -0.32px;
    font-size: 16px;
  }
`;
