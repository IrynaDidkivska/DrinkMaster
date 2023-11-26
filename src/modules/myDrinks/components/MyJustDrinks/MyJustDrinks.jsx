import { useDispatch, useSelector } from 'react-redux';
import {
  DrinkIDImage,
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
  WrapperPosition,
} from './MyJustDrinks.styled';
import {
  addFavoriteThunk,
  deleteFromFavoriteThunk,
} from '../../../../redux/Drinks/operations';
import {
  selectByID,
  selectDetails,
  selectFavorites,
} from '../../../../redux/Drinks/selectors';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Coctail from '../../../../shared/img/image.png';

const MyJustDrinks = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const drinkDetails = useSelector(selectDetails);

  console.log('drinkDetails', drinkDetails.isFavorite);

  const handleAddFavorite = () => {
    if (!drinkDetails.isFavorite) {
      dispatch(addFavoriteThunk(details._id));
      toast.success('You added drink to your favorite');
    } else {
      dispatch(deleteFromFavoriteThunk(details._id));
      toast.success('You removed drink from your favorite');
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <StyledJustDrinks>
      <div>
        <StyledTitleSection>{details.drink}</StyledTitleSection>
        <StyledJustType>
          {details.glass} / {details.alcoholic}
        </StyledJustType>
        <StyledJustText>{details.description}</StyledJustText>
        <StyledJustButton onClick={handleAddFavorite}>
          {drinkDetails.isFavorite
            ? 'Remove from favorites'
            : 'Add to favorite drinks'}
        </StyledJustButton>
      </div>

      <WrapperPosition>
        <DrinkIDImage
          onLoad={handleImageLoad}
          onError={handleImageError}
          src={details.drinkThumb}
          alt={details.drink}
        />
        {!imageLoaded && (
          <StyledJustImages
            src={Coctail}
            alt="Picture of general drink"
            style={{ position: 'absolute', top: 0 }}
          />
        )}
      </WrapperPosition>
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
