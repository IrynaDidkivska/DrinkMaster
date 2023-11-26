import Select from 'react-select';
import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
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
      color: ${({ theme }) => theme.popUp.main};
      border: 1px solid ${({ theme }) => theme.colors.link};
      box-shadow: none !important;
      outline: transparent !important;
      &:hover,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.link};
        cursor: pointer;
      }
      &--is-focused {
      }
      & svg {
        transition: ${({ theme }) => theme.transition};
        stroke: ${({ theme }) => theme.popUp.main};
      }
      &--menu-is-open {
        & svg {
          transform: rotateX(180deg);
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
      line-height: 1; /* 100% */
    }
    &indicators {
      padding: 0;
      width: 18px;
      height: 100%;
      & svg {
        width: 18px;
        height: 18px;
        fill: ${({ theme }) => theme.colors.mainPage};
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
      color: ${({ theme }) => theme.colors.mainText};
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
      width: fit-content;
      border-radius: 12px;
      white-space: nowrap;

      font-size: 12px;

      line-height: 1.33; /* 133.333% */
      padding: 8px;
      background-color: ${({ theme }) => theme.switcher.color};
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
        background-color: ${({ theme }) => theme.background.scrollbar};
        border-radius: 20px;
        border: 8px solid transparent;
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
      &.active,
      &--is-selected {
        color: ${({ theme }) => theme.colors.mainText};
        background: transparent;
        background-color: none;

        &.active {
          background-color: transparent;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .ingredientSelect__ {
      &control {
        width: 332px;
        height: 56px;
        padding: 14px 24px;
      }

      &single-value {
        font-size: 17px;
        line-height: 1.56; /* 100% */
      }
      &dropdown-indicator {
        & svg {
          width: 20px;
          height: 20px;
        }
      }
      &menu {
        border-radius: 20px;
        padding: 14px;
      }
      &menu-list {
        gap: 8px;
      }
      &option {
        font-size: 17px;
        line-height: 156%; /* 26.52px */
      }
    }
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputStyled = styled.input`
  background: transparent;
  padding: 16px 18px;
  width: 101px;
  height: 50px;
  border-radius: 200px;
  color: ${({ theme }) => theme.colors.mainText};
  border: 1px solid ${({ theme }) => theme.colors.link};
  opacity: 0.8;
  outline: transparent;
  line-height: 1.28; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56; /* 26.52px */
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 56px;
  }
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
    display: block;
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.colors.mainText};
  }
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    width: 20px;
    height: 20px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;
