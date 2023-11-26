import IngredientList from '../../modules/myDrinks/components/DrinkIngredientsList/DrinkIngredientsList';
import MyJustDrinks from '../../modules/myDrinks/components/MyJustDrinks/MyJustDrinks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getByIDThunk } from '../../redux/Drinks/operations';
import { useDispatch } from 'react-redux';
import RecipeDrinks from '../../modules/myDrinks/components/RecipeDrinks/RecipeDrinks';

const DrinkWithID = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  useEffect(() => {
    dispatch(getByIDThunk(drinkId));
  }, [dispatch, drinkId]);

  return (
    <>
      <MyJustDrinks />
      <IngredientList />
      <RecipeDrinks />
    </>
  );
};

export default DrinkWithID;
