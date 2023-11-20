import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import Title from "../../shared/components/Title/Title";
import Ingredient from "../../modules/myDrinks/components/Ingredients/IngredientsItem/Ingredients";
import MyJustDrinks from "../../modules/myDrinks/components/MyMoonmintDrinks/MyJustDrinks/MyJustDrinks";
import RecipeDrinks from "../../modules/myDrinks/components/MyMoonmintDrinks/RecipeDrinks/RecipeDrinks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopulars } from "../../redux/Drinks/selectors";
import DrinkCardItem from "../../shared/components/DrinkCardItem/DrinkCardItem";
import { getPopularThunk } from "../../redux/Drinks/operations";

const Drinks = () => {
  const dispatch = useDispatch();
  const allPopular = useSelector(selectPopulars);

  useEffect(() => {
    dispatch(getPopularThunk());
  }, [dispatch]);

  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />
      {/* <DrinkList /> */}
      {allPopular.map((drink) => (
        <DrinkCardItem key={drink._id} {...drink} />
      ))}
      <MyJustDrinks />
      <Ingredient />
      <RecipeDrinks />
    </div>
  );
};

export default Drinks;
