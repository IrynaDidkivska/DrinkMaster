import SearchForm from '@/modules/drinks/components/SearchForm/SearchForm';
import { paginationThunk } from '@/redux/Drinks/operations';
import DrinkList from '@/shared/components/DrinkList/DrinkList';
import Pagination from '@/shared/components/Pagination/Pagination';
import Title from '@/shared/components/Title/Title';

const Drinks = () => {
  return (
    <>
      <Title Title="Drinks" />
      <SearchForm />
      <DrinkList />
      <Pagination paginationThunk={paginationThunk} />
    </>
  );
};

export default Drinks;
