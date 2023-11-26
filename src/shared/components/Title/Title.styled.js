import { styled } from 'styled-components';

export const StyledTitle = styled.h1`
  font-family: 'Manrope-600', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  color: ${({ theme }) => theme.colors.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    margin-top: 18px;
  }
`;
