import styled from 'styled-components';

export const RadioWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  + label {
    &:before {
      content: '';
      background: transparent;
      border-radius: 100%;
      border: 1.5px solid ${({ theme }) => theme.colors.mainText};
      color: ${({ theme }) => theme.colors.link};
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      margin-right: 6px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: ${({ theme }) => theme.transition};
    }
  }
  &:checked {
    + label {
      &:before {
        background-color: ${({ theme }) => theme.colors.mainText};
        box-shadow: inset 0 0 0 1.5px ${({ theme }) => theme.background.main};
        border: 1.5px solid ${({ theme }) => theme.colors.mainText};
      }
    }
  }
  &:focus {
    + label {
      &:before {
        outline: transparent;
        border-color: ${({ theme }) => theme.colors.mainText};
      }
    }
  }
  &:disabled {
    + label {
      opacity: 0.5;
      &:before {
        box-shadow: inset 0 0 0 1.5px #0a0a11;
        border-color: ${({ theme }) => theme.colors.mainText};
        background: transparent;
      }
    }
  }
  + label {
    &:empty {
      &:before {
        margin-right: 0;
      }
    }
  }
  @media screen and (min-width: 768px) {
    + label {
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border: 2px solid ${({ theme }) => theme.colors.mainText};
      }
    }
    &:checked {
      + label {
        &:before {
          box-shadow: inset 0 0 0 3px ${({ theme }) => theme.background.main};
          border: 2px solid ${({ theme }) => theme.colors.mainText};
        }
      }
    }
    &:disabled {
      + label {
        opacity: 0.5;
        &:before {
          box-shadow: inset 0 0 0 2px #0a0a11;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
