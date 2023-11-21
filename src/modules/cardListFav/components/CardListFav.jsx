import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/Drinks/selectors";
import { useEffect } from "react";
import { getFavoriteThunk } from "../../../redux/Drinks/operations";
import { FavNotAdd } from "../../../pages/Favorites/FavNotAdd/FavNotAdd";
import FavoriteCard from "../../../shared/components/FavoriteCard/FavoriteCard";
import { List } from "./CardsList.styled";

const CardListFav = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, [dispatch]);

  return (
    <List>
      {favorites.length === 0 ? (
        <FavNotAdd />
      ) : (
        favorites.map((favorite) => (
          <FavoriteCard key={favorite._id} favorite={favorite} />
        ))
      )}
    </List>
  );
};

export default CardListFav;
