import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;

  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;

  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.mainText};
    background: ${({ theme }) => theme.background.dropdown};
    border: 1px solid transparent;
    cursor: url(https://sweezy-cursors.com/wp-content/uploads/cursor/summer-cocktail-animated/summer-cocktail-animated-cursor-2-32x32.png),
      default !important;
  }
`;
