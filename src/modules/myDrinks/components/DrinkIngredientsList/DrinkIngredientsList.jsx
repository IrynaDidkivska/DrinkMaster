import DrinkIngredientsItem from '../DrinkIngredientsItem/DrinkIngredientsItem';
import {
  StyledDrinkIngredientsList,
  StyledIngredientsTitle,
} from './DrinkIngredientsList.styled';

const DrinkIngredientsList = () => {
  return (
    <>
      <StyledIngredientsTitle>Ingredients</StyledIngredientsTitle>
      <StyledDrinkIngredientsList>
        <DrinkIngredientsItem />
      </StyledDrinkIngredientsList>
    </>
  );
};

export default DrinkIngredientsList;
