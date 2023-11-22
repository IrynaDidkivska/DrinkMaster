import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { selectBySearch } from '../../../redux/Drinks/selectors';
import DrinkCardItem from '../DrinkCardItem/DrinkCardItem';
import { List } from '../DrinkList/DrinkList.styled';
import { SpriteSVG } from '../../icons/SpriteSVG';
import { StyledNext, StyledPrev } from './Pagination.styled';

const Pagination = () => {
  const allDrinks = useSelector(selectBySearch);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(allDrinks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allDrinks.length / itemsPerPage));
  }, [allDrinks, itemOffset]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % allDrinks.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <List>
        {currentItems.map(drink => (
          <DrinkCardItem key={drink._id} drink={drink} />
        ))}
      </List>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <StyledNext>
            <SpriteSVG name="rigth-padding" />
          </StyledNext>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
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
