import styled from 'styled-components';

export const StyledBtnProfile = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const StyledImgProfile = styled.img`
  width: 32px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
  }
`;

export const StyledProfileName = styled.p`
  color: ${({ theme }) => theme.button.ligth};
  font-family: 'Manrope-500', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
