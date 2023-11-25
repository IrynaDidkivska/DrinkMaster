import { useSelector } from "react-redux";
import {
  IngredientsImage,
  IngredientsName,
  IngredientsNumber,
  IngredientsContainerDiscr,
  IngredientsItem,
} from "./DrinkIngredientsItem.styles";
import { selectDetails } from "../../../../redux/Drinks/selectors";

const DrinkIngredientsItem = () => {
  const { ingredients } = useSelector(selectDetails);

  if (!ingredients) {
    return null;
  }

  return (
    <>
      {ingredients.map((ingredient) => (
        <IngredientsItem key={ingredient._id}>
          <IngredientsImage
            src={ingredient.ingredientId["thumb-medium"]}
            alt={ingredient.title}
          />
          <IngredientsContainerDiscr>
            <IngredientsName>{ingredient.title}</IngredientsName>
            <IngredientsNumber>{ingredient.measure}</IngredientsNumber>
          </IngredientsContainerDiscr>
        </IngredientsItem>
      ))}
    </>
  );
};

export default DrinkIngredientsItem;
