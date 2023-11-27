import styled from 'styled-components';
import { ComponentWrapperStyled } from '../../addDrink.styled';

export const ListHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const IngredientsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const IngredientsWrapperStyled = styled(ComponentWrapperStyled)`
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;
