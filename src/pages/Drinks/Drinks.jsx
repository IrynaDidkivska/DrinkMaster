import { useLocation } from "react-router-dom";
import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import { DrinkList } from "../../shared/components/DrinkList/DrinkList";
import Title from "../../shared/components/Title/Title";
import { confirmNamePage } from "../../shared/helpers/confirmNamePage";

const Drinks = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <div>
      <Title name={namePage}>Drinks</Title>
      <SearchForm />
      <DrinkList />
    </div>
  );
};

export default Drinks;
