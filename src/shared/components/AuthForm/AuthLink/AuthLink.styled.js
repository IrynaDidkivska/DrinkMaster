// Welcome Page Sign Links

import styled from "styled-components";
import { LinkStyled } from "../../StyledLink/StyledLink.styled";

export const SignUp = styled(LinkStyled)`
  font-family: "Manrope-600", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.button.dark};
  background: ${({ theme }) => theme.button.ligth};

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.2);

    color: ${({ theme }) => theme.button.ligth};
    background: ${({ theme }) => theme.button.dark};
    transition: ${({ theme }) => theme.transition};
  }

  @media screen and (min-width: 768px) {
    min-width: 147px;
    height: 54px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12px; /* 112.5% */
  }
`;

export const SignIn = styled(LinkStyled)`
  font-family: "Manrope-600", sans-serif;
  font-size: 14px;
  font-weight: 600;
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

  @media screen and (min-width: 768px) {
    min-width: 147px;
    height: 54px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12px; /* 112.5% */
  }
`;
