import DrinkListID from "../../shared/components/DrinkList/DrinkListID";
import Title from "../../shared/components/Title/Title";
import { getFavoriteThunk } from "../../redux/Drinks/operations";
import { selectFavorite } from "../../redux/Drinks/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DrinkCardItem from "../../shared/components/DrinkCardItem/DrinkCardItem";

const DrinksListFav = () => {
  const dispatch = useDispatch();
  const allFavorite = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, [dispatch]);

  return (
    <>
      <Title Title="Favorites (will be here if user will have favorite, need to add tern Operator|message if favorite is empty)" />

      {allFavorite.map((drink) => (
        <DrinkCardItem key={drink._id} {...drink} />
      ))}
      <Title Title="MOKE DATA: " />
      <DrinkListID />
    </>
  );
};

export default DrinksListFav;
