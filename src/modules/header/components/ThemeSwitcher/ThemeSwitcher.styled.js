import styled from "styled-components";

export const Switcher = styled.div`
  display: flex;
  align-items: center;

  label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${({ theme }) => theme.transition};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.button.backgroundNoActive};

    &:before {
      position: absolute;
      content: "";
      width: 18px;
      height: 18px;
      left: 0px;
      bottom: 1px;
      background-color: ${({ theme }) => theme.button.backgroundActive};
      transition: ${({ theme }) => theme.transition};
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.button.backgroundActive};
  }

  input:checked + span:before {
    transform: translateX(21px);
    background-color: ${({ theme }) => theme.button.backgroundNoActive};
  }
`;