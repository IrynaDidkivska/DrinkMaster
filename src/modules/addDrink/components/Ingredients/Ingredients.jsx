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
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', volume: 1 },
    { id: 2, name: '', volume: 1 },
    { id: 3, name: '', volume: 1 },
  ]);

  const removeIngredient = id => {
    setIngredients(ingredients.filter(el => el.id !== id));
  };
  const changeIngredient = id => {
    const newArr = ingredients.map(el => {});
    console.log();
    setIngredients(ingredients.filter(el => el.id !== id));
  };
  return (
    <IngredientsWrapperStyled>
      <ListHeaderStyled>
        <Subtitle Subtitle="Ingredients" />
        <IngredientsCounter
          ingredientsList={ingredients}
          setIngredients={setIngredients}
        />
      </ListHeaderStyled>

      <IngredientsListStyled>
        {ingredients.map(ingredient => (
          <IngredientItem
            key={ingredient.id}
            removeIngredient={removeIngredient}
            ingredientData={ingredient}
          />
        ))}
      </IngredientsListStyled>
    </IngredientsWrapperStyled>
  );
};

export default Ingredients;
