import { useDispatch, useSelector } from "react-redux";
import {
  DivWrapper,
  DrinkIDImage,
  StyledJustButton,
  StyledJustDrinks,
  StyledJustImages,
  StyledJustText,
  StyledJustType,
  StyledTitleSection,
} from "./MyJustDrinks.styled";
import { addFavoriteThunk } from "../../../../redux/Drinks/operations";
import { selectDetails } from "../../../../redux/Drinks/selectors";
import Coctail from "../../../../shared/img/image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PopularImage } from "../../../addDrink/components/PopularDrinks/PopularDrinks.styled";
import { DrinkCardItemImage } from "../../../../shared/components/DrinkCardItem/DrinkCardItem.styled";

const MyJustDrinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // Handle image load error if needed
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
          onClick={() => {
            dispatch(addFavoriteThunk(details._id));
          }}
        >
          Add to favorite drinks
        </StyledJustButton>
      </div>
      <DivWrapper>
        {/* // <StyledJustImages */}
        <DrinkIDImage
          src={details.drinkThumb}
          // alt={details.drink}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!imageLoaded && (
          <DrinkCardItemImage
            src={Coctail}
            // alt={details.drink}
            style={{ position: "absolute", top: 0 }}
          />
        )}
      </DivWrapper>
    </StyledJustDrinks>
  );
};

export default MyJustDrinks;
