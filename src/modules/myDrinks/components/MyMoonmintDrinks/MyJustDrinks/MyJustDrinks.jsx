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
import {
  selectByID,
  selectDetails,
} from "../../../../../redux/Drinks/selectors";

const MyJustDrinks = () => {
  const dispatch = useDispatch();

  const drinkId = useSelector(selectByID);
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(getByIDThunk());
  }, [dispatch]);

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
            console.log("hello") || dispatch(addFavoriteThunk(details.id));
          }}
        >
          Add to favorite drinks
        </StyledJustButton>
      </div>
      <StyledJustImages src={details.drinkThumb} alt={details.drink} />
      <OverlayJustLeft />
      <OverlayJustRight />
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
