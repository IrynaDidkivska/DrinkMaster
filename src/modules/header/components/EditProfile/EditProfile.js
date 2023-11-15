import styled from 'styled-components';

export const StyledBtnProfile = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  border: none;
`;

export const StyledProfileName = styled.p`
  color: ${({ theme }) => theme.button.ligth};
  font-family: 'Manrope-500', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
