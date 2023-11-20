import styled from 'styled-components';
import { ComponentWrapperStyled } from '../../addDrink.styled';

export const AddFormWrapperStyled = styled(ComponentWrapperStyled)`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const ImgContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.dropdown};
  border-radius: 8px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    background: rgba(22, 31, 55, 0.5);
  }
`;

export const AddImgButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainText};
  border-radius: 6px;
  border: none;
  & svg {
    width: 28px;
    height: 28px;
    stroke: ${({ theme }) => theme.colors.secondaryText};
  }
`;
export const AddImgLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
`;
