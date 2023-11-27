import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import {
  CountViveStyled,
  DecButtonStyled,
  IncButtonStyled,
  WrapperStyled,
} from './IngredientsCounter.styled';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';

const IngredientsCounter = ({ ingredientsList = [], setIngredients }) => {
  const arr = [...ingredientsList];

  const addIngredient = () => {
    arr.push({ id: nanoid(), title: '', ingredientId: '', measure: '1 cl' });
  };
  const removeIngredient = () => {
    if (arr[arr.length - 1].title || arr[arr.length - 1].ingredientId) {
      return toast.error('Whoah whoah! This ingredient is not empty!');
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
