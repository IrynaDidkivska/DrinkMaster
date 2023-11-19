import DrinkFavImage from "../../components/DrinkCardItem/Rectangle40559.png";
import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from "./DrinkCardItem.styled";

const DrinkCartItem = ({ _id, drinkThumb, drink }) => {
  return (
    <DrinkCardItemContainer key={_id}>
      <DrinkCardItemImage src={drinkThumb} alt={drink} />
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore href="редірект ту Май Дрінк">
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
  );
};

export default DrinkCartItem;
