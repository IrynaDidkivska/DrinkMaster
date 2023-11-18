import LimeIngrid from '../IngredientsItem/picture/LimeIngrid.png';
import {
  IngredientsContainer,
  IngredientsImage,
  IngredientsName,
  IngredientsSeeMore,
  IngredientsContainerDiscr
} from './Ingredients.styles';

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <IngredientsImage src={LimeIngrid} alt="Coctail's name" />
    <IngredientsContainerDiscr>
      <IngredientsName>Lime</IngredientsName>
      <IngredientsSeeMore
        href="E:\Julia\IT\BOOTCAMP\Node\DrinkMaster\src\pages\MyDrinks\MyDrinks.jsx"
      >
        1 cl
        </IngredientsSeeMore>
        </IngredientsContainerDiscr>
    </IngredientsContainer>
  );
};

export default Ingredients;