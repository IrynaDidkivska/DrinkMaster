import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResponsive from '@/hooks/useResponsive';
import SearchForm from '@/modules/drinks/components/SearchForm/SearchForm';
import { paginationThunk } from '@/redux/Drinks/operations';
import { selectTotalPages } from '@/redux/Drinks/selectors';
import DrinkList from '@/shared/components/DrinkList/DrinkList';
import Pagination from '@/shared/components/Pagination/Pagination';
import Title from '@/shared/components/Title/Title';
import { useSearchParams } from 'react-router-dom';

const Drinks = () => {
  const { isSmallScreen } = useResponsive();
  const [paginationParams, setPaginationParams] = useSearchParams();
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const notNull = () => {
    setPaginationParams({ page: 1 });
    return 1;
  };
  const page =
    isNaN(Number(paginationParams.get('page'))) ||
    Number(paginationParams.get('page')) === 0 ||
    !Number.isInteger(Number(paginationParams.get('page'))) ||
    (Number(paginationParams.get('page')) > totalPages && totalPages) ||
    Number(paginationParams.get('page')) < 0
      ? notNull()
      : Number(paginationParams.get('page'));
  const query = paginationParams.get('query');
  const category = paginationParams.get('category');
  const ingredient = paginationParams.get('ingredient');

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
    setPaginationParams({ page: event.selected + 1 });
    window.scrollTo(0, 100);
  };

  return (
    <>
      <Title Title="Drinks" />
      <SearchForm setSearchParams={setPaginationParams} />
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
