import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import { DrinkList } from "../../shared/components/DrinkList/DrinkList";
import Title from "../../shared/components/Title/Title";

const Drinks = () => {
  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />
      <DrinkList />
    </div>
  );
};

export default Drinks;
