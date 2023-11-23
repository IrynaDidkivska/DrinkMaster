import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;

  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42; /* 128.571% */
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;

  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:active {
    /* border: transparent; */
    color: ${({ theme }) => theme.colors.mainText};
    background: ${({ theme }) => theme.background.dropdown};
  }
`;
