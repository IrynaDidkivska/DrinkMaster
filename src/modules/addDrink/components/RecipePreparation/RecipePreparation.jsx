import { ComponentWrapperStyled } from '../../addDrink.styled';
import { TextareaStyled } from './RecipePreparation.styled';

const RecipePreparation = () => {
  return (
    <ComponentWrapperStyled>
      <h2>Recipe Preparation</h2>
      <TextareaStyled
        name="preparation"
        id="Preparation"
        placeholder="Enter the recipe"
        cols="30"
        rows="10"
      ></TextareaStyled>
    </ComponentWrapperStyled>
  );
};

export default RecipePreparation;
