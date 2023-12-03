import { useSelector } from 'react-redux';

import { selectBySearch } from '@/redux/Drinks/selectors';
import DrinkCardItem from '../DrinkCardItem/DrinkCardItem';

import { List } from './DrinkList.styled';

const DrinkList = () => {
  const allDrinks = useSelector(selectBySearch);
  return (
    <List>
      {allDrinks.map(drink => (
        <DrinkCardItem key={drink._id} data={drink} />
      ))}
    </List>
  );
};

export default DrinkList;
