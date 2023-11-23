import Title from "../../../../../shared/components/Title/Title";
import Coctail from "../picture/Coctail.png";
import {
  StyledRecipeBoxText,
  StyledRecipeDrinks,
  StyledRecipeImages,
  StyledRecipeText,
} from "./RecipeDrinks.styled";

const RecipeDrinks = ({ data }) => {
  return (
    <StyledRecipeDrinks>
      <div>
        <Title Title="Recipe Preparation" />

        <StyledRecipeBoxText>
          <StyledRecipeText>{data.instructions}</StyledRecipeText>
        </StyledRecipeBoxText>
      </div>
      <StyledRecipeImages src={Coctail} alt="Coctail" />
    </StyledRecipeDrinks>
  );
};
export default RecipeDrinks;
