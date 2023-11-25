import { useEffect, useState } from 'react';
import Subtitle from '../../../../shared/components/Title/Subtitle';
import IngredientItem from './IngredientItem/IngredientItem';
import {
  IngredientsListStyled,
  IngredientsWrapperStyled,
  ListHeaderStyled,
} from './Ingredients.styled';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { getIngredientsThunk } from '../../../../redux/Filters/operations';

const Ingredients = ({ setIngredientsGeneral }) => {
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), title: '', ingredientId: '', measure: '1' },
    { id: nanoid(), title: '', ingredientId: '', measure: '1' },
    { id: nanoid(), title: '', ingredientId: '', measure: '1' },
  ]);

  useEffect(() => {
    setIngredientsGeneral(ingredients);
  }, [ingredients]);

  useEffect(() => {
    dispatch(getIngredientsThunk({ page: 1, limit: 100 }));
  }, []);

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
