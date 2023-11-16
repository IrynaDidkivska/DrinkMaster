import PropTypes from 'prop-types';
import { DrinkItemsList } from './DrinkList.styled';
import DrinkCardItemFav from '../DrinkCardItemFav/DrinkCardItemFav';
import DrinkCartItem from '../../components/DrinkCardItem/DrinkCardItem';

const DrinkList = ({ currentPage }) => {
  let drinkItems;

  switch (currentPage) {
    case 'MYDRINKS':
    case 'FAVORITES':
      // For MYDRINKS and FAVORITES pages, use DrinkCardItemFav
      drinkItems = Array(8).fill(null).map((_, index) => (
        <DrinkCardItemFav key={index} />
      ));
      break;
    case 'DRINKSPAGE':
      // For DRINKSPAGE, use DrinkCartItem
      drinkItems = Array(8).fill(null).map((_, index) => (
        <DrinkCartItem key={index} />
      ));
      break;
    default:
      // Use DrinkCardItemFav as a fallback
      drinkItems = Array(8).fill(null).map((_, index) => (
        <DrinkCardItemFav key={index} />
      ));
  }

  return <DrinkItemsList>{drinkItems}</DrinkItemsList>;
};

DrinkList.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export { DrinkList };