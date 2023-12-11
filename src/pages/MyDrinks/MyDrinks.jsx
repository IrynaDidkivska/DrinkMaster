import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '@/shared/components/Title/Title';
import { selectOwn, selectTotalPages } from '@/redux/Drinks/selectors';
import { getOwnThunk } from '@/redux/Drinks/operations';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';
import useResponsive from '@/hooks/useResponsive';
import Pagination from '@/shared/components/Pagination/Pagination';

const MyDrinks = () => {
  const { isSmallScreen } = useResponsive();
  const dispatch = useDispatch();
  const own = useSelector(selectOwn);
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  const itemsPerPage = useMemo(() => {
    return isSmallScreen ? 10 : 9;
  }, [isSmallScreen]);

  useEffect(() => {
    dispatch(getOwnThunk({ limit: itemsPerPage, page }));
  }, [dispatch, itemsPerPage, page]);

  const handlePageClick = event => {
    setPage(event.selected + 1);
    window.scrollTo(0, 100);
  };

  return (
    <>
      <Title Title="My drinks" />
      {own.length > 0 ? <CardList data={own} /> : <NotAdd />}
      <Pagination
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        defaultPage={page}
      />
    </>
  );
};

export default MyDrinks;
