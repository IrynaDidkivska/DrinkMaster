import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
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

  const opts = {
    height: '400',
    width: '500',
    playerVars: {
      autoplay: 1, // set to 1 for autoplay
    },
  };

  return (
    <StyledRecipeDrinks>
      <StyledRecipTitle>Recipe Preparation</StyledRecipTitle>
      <StyledWrapperContent>
        <StyledRecipeText>{details.instructions}</StyledRecipeText>
        <StyledLink>
          {details.video && details.video !== 'Sorry, not specified' && (
            <StyledLink>
              <YouTube videoId={extractVideoId(details.video)} opts={opts} />
            </StyledLink>
          )}
          {(details.video == 'Sorry, not specified' || !details.video) && (
            <RecipeImage />
          )}
        </StyledLink>
      </StyledWrapperContent>
    </StyledRecipeDrinks>
  );
};

// Helper function to extract the video ID from the YouTube URL
const extractVideoId = url => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|.*[?&]v=)([^"&?/ ]{11})/
  );
  return match ? match[1] : null;
};

export default RecipeDrinks;
