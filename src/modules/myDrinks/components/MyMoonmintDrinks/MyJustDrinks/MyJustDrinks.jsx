import { useDispatch, useSelector } from "react-redux";
import Title from "../../../../../shared/components/Title/Title";
// import Caipirinha from "../picture/Caipirinha.png";
import {
  OverlayJustLeft,
  OverlayJustRight,
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustSpan,
  StyledJustText,
} from "./MyJustDrinks.styled";
import {
  addFavoriteThunk,
  getByIDThunk,
} from "../../../../../redux/Drinks/operations";
import { useEffect } from "react";
import { selectDetails } from "../../../../../redux/Drinks/selectors";
import { useParams } from "react-router-dom";
import RecipeDrinks from "../RecipeDrinks/RecipeDrinks";

const MyJustDrinks = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(getByIDThunk(drinkId));
  }, [dispatch, drinkId]);

  return (
    <StyledJustDrinks>
      <div>
        <Title Title={details.drink} />
        <StyledJustSpan>
          {details.glass} / {details.alcoholic}
        </StyledJustSpan>
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
      <RecipeDrinks data={details} />
      <OverlayJustLeft />
      <OverlayJustRight />
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
