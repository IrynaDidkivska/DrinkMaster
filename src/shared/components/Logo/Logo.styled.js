import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: url(https://sweezy-cursors.com/wp-content/uploads/cursor/summer-cocktail-animated/summer-cocktail-animated-cursor-2-32x32.png),
    default !important;

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.colors.iconColor};
  }

  @media screen and (min-width: 768px) {
    gap: 14px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const StyledLogoTitle = styled.div`
  margin-top: 1px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
