import LimeIngrid from '../IngredientsItem/picture/LimeIngrid.png';
import {
  IngredientsContainer,
  IngredientsImage,
  IngredientsName,
  IngredientsNumber,
  IngredientsContainerDiscr
} from './Ingredients.styles';

const Ingredient = () => {
  return (
    <IngredientsContainer>
      <IngredientsImage src={LimeIngrid} alt="Coctail's name" />
    <IngredientsContainerDiscr>
      <IngredientsName>Lime</IngredientsName>
      <IngredientsNumber>
        1 cl
        </IngredientsNumber>
        </IngredientsContainerDiscr>
    </IngredientsContainer>
  );
};

export default Ingredient;