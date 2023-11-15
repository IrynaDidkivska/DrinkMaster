import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const StyledLogoTitle = styled.div`
  font-family: 'Manrope-600', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.mainText};
`;
