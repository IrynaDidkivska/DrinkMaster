import ReactPaginate from 'react-paginate';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { StyledNext, StyledPrev } from './Pagination.styled';
import useResponsive from '@/hooks/useResponsive';

const Pagination = ({ handlePageClick, totalPages, defaultPage }) => {
  const { isMediumScreen } = useResponsive();

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
