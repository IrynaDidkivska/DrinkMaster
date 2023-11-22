import { useState } from 'react';
import Subtitle from '../../../../shared/components/Title/Subtitle';
import IngredientItem from './IngredientItem/IngredientItem';
import {
  IngredientsListStyled,
  IngredientsWrapperStyled,
  ListHeaderStyled,
} from './Ingredients.styled';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';

const Ingredients = () => {
  const [count, setCount] = useState();
  return (
    <IngredientsWrapperStyled>
      <ListHeaderStyled>
        <Subtitle Subtitle="Ingredients" />
        <IngredientsCounter />
      </ListHeaderStyled>

      <IngredientsListStyled>
        <IngredientItem />
        <IngredientItem />
        <IngredientItem />
      </IngredientsListStyled>
    </IngredientsWrapperStyled>
  );
};

export default Ingredients;
