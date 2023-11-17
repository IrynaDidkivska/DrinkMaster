import { DrinkItemsList } from './DrinkList.styled';
import DrinkCardItem from '../DrinkCardItem/DrinkCardItem'

const DrinkList = () => {
  const drinkItems = Array(8).fill(null).map((_, index) => (
    <DrinkCardItem key={index} />
  ));

  return <DrinkItemsList>{drinkItems}</DrinkItemsList>;
};

export { DrinkList };