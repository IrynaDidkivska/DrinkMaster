import { ComponentWrapperStyled } from '../../addDrink.styled';
import { SubtitleStyled, TextareaStyled } from './RecipePreparation.styled';

const RecipePreparation = ({ setInstructions }) => {
  return (
    <ComponentWrapperStyled>
      <SubtitleStyled Subtitle="Recipe Preparation" />
      <TextareaStyled
        name="preparation"
        id="Preparation"
        onChange={e => {
          setInstructions(e.target.value);
        }}
        placeholder="Enter the recipe"
        width="335"
        height="184"
      ></TextareaStyled>
    </ComponentWrapperStyled>
  );
};

export default RecipePreparation;
