import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const StyledLogoImg = styled.img`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const StyledLogoTitle = styled.div`
  margin-top: 1px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
