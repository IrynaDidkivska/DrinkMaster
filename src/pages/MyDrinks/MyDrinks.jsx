import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '@/shared/components/Title/Title';
import { selectOwn } from '@/redux/Drinks/selectors';
import { getOwnThunk } from '@/redux/Drinks/operations';
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
      <CardList data={own} />
    </>
  );
};

export default MyDrinks;
