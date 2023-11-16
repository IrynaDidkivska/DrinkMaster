import ShotImage from '../../components/DrinkCardItem/Rectangle40559.png';
import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr
} from './DrinkCardItem.styled';

const DrinkCartItem = () => {
  return (
    <DrinkCardItemContainer>
      <DrinkCardItemImage src={ShotImage} alt="Coctail's name" />
    <DrinkCardItemContainerDiscr>
      <DrinkCardItemName>A Furlong Too Late</DrinkCardItemName>
      <DrinkCardItemSeeMore
        href="E:\Julia\IT\BOOTCAMP\Node\DrinkMaster\src\pages\MyDrinks\MyDrinks.jsx"
      >
        See more
        </DrinkCardItemSeeMore>
        </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
  );
};

export default DrinkCartItem;