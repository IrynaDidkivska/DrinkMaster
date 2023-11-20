import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import { DrinkList } from "../../shared/components/DrinkList/DrinkList";
import Title from "../../shared/components/Title/Title";
import Ingredient from '../../modules/myDrinks/components/Ingredients/IngredientsItem/Ingredients'
import MyJustDrinks from '../../modules/myDrinks/components/MyMoonmintDrinks/MyJustDrinks/MyJustDrinks'
import RecipeDrinks from '../../modules/myDrinks/components/MyMoonmintDrinks/RecipeDrinks/RecipeDrinks'

const Drinks = () => {
  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />
      <DrinkList />
      <MyJustDrinks />
			<Ingredient />
			<RecipeDrinks />
    </div>
  );
};

export default Drinks
