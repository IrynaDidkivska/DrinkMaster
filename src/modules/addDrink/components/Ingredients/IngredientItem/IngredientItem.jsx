import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  IngredientSelect,
  InputStyled,
  ItemWrapper,
  RemoveBtnStyled,
} from './IngredientItem.styled';
import { selectIngredient } from '../../../../../redux/Filters/selectors';
import { useEffect } from 'react';
import { getIngredientsThunk } from '../../../../../redux/Filters/operations';
import { optionsNormalize } from '../../../helpers/optionsNormalize';

const IngredientItem = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredient);

  useEffect(() => {
    dispatch(getIngredientsThunk({ page: 0, limit: 0 }));
  }, []);

  return (
    <ItemWrapper>
      <IngredientSelect
        classNamePrefix="ingredientSelect"
        options={optionsNormalize(ingredients, 'title')}
      />
      <InputStyled type="text" />
      <RemoveBtnStyled type="button">
        <SpriteSVG name="remove-ingredient" />
      </RemoveBtnStyled>
    </ItemWrapper>
  );
};

export default IngredientItem;
