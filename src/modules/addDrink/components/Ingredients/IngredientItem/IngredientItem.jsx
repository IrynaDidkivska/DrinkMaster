import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  IngredientSelect,
  InputStyled,
  ItemWrapper,
  RemoveBtnStyled,
} from './IngredientItem.styled';

import { selectNormalizedIngredients } from '../../../../../redux/Filters/selectors';
import { useEffect } from 'react';
import { getIngredientsThunk } from '../../../../../redux/Filters/operations';


const IngredientItem = ({ removeIngredient, ingredientData }) => {
  const { id, name, volume } = ingredientData;
  const dispatch = useDispatch();
  const ingredients = useSelector(selectNormalizedIngredients);

  useEffect(() => {
    dispatch(getIngredientsThunk({ page: 0, limit: 0 }));
  }, []);

  return (
    <ItemWrapper>
      <IngredientSelect
        classNamePrefix="ingredientSelect"
        options={ingredients}
      />
      <InputStyled type="text" />
      <RemoveBtnStyled
        type="button"
        onClick={() => {
          console.log(ingredientData);
          removeIngredient(id);
        }}
      >
        <SpriteSVG name="remove-ingredient" />
      </RemoveBtnStyled>
    </ItemWrapper>
  );
};

export default IngredientItem;
