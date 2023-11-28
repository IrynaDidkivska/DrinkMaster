import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  AddForm,
  Ingredients,
  PopularDrinks,
  RecipePreparation,
} from '../../modules/addDrink';
import {
  ingredientsCheckReducer,
  requestNormalize,
  validateDrink,
} from '@/shared/helpers/addDrink';
import { addNewDrinkThunk } from '@/redux/Drinks/operations';
import Title from '@/shared/components/Title/Title';
import LigthBtn from '@/shared/components/Buttons/LigthBtn';
import Subtitle from '@/shared/components/Title/Subtitle';
import FollowUs from '@/shared/components/FollowUs/FollowUs';
import { AddDrinkWrapper, MediaWrapper } from './AddDrink.styled';

const AddDrink = () => {
  const dispatch = useDispatch();
  const [drinkPhoto, setDrinkPhoto] = useState(null);
  const [drink, setDrink] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [glass, setGlass] = useState(null);
  const [alcoholic, setAlcoholic] = useState('Non alcoholic');
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();

  const handleCreateDrink = () => {
    const correctIngredients = ingredientsCheckReducer(ingredients);
    if (ingredients.length !== correctIngredients.length) {
      return toast.error(
        'Please fill in all ingredient fields or delete blank ones.'
      );
    }
    const newDrink = {
      drinkPhoto,
      drink,
      description,
      category,
      glass,
      alcoholic,
      ingredients: correctIngredients,
      instructions,
    };
    if (validateDrink(newDrink)) {
      return toast.error('Please fill in all fields');
    }
    const request = requestNormalize(newDrink);
    dispatch(addNewDrinkThunk(request));
  };
  return (
    <>
      <Title Title="Add drink" />
      <AddDrinkWrapper>
        <div>
          <AddForm
            setValues={{
              setDrinkPhoto,
              setDrink,
              setDescription,
              setGlass,
              setAlcoholic,
              setCategory,
            }}
          />
          <Ingredients setIngredientsGeneral={setIngredients} />
          <RecipePreparation setInstructions={setInstructions} />
          <LigthBtn onClick={handleCreateDrink} type="button">
            Add
          </LigthBtn>
        </div>
        <div>
          <MediaWrapper>
            <Subtitle Subtitle="Follow us" />
            <FollowUs isfooter={false} />
          </MediaWrapper>
          <PopularDrinks />
        </div>
      </AddDrinkWrapper>
    </>
  );
};

export default AddDrink;
