import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { getFavoriteThunk } from '@/redux/Drinks/operations';
import { selectFavorites } from '@/redux/Drinks/selectors';
import Title from '@/shared/components/Title/Title';

import Pagination from '@/shared/components/Pagination/Pagination';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  // Якщо Льоша не зробить пагінацію

  const [page, setPage] = useState(1); //для керування сторінкою
  const [firstIndex, setFirstIndex] = useState(1); // для початкового значення, індекс початку сторінки для відображення
  const per_page = 3;
  const visibleData = favorites.slice(
    page === 1 ? 0 : firstIndex,
    per_page * page
  );
  console.log(visibleData);

  const handlePageClick = e => {
    setFirstIndex(page * per_page);
    setPage(e.selected - 1);
  };

  const totalPages = useMemo(
    () => Math.ceil(favorites.length / 3),
    [favorites]
  );
  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, [dispatch]);
  return (
    <>
      <Title Title="Favorites" />
      {visibleData.length > 0 ? <CardList data={visibleData} /> : <NotAdd />}
      <Pagination
        defaultPage={page}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
      />
    </>
  );
};

export default Favorites;
