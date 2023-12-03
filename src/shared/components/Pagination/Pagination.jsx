import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { StyledNext, StyledPrev } from './Pagination.styled';

const Pagination = ({ handlePageClick, totalPages, defaultPage }) => {
  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });

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
        pageRangeDisplayed={(isTabletScreen && 7) || 3}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        forcePage={defaultPage - 1}
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
