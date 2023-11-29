import { useSelector } from 'react-redux';
import { selectNormalizedIngredients } from '@/redux/Filters/selectors';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import {
  IngredientSelect,
  InputStyled,
  ItemWrapper,
  RemoveBtnStyled,
} from './IngredientItem.styled';

const IngredientItem = ({
  removeIngredient,
  ingredientData,
  changeIngredient,
}) => {
  const { id, measure } = ingredientData;
  const ingredients = useSelector(selectNormalizedIngredients);

  return (
    <ItemWrapper>
      <IngredientSelect
        classNamePrefix="ingredientSelect"
        options={ingredients}
        placeholder="Select ingredient"
        onChange={e => {
          changeIngredient({ id, title: e.label, ingredientId: e.value });
        }}
      />
      <InputStyled
        type="text"
        value={measure}
        onChange={e => {
          const measure = e.target.value.trim();
          changeIngredient({ id, measure });
        }}
      />
      <RemoveBtnStyled
        type="button"
        onClick={() => {
          removeIngredient(id);
        }}
      >
        <SpriteSVG name="remove-ingredient" />
      </RemoveBtnStyled>
    </ItemWrapper>
  );
};

export default IngredientItem;
