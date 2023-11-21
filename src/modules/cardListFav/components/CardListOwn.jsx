import { useDispatch, useSelector } from "react-redux";
import { selectOwn } from "../../../redux/Drinks/selectors";
import { useEffect } from "react";
import { getOwnThunk } from "../../../redux/Drinks/operations";
import { FavNotAdd } from "../../../pages/Favorites/FavNotAdd/FavNotAdd";
import FavoriteCard from "../../../shared/components/FavoriteCard/FavoriteCard";
import { List } from "./CardsList.styled";

const CardListOwn = () => {
  const dispatch = useDispatch();

  const own = useSelector(selectOwn);

  useEffect(() => {
    dispatch(getOwnThunk());
  }, [dispatch]);

  return (
    <List>
      {own.length === 0 ? (
        <FavNotAdd />
      ) : (
        own.map((ownitem) => (
          <FavoriteCard key={ownitem._id} favorite={ownitem} />
        ))
      )}
    </List>
  );
};

export default CardListOwn;
