// Welcome Page Sign Links

import styled from "styled-components";
import { AuthLink } from "../../StyledLink/StyledLink.styled";

export const SignUp = styled(AuthLink)`
  color: ${({ theme }) => theme.button.dark};
  background: ${({ theme }) => theme.button.ligth};

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.2);

    color: ${({ theme }) => theme.button.ligth};
    background: ${({ theme }) => theme.button.dark};
    transition: ${({ theme }) => theme.transition};
  }
`;

export const SignIn = styled(AuthLink)`
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;

  &:hover,
  &:focus {
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
  }
  &:active {
    border: none;
    color: ${({ theme }) => theme.colors.mainText};
    background: ${({ theme }) => theme.background.dropdown};
  }
`;
