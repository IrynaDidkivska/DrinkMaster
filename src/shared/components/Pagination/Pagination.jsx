import { useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import { selectPage, selectSearchQuery } from '@/redux/Filters/selectors';
import { setPage } from '@/redux/Filters/filtersSlice';
import {
  selectFilteredDrinks,
  selectTotalPages,
} from '@/redux/Drinks/selectors';
import { paginationThunk } from '@/redux/Drinks/operations';
import { setSearch } from '@/redux/Drinks/drinksSlice';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { StyledNext, StyledPrev } from './Pagination.styled';
import useResponsive from '@/hooks/useResponsive';

const Pagination = () => {
  const { isSmallScreen } = useResponsive();

  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const itemsPerPage = useMemo(() => {
    return isSmallScreen ? 10 : 9;
  }, [isSmallScreen]);

  const totalPages = useSelector(selectTotalPages);
  const filteredDrinks = useSelector(selectFilteredDrinks);
  const page = useSelector(selectPage);
  const { query, category, ingredient } = useSelector(selectSearchQuery);

  const dispatch = useDispatch();

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

  const handleBigArrClick = event => {
    const newPage = event.selected || 0;
    const pageCurrentItems = filteredDrinks.slice(
      newPage * itemsPerPage,
      (newPage + 1) * itemsPerPage
    );
    dispatch(setSearch(pageCurrentItems));
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <StyledNext>
            <SpriteSVG name="rigth-padding" />
          </StyledNext>
        }
        onPageChange={
          filteredDrinks.length ? handleBigArrClick : handlePageClick
        }
        pageRangeDisplayed={(isTabletScreen && 7) || 3}
        marginPagesDisplayed={1}
        pageCount={
          filteredDrinks.length > 0
            ? Math.ceil(Math.ceil(filteredDrinks.length / itemsPerPage))
            : totalPages > 0
            ? totalPages
            : 1
        }
        previousLabel={
          <StyledPrev>
            <SpriteSVG name="left-padding" />
          </StyledPrev>
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Pagination;
