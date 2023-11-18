import { ComponentWrapperStyled } from '../../addDrink.styled';
import { SubtitleStyled, TextareaStyled } from './RecipePreparation.styled';

const RecipePreparation = () => {
  return (
    <ComponentWrapperStyled>
      <SubtitleStyled Subtitle="Recipe Preparation" />
      <TextareaStyled
        name="preparation"
        id="Preparation"
        placeholder="Enter the recipe"
        width="335"
        height="184"
      ></TextareaStyled>
    </ComponentWrapperStyled>
  );
};

export default RecipePreparation;
