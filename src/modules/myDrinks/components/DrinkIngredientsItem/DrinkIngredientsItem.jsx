import { useSelector } from 'react-redux';
import { selectDetails } from '@/redux/Drinks/selectors';
import {
  IngredientsImage,
  IngredientsName,
  IngredientsNumber,
  IngredientsContainerDiscr,
  IngredientsItem,
} from './DrinkIngredientsItem.styles';

const DrinkIngredientsItem = () => {
  const { ingredients } = useSelector(selectDetails);

  if (!ingredients) {
    return null;
  }

  return (
    <>
      {ingredients.map((ingredient, index) => (
        <IngredientsItem
          key={ingredient._id ? ingredient._id : `ingredient-${index}`}
        >
          <IngredientsImage
            src={ingredient.ingredientId['thumb-medium']}
            alt={ingredient.title}
            loading="lazy"
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
