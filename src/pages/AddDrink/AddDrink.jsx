
import { AddForm } from '../../modules/addDrink';
import { Container } from '../../shared/styles/Container';
import Ingredients from "../../modules/addDrink/components/Ingredients/IngredientsItem/Ingredients";

const AddDrink = () => {
  return (
    <Container>
      <AddForm />
    <Ingredients/>
    </Container>
  );

};

export default AddDrink;
