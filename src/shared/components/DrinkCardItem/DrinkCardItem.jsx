import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from "./DrinkCardItem.styled";

const DrinkCardItem = ({ _id, drinkThumb, drink }) => {
  const navigate = useNavigate();

  const handleSeeMore = (_id) => {
    console.log(_id);
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemContainer key={_id}>
      <DrinkCardItemImage src={drinkThumb} alt={drink} />
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore onClick={() => handleSeeMore(_id)}>
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
  );
};

export default DrinkCardItem;

DrinkCardItem.propTypes = {
  _id: PropTypes.string.isRequired,
  drinkThumb: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
};
