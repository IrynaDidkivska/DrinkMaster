import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: none;

  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42; /* 128.571% */
  text-align: center;

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
    padding: 18px 44px;
    line-height: 1.6; /* 160% */
  }
`;

// Welcome Page Sign Links

export const AuthLink = styled(Link)`
  min-width: 132px;
  height: 46px;
  padding: 14px 40px;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: none;

  font-family: "Manrope-600", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28; /* 128.571% */
  text-align: center;

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
