import Subtitle from '../../../../shared/components/Title/Subtitle';
import { ComponentWrapperStyled } from '../../addDrink.styled';
import IngredientItem from './IngredientItem/IngredientItem';
import { IngredientsListStyled, ListHeaderStyled } from './Ingredients.styled';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';

const Ingredients = () => {
  return (
    <ComponentWrapperStyled>
      <ListHeaderStyled>
        <Subtitle Subtitle="Ingredients" />
        <IngredientsCounter />
      </ListHeaderStyled>

      <IngredientsListStyled>
        <IngredientItem />
        <IngredientItem />
        <IngredientItem />
      </IngredientsListStyled>
    </ComponentWrapperStyled>
  );
};

export default Ingredients;
