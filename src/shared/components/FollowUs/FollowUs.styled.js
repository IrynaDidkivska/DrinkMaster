import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 16px;
  li {
    &:hover,
    &:focus,
    &:active {
      scale: 1;
    }
  }
  svg {
    width: 28px;
    height: 28px;
    opacity: 0.8;
    fill: ${({ theme }) => theme.footer.color};
    background: ${({ theme }) => theme.footer.bacground};
    &:hover,
    &:focus,
    &:active {
      opacity: 0.9;
      scale: 1.3;
    }
  }
`;

export const StyledSocLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(243, 243, 243, 0.8);
  }
`;
