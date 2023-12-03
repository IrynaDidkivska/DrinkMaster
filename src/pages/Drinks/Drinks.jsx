import useResponsive from '@/hooks/useResponsive';
import SearchForm from '@/modules/drinks/components/SearchForm/SearchForm';
import { paginationThunk } from '@/redux/Drinks/operations';
import { selectTotalPages } from '@/redux/Drinks/selectors';
import { setPage } from '@/redux/Filters/filtersSlice';
import { selectPage, selectSearchQuery } from '@/redux/Filters/selectors';
import DrinkList from '@/shared/components/DrinkList/DrinkList';
import Pagination from '@/shared/components/Pagination/Pagination';
import Title from '@/shared/components/Title/Title';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Drinks = () => {
  const { isSmallScreen } = useResponsive();
  const { query, category, ingredient } = useSelector(selectSearchQuery);
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
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
    dispatch(setPage(event.selected + 1));
    window.scrollTo(0, 100);
  };

  return (
    <>
      <Title Title="Drinks" />
      <SearchForm />
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
