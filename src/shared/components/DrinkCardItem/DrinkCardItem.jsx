import { useNavigate } from "react-router-dom";
import DrinkFavImage from "../../components/DrinkCardItem/Rectangle40559.png";
import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from "./DrinkCardItem.styled";

const DrinkCartItem = ({ _id, drinkThumb, drink }) => {
  const navigate = useNavigate();

  const handleSeeMore = (_id) => {
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

export default DrinkCartItem;
