import {
  AddForm,
  Ingredients,
  PopularDrinks,
  RecipePreparation,
} from "../../modules/addDrink";
import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import Title from "../../shared/components/Title/Title";
import { AddDrinkWrapper } from "./AddDrink.styled";

const AddDrink = () => {
  return (
    <>
      <Title Title="Add drink" />
      <AddDrinkWrapper>
        <div>
          <AddForm />
          <Ingredients />
          <RecipePreparation />
          <LigthBtn onClick={() => {}}>Add</LigthBtn>
        </div>
        <PopularDrinks />
      </AddDrinkWrapper>
    </>
  );
};

export default AddDrink;
