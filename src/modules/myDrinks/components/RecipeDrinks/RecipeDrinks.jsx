import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import coctail375 from '../../images/coctail375.png';
import coctail768 from '../../images/coctail768.png';
import coctail1440 from '../../images/coctail1440.png';
import {
  StyledRecipTitle,
  StyledRecipeDrinks,
  StyledRecipeImages,
  StyledRecipeText,
  StyledWrapperContent,
} from './RecipeDrinks.styled';
import { selectDetails } from '../../../../redux/Drinks/selectors';

const RecipeDrinks = () => {
  const details = useSelector(selectDetails);

  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <StyledRecipeDrinks>
      <StyledRecipTitle>Recipe Preparation</StyledRecipTitle>

      <StyledWrapperContent>
        <StyledRecipeText>{details.instructions}</StyledRecipeText>

        {isMobileScreen && (
          <StyledRecipeImages src={coctail375} alt="Coctail" />
        )}
        {isTabletScreen && (
          <StyledRecipeImages src={coctail768} alt="Coctail" />
        )}
        {isDesktopScreen && (
          <StyledRecipeImages src={coctail1440} alt="Coctail" />
        )}
      </StyledWrapperContent>
    </StyledRecipeDrinks>
  );
};

export default RecipeDrinks;
