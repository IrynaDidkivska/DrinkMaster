import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResponsive from '@/hooks/useResponsive';
import SearchForm from '@/modules/drinks/components/SearchForm/SearchForm';
import { paginationThunk } from '@/redux/Drinks/operations';
import { selectTotalPages } from '@/redux/Drinks/selectors';
import DrinkList from '@/shared/components/DrinkList/DrinkList';
import Pagination from '@/shared/components/Pagination/Pagination';
import Title from '@/shared/components/Title/Title';

const Drinks = () => {
  const { isSmallScreen } = useResponsive();
  const [searchParams, setSearchParams] = useState({
    query: '',
    category: '',
    ingredient: '',
    page: 1,
  });
  const { query, category, ingredient, page } = searchParams;
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  //  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const itemsPerPage = useMemo(() => {
    return isSmallScreen ? 10 : 9;
  }, [isSmallScreen]);

  useEffect(() => {
    dispatch(
      paginationThunk({
        query,
        category,
        ingredient,
        limit: itemsPerPage,
        page,
      })
    );
  }, [category, dispatch, ingredient, itemsPerPage, page, query]);

  const handlePageClick = event => {
    setSearchParams(prev => ({ ...prev, page: event.selected + 1 }));
    window.scrollTo(0, 100);
  };

  return (
    <>
      <Title Title="Drinks" />
      <SearchForm setSearchParams={setSearchParams} />
      <DrinkList />
      <Pagination
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        defaultPage={page}
      />
    </>
  );
};

export default Drinks;
