import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFavoriteThunk } from '@/redux/Drinks/operations';
import { selectFavorites } from '@/redux/Drinks/selectors';
import Title from '@/shared/components/Title/Title';
import CardList from '@/modules/cardList/components/CardList';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, [dispatch]);
  return (
    <>
      <Title Title="Favorites" />
      <CardList data={favorites} />
    </>
  );
};

export default Favorites;
