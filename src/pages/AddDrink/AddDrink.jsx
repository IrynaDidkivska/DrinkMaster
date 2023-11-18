import {
  AddForm,
  Ingredients,
  RecipePreparation,
} from '../../modules/addDrink';
import { Container } from '../../shared/styles/Container';

const AddDrink = () => {
  return (
    <Container>
      <AddForm />
      <Ingredients />
      <RecipePreparation />
    </Container>
  );
};

export default AddDrink;
