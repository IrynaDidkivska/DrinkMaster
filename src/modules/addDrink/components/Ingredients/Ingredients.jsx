import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getIngredientsThunk } from '@/redux/Filters/operations';
import Subtitle from '@/shared/components/Title/Subtitle';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';
import IngredientItem from './IngredientItem/IngredientItem';
import {
  IngredientsListStyled,
  IngredientsWrapperStyled,
  ListHeaderStyled,
} from './Ingredients.styled';

const Ingredients = ({ setIngredientsGeneral }) => {
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), title: '', ingredientId: '', measure: '1 cl' },
    { id: nanoid(), title: '', ingredientId: '', measure: '1 cl' },
    { id: nanoid(), title: '', ingredientId: '', measure: '1 cl' },
  ]);

  useEffect(() => {
    setIngredientsGeneral(ingredients);
  }, [ingredients]);

  useEffect(() => {
    dispatch(getIngredientsThunk({ page: 0, limit: 0 }));
  }, [dispatch]);

  const removeIngredient = id => {
    if (ingredients.length >= 3) {
      setIngredients(ingredients.filter(el => el.id !== id));
    }
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
