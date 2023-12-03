import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { getFavoriteThunk } from '@/redux/Drinks/operations';
import useResponsive from '@/hooks/useResponsive';
import { selectFavorites, selectTotalPages } from '@/redux/Drinks/selectors';
import Title from '@/shared/components/Title/Title';
import Pagination from '@/shared/components/Pagination/Pagination';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';

const Favorites = () => {
  const { isSmallScreen } = useResponsive();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  const itemsPerPage = useMemo(() => {
    return isSmallScreen ? 10 : 9;
  }, [isSmallScreen]);

  useEffect(() => {
    dispatch(getFavoriteThunk({ limit: itemsPerPage, page }));
  }, [dispatch, itemsPerPage, page]);

  const handlePageClick = event => {
    setPage(event.selected + 1);
    window.scrollTo(0, 100);
  };

  return (
    <>
      <Title Title="Favorites" />
      {favorites.length > 0 ? <CardList data={favorites} /> : <NotAdd />}
      <Pagination
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        defaultPage={page}
      />
    </>
  );
};

export default Favorites;
