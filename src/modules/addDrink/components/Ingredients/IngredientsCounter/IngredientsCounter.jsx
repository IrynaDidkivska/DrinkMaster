import {
  CountViveStyled,
  DecButtonStyled,
  IncButtonStyled,
  WrapperStyled,
} from './IngredientsCounter.styled';

const IngredientsCounter = () => {
  return (
    <WrapperStyled>
      <DecButtonStyled type="button">-</DecButtonStyled>
      <CountViveStyled>3</CountViveStyled>
      <IncButtonStyled type="button">+</IncButtonStyled>
    </WrapperStyled>
  );
};

export default IngredientsCounter;
