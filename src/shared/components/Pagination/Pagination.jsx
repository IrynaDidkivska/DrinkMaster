import ReactPaginate from 'react-paginate';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { StyledNext, StyledPrev } from './Pagination.styled';
import useResponsive from '@/hooks/useResponsive';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from '@/redux/Drinks/selectors';
import { checkPage } from '@/redux/helpers/paginationCheckPage';

const Pagination = ({ paginationThunk }) => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const { isSmallScreen } = useResponsive();
  const { isMediumScreen } = useResponsive();
  const [paginationParams, setPaginationParams] = useSearchParams();
  const allParams = Object.fromEntries(paginationParams);
  const defaultPage = checkPage(
    paginationParams.get('page'),
    totalPages,
    setPaginationParams
  );
  const itemsPerPage = useMemo(() => {
    return isSmallScreen ? 10 : 9;
  }, [isSmallScreen]);

  useEffect(() => {
    if (!paginationParams.get('page')) {
      setPaginationParams({ page: 1 });
    }
  }, []);

  useEffect(() => {
    dispatch(
      paginationThunk({
        ...allParams,
        limit: itemsPerPage,
        page: defaultPage,
      })
    );
  }, [dispatch, itemsPerPage, defaultPage, allParams, paginationThunk]);

  const handlePageClick = event => {
    setPaginationParams({
      ...allParams,
      page: event.selected + 1,
    });
    window.scrollTo(0, 100);
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
        onPageChange={handlePageClick}
        pageRangeDisplayed={(isMediumScreen && 7) || 3}
        marginPagesDisplayed={1}
        pageCount={totalPages || 0}
        forcePage={defaultPage - 1}
        previousLabel={
          <StyledPrev>
            <SpriteSVG name="left-padding" />
          </StyledPrev>
        }
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
