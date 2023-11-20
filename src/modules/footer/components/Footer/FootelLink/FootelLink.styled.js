import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 80px;
`;

export const StyledLinkFooter = styled(Link)`
  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  color: ${({ theme }) => theme.footer.color};
  background: transparent;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  //TODO: Fix hover
  &:hover,
  &:focus {
  }

  &:active {
  }
`;
