import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledHeaderLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;

  font-family: 'Manrope-500', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;

  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;

  &:hover,
  &:focus {
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
  }

  &:active {
    color: ${({ theme }) => theme.colors.mainText};
    background: ${({ theme }) => theme.background.dropdown};
  }
`;
