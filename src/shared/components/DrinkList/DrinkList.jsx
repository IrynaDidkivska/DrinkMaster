import {DrinkItemsList} from "./DrinkList.styled";
import DrinkCardItemFav from "../DrinkCardItemFav/DrinkCardItemFav";

const DrinkList = () => {
  return (
    <DrinkItemsList>
      <DrinkCardItemFav />
      <DrinkCardItemFav />
      <DrinkCardItemFav />
      <DrinkCardItemFav />
      <DrinkCardItemFav />
          <DrinkCardItemFav />
          <DrinkCardItemFav />
          <DrinkCardItemFav />
    </DrinkItemsList>
  );
};

export { DrinkList };