import { useSelector } from 'react-redux';

import { selectBySearch } from '@/redux/Drinks/selectors';
import DrinkCardItem from '../DrinkCardItem/DrinkCardItem';

import { List } from './DrinkList.styled';
import { toast } from 'react-toastify';

const DrinkList = () => {
  const allDrinks = useSelector(selectBySearch);
  if (allDrinks.length === 0) {
    toast.error('Cocktails not found!!!');
  }
  return (
    <List>
      {allDrinks.map(drink => (
        <DrinkCardItem key={drink._id} data={drink} />
      ))}
    </List>
  );
};

export default DrinkList;
