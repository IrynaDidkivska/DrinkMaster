import SearchForm from '@/modules/drinks/components/SearchForm/SearchForm';
import Pagination from '@/shared/components/Pagination/Pagination';
import Title from '@/shared/components/Title/Title';

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
