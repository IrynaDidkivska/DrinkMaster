import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import Title from "../../shared/components/Title/Title";
import Pagination from "../../shared/components/Pagination/Pagination";

const Drinks = () => {


  return (
    <>
      <Title Title="Drinks" />
      <SearchForm />

      <Pagination />
    </>
  );
};

export default Drinks;
