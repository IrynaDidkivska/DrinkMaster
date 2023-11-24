import { useDispatch, useSelector } from 'react-redux';
import {
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
} from './MyJustDrinks.styled';
import { addFavoriteThunk } from '../../../../redux/Drinks/operations';
import { selectDetails } from '../../../../redux/Drinks/selectors';

const MyJustDrinks = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  return (
    <StyledJustDrinks>
      <div>
        <StyledTitleSection>{details.drink}</StyledTitleSection>
        <StyledJustType>
          {details.glass} / {details.alcoholic}
        </StyledJustType>
        <StyledJustText>{details.description}</StyledJustText>

        <StyledJustButton
          onClick={() => {
            dispatch(addFavoriteThunk(details._id));
          }}
        >
          Add to favorite drinks
        </StyledJustButton>
      </div>
      <StyledJustImages src={details.drinkThumb} alt={details.drink} />
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
