import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 80px;
`;

export const StyledLinkFooter = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  color: ${({ theme }) => theme.footer.color};
  border: 1px solid transparent;
  background: transparent;
  outline: transparent;
  transition: ${({ theme }) => theme.transition};
  ${({ theme }) => theme.transition};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(243, 243, 243, 0.2);
    cursor: url(https://sweezy-cursors.com/wp-content/uploads/cursor/summer-cocktail-animated/summer-cocktail-animated-cursor-2-32x32.png),
      default !important;
  }
`;
