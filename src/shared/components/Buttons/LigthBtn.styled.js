import styled from 'styled-components';

export const StyledBtn = styled.button`
  min-width: 132px;
  padding: 14px 40px;

  font-family: 'Manrope-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  text-align: center;

  color: ${({ theme }) => theme.button.dark};
  background: ${({ theme }) => theme.button.ligth};

  border-radius: 42px;
  border: 2px solid transparent;
  outline: transparent;

  &:hover {
    color: ${({ theme }) => theme.button.ligth};
    background: ${({ theme }) => theme.button.dark};
    border: 2px solid rgba(243, 243, 243, 0.2);
    transition: ${({ theme }) => theme.transition};
  }

  &:focus,
  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
`;
