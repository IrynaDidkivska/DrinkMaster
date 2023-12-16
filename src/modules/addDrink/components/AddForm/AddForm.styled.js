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
export const HiddenInputStyled = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const ImgContainerStyled = styled.div`
  background-image: ${props =>
    props.$bgImg ? `url('${props.$bgImg}')` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 335px;
  height: 320px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.dropdown};
  border-radius: 8px;
  margin-bottom: 40px;
  & label,
  span {
    display: ${props => (props.$bgImg ? `none` : `flex`)};
  }
  &:hover {
    & label,
    span {
      display: flex;
    }
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const AddImgLabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.popUp.main};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  & svg {
    width: 28px;
    height: 28px;
    stroke: ${({ theme }) => theme.popUp.secondary};
  }
`;
export const AddImgContainerStyled = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.popUp.main};
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  cursor: default;
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
