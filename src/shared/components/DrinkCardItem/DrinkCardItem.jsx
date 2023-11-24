import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Coctail from "../../img/image.png";
import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from "./DrinkCardItem.styled";
import { useState } from "react";

const DrinkCardItem = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleSeeMore = (_id) => {
    navigate(`/drinks/${_id}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("loading");
  };

  const handleImageError = () => {
    // Handle image load error if needed
    setImageLoaded(false);
    console.log("loadingError");
  };

  return (
    <DrinkCardItemContainer key={data._id}>
      <DrinkCardItemImage
        src={data.drinkThumb}
        alt={" "}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {!imageLoaded && (
        <DrinkCardItemImage
          src={Coctail}
          alt={data.drink}
          style={{ position: "absolute", top: 0 }}
        />
      )}
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{data.drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore onClick={() => handleSeeMore(data._id)}>
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
  );
};

export default DrinkCardItem;

DrinkCardItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
  }).isRequired,
};
