import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '@/shared/components/Title/Title';
import { selectOwn } from '@/redux/Drinks/selectors';
import { getOwnThunk } from '@/redux/Drinks/operations';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import CardList from '@/modules/cardList/components/CardList';

const MyDrinks = () => {
  const dispatch = useDispatch();
  const own = useSelector(selectOwn);

  useEffect(() => {
    dispatch(getOwnThunk());
  }, [dispatch]);

  return (
    <>
      <Title Title="My drinks" />
      {own.length > 0 ? <CardList data={own} /> : <NotAdd />}
    </>
  );
};

export default MyDrinks;
