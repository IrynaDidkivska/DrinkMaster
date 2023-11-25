import { useDispatch, useSelector } from "react-redux";
import {
  DrinkIDImage,
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
  WrapperPosition,
} from "./MyJustDrinks.styled";
import { addFavoriteThunk } from "../../../../redux/Drinks/operations";
import { selectDetails } from "../../../../redux/Drinks/selectors";
import { useState } from "react";
import { toast } from "react-toastify";
import Coctail from "../../../../shared/img/image.png";

const MyJustDrinks = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = () => {
    dispatch(addFavoriteThunk(details._id));
    toast.success("You added drink to your favorite");
    setIsFavorite(true);
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

        <StyledJustButton onClick={handleAddFavorite} disabled={isFavorite}>
          {isFavorite ? "Added to favorites" : "Add to favorite drinks"}
        </StyledJustButton>
      </div>

      <WrapperPosition>
        <DrinkIDImage
          onLoad={handleImageLoad}
          onError={handleImageError}
          src={details.drinkThumb}
          // alt={details.drink}
        />
        {!imageLoaded && (
          <StyledJustImages
            src={Coctail}
            // alt={data.drink}
            style={{ position: "absolute", top: 0 }}
          />
        )}
      </WrapperPosition>
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
