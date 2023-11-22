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

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = (_id) => {
    console.log(_id);
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={data.drinkThumb} alt={data.drink} />
      <DrinkCardItemFaxName>{data.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{data.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {data.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(data._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel
          type="button"
          onClick={() => {
            dispatch(deleteFromFavoriteThunk(data._id));
          }}
        >
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
