import { DrinkItemsList } from "./DrinkList.styled";
import DrinkCardItemFav from "../DrinkCardItemFav/DrinkCardItemFav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFavoriteThunk } from "../../../redux/Drinks/operations";
import { selectFavorites } from "../../../redux/Drinks/selectors";
import { FavNotAdd } from "../../../pages/Favorites/FavNotAdd/FavNotAdd";

const DrinkListID = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, [dispatch]);

  return (
    <DrinkItemsList>
      {favorites.length === 0 ? (
        <FavNotAdd />
      ) : (
        favorites.map((favorite) => (
          <DrinkCardItemFav key={favorite._id} favorite={favorite} />
        ))
      )}
    </DrinkItemsList>
  );
};

export default DrinkListID;
