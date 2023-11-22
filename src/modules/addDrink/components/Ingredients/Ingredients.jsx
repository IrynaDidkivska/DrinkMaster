import { useState } from 'react';
import Subtitle from '../../../../shared/components/Title/Subtitle';
import IngredientItem from './IngredientItem/IngredientItem';
import {
  IngredientsListStyled,
  IngredientsWrapperStyled,
  ListHeaderStyled,
} from './Ingredients.styled';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';
import { nanoid } from 'nanoid';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), name: '', volume: '1 cl' },
    { id: nanoid(), name: '', volume: '1 cl' },
    { id: nanoid(), name: '', volume: '1 cl' },
  ]);

  const removeIngredient = id => {
    setIngredients(ingredients.filter(el => el.id !== id));
  };
  const changeIngredient = ingredient => {
    const newIngredients = ingredients.map(el => {
      if (el.id === ingredient.id) {
        return { ...el, ...ingredient };
      }
      return el;
    });
    setIngredients(newIngredients);
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
            changeIngredient={changeIngredient}
            ingredientData={ingredient}
          />
        ))}
      </IngredientsListStyled>
    </IngredientsWrapperStyled>
  );
};

export default Ingredients;
