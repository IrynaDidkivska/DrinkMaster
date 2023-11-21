import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from "./DrinkCardItem.styled";

const DrinkCardItem = ({ drink }) => {
  const navigate = useNavigate();

  const handleSeeMore = (_id) => {
    console.log(_id);
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemContainer key={drink._id}>
      <DrinkCardItemImage src={drink.drinkThumb} alt={drink.drink} />
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{drink.drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore onClick={() => handleSeeMore(drink._id)}>
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
  );
};

export default DrinkCardItem;

DrinkCardItem.propTypes = {
  drink: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
  }).isRequired,
};
