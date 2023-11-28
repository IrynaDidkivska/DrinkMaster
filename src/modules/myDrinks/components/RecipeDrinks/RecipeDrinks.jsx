import { useSelector } from 'react-redux';

import { selectDetails } from '../../../../redux/Drinks/selectors';

import RecipeImage from '../RecipeImg/RecipeImg';

import {
  StyledLink,
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
        <StyledRecipeText>
          {details.instructions}{' '}
          <StyledLink
            href={details.video}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </StyledLink>
        </StyledRecipeText>
        <RecipeImage />
      </StyledWrapperContent>
    </StyledRecipeDrinks>
  );
};

export default RecipeDrinks;
