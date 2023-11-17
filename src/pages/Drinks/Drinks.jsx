import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import { DrinkList } from "../../shared/components/DrinkList/DrinkList";
import { Title } from "../../shared/styles/Titel";
const Drinks = () => {
  return <div>
    <Title>Drinks</Title>
    <SearchForm/>
    <DrinkList/>
  </div>;
};

export default Drinks;
