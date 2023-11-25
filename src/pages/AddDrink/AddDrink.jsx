import { useState } from 'react';
import {
  AddForm,
  Ingredients,
  PopularDrinks,
  RecipePreparation,
} from '../../modules/addDrink';
import LigthBtn from '../../shared/components/Buttons/LigthBtn';
import FollowUs from '../../shared/components/FollowUs/FollowUs';
import Subtitle from '../../shared/components/Title/Subtitle';
import Title from '../../shared/components/Title/Title';
import { AddDrinkWrapper, MediaWrapper } from './AddDrink.styled';
import { useDispatch } from 'react-redux';
import { addNewDrinkThunk } from '../../redux/Drinks/operations';

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

  // console.log('drinkPhoto===>>>', drinkPhoto);

  const ingredientsCheckReducer = arr => {
    return arr.reduce((acc, ingredient) => {
      if (!ingredient.title || !ingredient.measure) {
        return acc;
      }
      const { title, ingredientId, measure } = ingredient;
      return [...acc, { title, ingredientId, measure: measure + ' cl' }];
    }, []);
  };

  const validateDrink = obj => {
    for (let key in obj) {
      if (!obj[key]) {
        return true;
      }
    }
    return false;
  };

  const handleCreateDrink = () => {
    const correctIngredients = ingredientsCheckReducer(ingredients);
    if (ingredients.length !== correctIngredients.length) {
      return console.log(
        'Заповніть будь ласка усі поля інгредієнтів або видаліть порожні.',
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
      return console.log('Заповніть будь ласка усі поля');
    }
    const request = new FormData();
    request.append('drinkPhoto', drinkPhoto);
    request.append('drink', drink);
    request.append('description', description);
    request.append('category', category);
    request.append('glass', glass);
    request.append('alcoholic', alcoholic);
    correctIngredients.forEach((ingredient, index) => {
      request.append(`ingredients[${index}][title]`, ingredient.title);
      request.append(
        `ingredients[${index}][ingredientId]`,
        ingredient.ingredientId,
      );
      request.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    request.append('instructions', instructions);

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
          <LigthBtn onClick={handleCreateDrink}>Add</LigthBtn>
        </div>
        <div>
          <MediaWrapper>
            <Subtitle Subtitle="Follow us" />
            <FollowUs />
          </MediaWrapper>
          <PopularDrinks />
        </div>
      </AddDrinkWrapper>
    </>
  );
};

export default AddDrink;
