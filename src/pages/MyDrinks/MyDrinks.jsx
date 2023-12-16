import { useSelector } from 'react-redux';
import Title from '@/shared/components/Title/Title';
import { selectOwn } from '@/redux/Drinks/selectors';
import { getOwnThunk } from '@/redux/Drinks/operations';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';
import Pagination from '@/shared/components/Pagination/Pagination';

const MyDrinks = () => {
  const own = useSelector(selectOwn);

  return (
    <>
      <Title Title="My drinks" />
      {own.length > 0 ? <CardList data={own} /> : <NotAdd />}
      <Pagination paginationThunk={getOwnThunk} />
    </>
  );
};

export default MyDrinks;
