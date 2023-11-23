import styled from "styled-components";

export const SubscribeFormStyled = styled.div`
  width: 335px;
  margin-bottom: 80px;

  p {
    color: ${({ theme }) => theme.footer.color};
    align-items: center;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.footer.color};

    input {
      color: ${({ theme }) => theme.footer.color};
      height: 54px;
      border-radius: 200px;
      border: 1px solid rgba(243, 243, 243, 0.2);
      opacity: 0.8;
      margin-bottom: 18px;
      padding-left: 24px;
      background: transparent;
      outline: transparent;
      transition: ${({ theme }) => theme.transition};

      cursor: pointer;

      &::placeholder {
        text-align: left;
        color: ${({ theme }) => theme.footer.color};
      }
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.footer.color};
        border: 1px solid rgba(243, 243, 243, 0.5);
        opacity: 0.8;
      }
    }
    button {
      color: ${({ theme }) => theme.footer.color};

      height: 54px;
      border-radius: 200px;
      border: 1px solid rgba(243, 243, 243, 0.2);
      opacity: 0.8;
      background: transparent;
      transition: ${({ theme }) => theme.transition};

      cursor: pointer;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.button.dark};
        background: ${({ theme }) => theme.button.ligth};
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 309px;
    form {
      width: 309px;
    }
  }
`;
