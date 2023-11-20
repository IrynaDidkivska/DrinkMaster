import {
  AddForm,
  Ingredients,
  RecipePreparation,
} from '../../modules/addDrink';
import LigthBtn from '../../shared/components/Buttons/LigthBtn';

const AddDrink = () => {
  return (
    <>
      <AddForm />
      <Ingredients />
      <RecipePreparation />
      <LigthBtn onClick={() => {}}>Add</LigthBtn>
    </>
  );
};

export default AddDrink;
