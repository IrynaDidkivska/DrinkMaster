
import { IngredientsList } from './IngredientsList.styled';
import Ingredient from '../IngredientsItem/Ingredients';

const IngredientList = () => {
  
  const drinkItems = Array(5).fill(null).map((_, index) => (
    <Ingredient key={index} />
  ));

  return <IngredientsList>{drinkItems}</IngredientsList>;
};

export { IngredientList };