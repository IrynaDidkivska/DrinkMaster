import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBySearch,
  selectFilteredDrinks,
  selectTotalPages,
} from '../../../redux/Drinks/selectors';
import DrinkCardItem from '../DrinkCardItem/DrinkCardItem';
import { List } from '../DrinkList/DrinkList.styled';
import { SpriteSVG } from '../../icons/SpriteSVG';
import { StyledNext, StyledPrev } from './Pagination.styled';
import { paginationThunk } from '../../../redux/Drinks/operations';
import { setSearch } from '../../../redux/Drinks/drinksSlice';
import { useMediaQuery } from 'react-responsive';

const Pagination = () => {
  const itemsPerPage = 10;

  const allDrinks = useSelector(selectBySearch);
  const totalPages = useSelector(selectTotalPages);
  const filteredDrinks = useSelector(selectFilteredDrinks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allDrinks.length) {
      dispatch(paginationThunk({}));
    }
  }, [allDrinks, dispatch]);

  const handlePageClick = event => {
    const newPage = event.selected + 1;
    dispatch(paginationThunk({ limit: itemsPerPage, page: newPage }));
  };

  const handleBigArrClick = event => {
    const newPage = event.selected || 0;
    const pageCurrentItems = filteredDrinks.slice(
      newPage * itemsPerPage,
      (newPage + 1) * itemsPerPage
    );
    dispatch(setSearch(pageCurrentItems));
  };

  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <List>
        {allDrinks.map(drink => (
          <DrinkCardItem key={drink._id} data={drink} />
        ))}
      </List>

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
            ? Math.ceil(filteredDrinks.length / itemsPerPage)
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
