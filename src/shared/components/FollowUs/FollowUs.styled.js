import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 16px;
  svg {
    width: 28px;
    height: 28px;
    fill: ${({ theme }) => theme.button.ligth};
    background: ${({ theme }) => theme.background.main};
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
`;
