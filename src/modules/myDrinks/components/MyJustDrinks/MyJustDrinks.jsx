import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { selectDetails } from '@/redux/Drinks/selectors';
import {
  addFavoriteThunk,
  deleteFromFavoriteThunk,
} from '@/redux/Drinks/operations';

import Coctail from '@/shared/img/image.png';

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

const MyJustDrinks = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const drinkDetails = useSelector(selectDetails);

  const [isFavorite, setIsFavorite] = useState(drinkDetails.isFavorite);

  useEffect(() => {
    setIsFavorite(drinkDetails.isFavorite);
  }, [drinkDetails.isFavorite]);

  const handleAddFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavoriteThunk(details._id));
      toast.success('You added drink to your favorite');
      setIsFavorite(true);
    } else {
      dispatch(deleteFromFavoriteThunk(details._id));
      toast.warning('You removed drink from your favorite');
      setIsFavorite(false);
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
        <StyledJustButton
          onClick={handleAddFavorite}
          $isFavorite={isFavorite}
          type="button"
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorite drinks'}
        </StyledJustButton>
      </div>

      <WrapperPosition>
        <DrinkIDImage
          onLoad={handleImageLoad}
          onError={handleImageError}
          src={details.drinkThumb}
          alt={details.drink}
          loading="lazy"
          width="335"
          height="400"
        />
        {!imageLoaded && (
          <StyledJustImages
            src={Coctail}
            alt="Picture of general drink"
            style={{ position: 'absolute', top: 0 }}
            loading="lazy"
          />
        )}
      </WrapperPosition>
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
