import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxDel,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxStatus,
} from "./Card.styled";
import { deleteFromFavoriteThunk } from "../../../redux/Drinks/operations";
import { SpriteSVG } from "../../icons/SpriteSVG";
import { toast } from "react-toastify";
import Coctail from "../../../shared/img/image.png";
import { useState } from "react";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleSeeMore = (_id) => {
    navigate(`/drinks/${_id}`);
  };

  const handleRemoveFavorite = () => {
    dispatch(deleteFromFavoriteThunk(data._id));
    toast.success("You removed drink from your favorite");
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // Handle image load error if needed
    setImageLoaded(false);
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg
        src={data.drinkThumb}
        // alt={data.drink}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {!imageLoaded && (
        <DrinkCardItemFaxImg
          src={Coctail}
          // alt={data.drink}
          style={{ position: "absolute", top: 0 }}
        />
      )}
      <DrinkCardItemFaxName>{data.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{data.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {data.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(data._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel type="button" onClick={handleRemoveFavorite}>
          <SpriteSVG name={"trash"} />
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    alcoholic: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
