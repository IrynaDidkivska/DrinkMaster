// import DrinkImage from "../../components/DrinkCardItemFav/Rectangle40560.png";
import {
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxStatus,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxDel,
} from "./DrinkCardItemFav.styled";
import { SpriteSVG } from "../../icons/SpriteSVG";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromFavoriteThunk } from "../../../redux/Drinks/operations";

const DrinkCardItemFav = ({ favorite }) => {
  console.log("favorite", favorite);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = (_id) => {
    console.log(_id);
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={favorite.drinkThumb} alt={favorite.drink} />
      <DrinkCardItemFaxName>{favorite.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{favorite.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {favorite.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(favorite._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel
          type="button"
          onClick={() => {
            dispatch(deleteFromFavoriteThunk(favorite._id));
          }}
        >
          <SpriteSVG name={"trash"} />
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default DrinkCardItemFav;

DrinkCardItemFav.propTypes = {
  favorite: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    alcoholic: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
