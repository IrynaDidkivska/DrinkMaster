import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  CountViveStyled,
  DecButtonStyled,
  IncButtonStyled,
  WrapperStyled,
} from './IngredientsCounter.styled';

const IngredientsCounter = () => {
  return (
    <WrapperStyled>
      <DecButtonStyled type="button" disabled={false}>
        <SpriteSVG name="minus" />
      </DecButtonStyled>
      <CountViveStyled>50</CountViveStyled>
      <IncButtonStyled type="button" disabled={false}>
        <SpriteSVG name="plus" />
      </IncButtonStyled>
    </WrapperStyled>
  );
};

export default IngredientsCounter;
