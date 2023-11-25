import { useDispatch, useSelector } from 'react-redux';
import {
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
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

const MyJustDrinks = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const isFavorite = useSelector(selectFavorites);
  const drinkDetails = useSelector(selectDetails);

  console.log('isFavorite', isFavorite);
  console.log('drinkDetails', drinkDetails);

  const id = isFavorite.find(el => el.id === drinkDetails._id);

  console.log('То что я ищу', id);

  const handleAddFavorite = () => {
    dispatch(addFavoriteThunk(details._id));
    toast.success('You added drink to your favorite');
  };

  const handleRemoveFavorite = () => {
    dispatch(deleteFromFavoriteThunk(details._id));
    toast.success('You removed drink from your favorite');
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
          Add to favorite drinks
        </StyledJustButton>

        <StyledJustButton onClick={handleRemoveFavorite}>
          Remove from favorites
        </StyledJustButton>
      </div>
      <StyledJustImages src={details.drinkThumb} alt={details.drink} />
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
