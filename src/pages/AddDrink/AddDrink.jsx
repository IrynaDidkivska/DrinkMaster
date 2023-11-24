import {
  AddForm,
  Ingredients,
  PopularDrinks,
  RecipePreparation,
} from "../../modules/addDrink";
import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import FollowUs from "../../shared/components/FollowUs/FollowUs";
import Subtitle from "../../shared/components/Title/Subtitle";
import Title from "../../shared/components/Title/Title";
import { AddDrinkWrapper, MediaWrapper } from "./AddDrink.styled";

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
        <div>
          <MediaWrapper>
            <Subtitle Subtitle="Follow us" />
            <FollowUs isFooter={false} />
          </MediaWrapper>
          <PopularDrinks />
        </div>
      </AddDrinkWrapper>
    </>
  );
};

export default AddDrink;
