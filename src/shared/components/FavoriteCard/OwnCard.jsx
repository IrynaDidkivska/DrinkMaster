import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteFromFavoriteThunk } from "../../../redux/Drinks/operations";
import { SpriteSVG } from "../../icons/SpriteSVG";
import {
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxDel,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxStatus,
} from "./FavoriteCard.styled";

const OwnCard = ({ ownitem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = (_id) => {
    console.log(_id);
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={ownitem.drinkThumb} alt={ownitem.drink} />
      <DrinkCardItemFaxName>{ownitem.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{ownitem.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {ownitem.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(ownitem._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel
          type="button"
          onClick={() => {
            dispatch(deleteFromFavoriteThunk(ownitem._id));
          }}
        >
          <SpriteSVG name={"trash"} />
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default OwnCard;

OwnCard.propTypes = {
  ownitem: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    alcoholic: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
