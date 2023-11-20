import Subtitle from '../../../../shared/components/Title/Subtitle';
import IngredientItem from './IngredientItem/IngredientItem';
import {
  IngredientsListStyled,
  IngredientsWrapperStyled,
  ListHeaderStyled,
} from './Ingredients.styled';
import IngredientsCounter from './IngredientsCounter/IngredientsCounter';

const Ingredients = () => {
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
