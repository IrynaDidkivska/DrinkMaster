import { useSelector } from 'react-redux';
import { getFavoriteThunk } from '@/redux/Drinks/operations';
import { selectFavorites } from '@/redux/Drinks/selectors';
import Title from '@/shared/components/Title/Title';
import Pagination from '@/shared/components/Pagination/Pagination';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Title Title="Favorites" />
      {favorites.length > 0 ? <CardList data={favorites} /> : <NotAdd />}
      <Pagination paginationThunk={getFavoriteThunk} />
    </>
  );
};

export default Favorites;
