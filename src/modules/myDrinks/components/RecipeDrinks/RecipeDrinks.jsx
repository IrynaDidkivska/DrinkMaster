import { useSelector } from 'react-redux';

import { selectDetails } from '../../../../redux/Drinks/selectors';

import RecipeImage from '../RecipeImg/RecipeImg';

import {
  StyledRecipTitle,
  StyledRecipeDrinks,
  StyledRecipeText,
  StyledWrapperContent,
} from './RecipeDrinks.styled';

const RecipeDrinks = () => {
  const details = useSelector(selectDetails);

  return (
    <StyledRecipeDrinks>
      <StyledRecipTitle>Recipe Preparation</StyledRecipTitle>

      <StyledWrapperContent>
        <StyledRecipeText>{details.instructions}</StyledRecipeText>

        <RecipeImage />
      </StyledWrapperContent>
    </StyledRecipeDrinks>
  );
};

export default RecipeDrinks;
