
import { IngredientsList } from './IngredientsList.styled';
import IngredientsItem from '../IngredientsItem/Ingredients';

const IngredientList = () => {
  
  const drinkItems = Array(6).fill(null).map((_, index) => (
    <IngredientsItem key={index} />
  ));

  return <IngredientsList>{drinkItems}</IngredientsList>;
};

export { IngredientList };