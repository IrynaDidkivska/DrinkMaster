import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  CountViveStyled,
  DecButtonStyled,
  IncButtonStyled,
  WrapperStyled,
} from './IngredientsCounter.styled';
import { nanoid } from 'nanoid';

const IngredientsCounter = ({ ingredientsList = [], setIngredients }) => {
  const arr = [...ingredientsList];

  const addIngredient = () => {
    arr.push({ id: nanoid(), title: '', ingredientId: '', volume: '1' });
  };
  const removeIngredient = () => {
    if (arr[arr.length - 1].title || arr[arr.length - 1].ingredientId) {
      return console.log('Не можна видалити не порожній інгредієнт!!!');
    }
    arr.pop();
  };

  const handleChengCounter = e => {
    const { name } = e.target;
    name === 'dec' ? removeIngredient() : addIngredient();
    setIngredients(arr);
  };

  return (
    <WrapperStyled>
      <DecButtonStyled
        name="dec"
        type="button"
        disabled={arr.length <= 3 ? true : false}
        onClick={handleChengCounter}
      >
        <SpriteSVG name="minus" />
      </DecButtonStyled>
      <CountViveStyled>{arr.length}</CountViveStyled>
      <IncButtonStyled
        name="inc"
        type="button"
        disabled={false}
        onClick={handleChengCounter}
      >
        <SpriteSVG name="plus" />
      </IncButtonStyled>
    </WrapperStyled>
  );
};

export default IngredientsCounter;
