import { DrinkItemsList } from './DrinkList.styled';
import DrinkCardItemFav from '../DrinkCardItemFav/DrinkCardItemFav';

const DrinkListID = () => {
  const drinkItems = Array(8).fill(null).map((_, index) => (
    <DrinkCardItemFav key={index} />
  ));

  return <DrinkItemsList>{drinkItems}</DrinkItemsList>;
};

export { DrinkListID };