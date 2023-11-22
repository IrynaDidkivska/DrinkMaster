import SearchForm from '../../modules/drinks/components/SearchForm/SearchForm';
import Title from '../../shared/components/Title/Title';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllSearchThunk } from '../../redux/Drinks/operations';
import Pagination from '../../shared/components/Pagination/Pagination';

const Drinks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchThunk());
  }, [dispatch]);

  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />

      <Pagination />
    </div>
  );
};

export default Drinks;
