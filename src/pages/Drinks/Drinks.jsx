import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import { DrinkList } from "../../shared/components/DrinkList/DrinkList";
import Title from "../../shared/components/Title/Title";
import Ingredient from '../../modules/myDrinks/components/Ingredients/IngredientsItem/Ingredients'
import MyJustDrinks from '../../modules/myDrinks/components/MyMoonmintDrinks/MyJustDrinks/MyJustDrinks'
import RecipeDrinks from '../../modules/myDrinks/components/MyMoonmintDrinks/RecipeDrinks/RecipeDrinks'
import PopularDrinks from "../../modules/addDrink/components/PopularDrinks/PopularDrinks";

const Drinks = () => {
  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />
      <DrinkList />
      <MyJustDrinks />
			<Ingredient />
      <RecipeDrinks />
      <PopularDrinks/>
    </div>
  );
};

export default Drinks
