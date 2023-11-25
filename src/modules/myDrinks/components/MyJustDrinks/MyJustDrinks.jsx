import { useDispatch, useSelector } from "react-redux";
import {
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
} from "./MyJustDrinks.styled";
import { addFavoriteThunk } from "../../../../redux/Drinks/operations";
import { selectDetails } from "../../../../redux/Drinks/selectors";
import { useState } from "react";
import { toast } from "react-toastify";

const MyJustDrinks = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = () => {
    dispatch(addFavoriteThunk(details._id));
    toast.success("You added drink to your favorite");
    setIsFavorite(true);
  };

  return (
    <StyledJustDrinks>
      <div>
        <StyledTitleSection>{details.drink}</StyledTitleSection>
        <StyledJustType>
          {details.glass} / {details.alcoholic}
        </StyledJustType>
        <StyledJustText>{details.description}</StyledJustText>

        <StyledJustButton onClick={handleAddFavorite} disabled={isFavorite}>
          {isFavorite ? "Added to favorites" : "Add to favorite drinks"}
        </StyledJustButton>
      </div>
      <StyledJustImages src={details.drinkThumb} alt={details.drink} />
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
