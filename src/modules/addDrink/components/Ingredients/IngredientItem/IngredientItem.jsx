import { useSelector } from 'react-redux';
import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  IngredientSelect,
  InputStyled,
  ItemWrapper,
  RemoveBtnStyled,
} from './IngredientItem.styled';

import { selectNormalizedIngredients } from '../../../../../redux/Filters/selectors';

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
        onChange={e => {
          changeIngredient({ id, title: e.label, ingredientId: e.value });
        }}
      />
      <InputStyled
        type="text"
        value={measure + ' cl'}
        onChange={e => {
          const measure = e.target.value.trim();
          changeIngredient({ id, measure: measure.slice(0, -3) });
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
