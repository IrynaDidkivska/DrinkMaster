import { SpriteSVG } from '../../../../../shared/icons/SpriteSVG';
import {
  IngredientSelect,
  InputStyled,
  ItemWrapper,
  RemoveBtnStyled,
} from './IngredientItem.styled';

const selectCategoryOptions = [
  {
    label: 'Всі категорії',
    value: '',
  },
  {
    label: 'Мотоцикл',
    value: 'A',
  },
  {
    label: 'Легковий автомобіль',
    value: 'B',
  },
  {
    label: 'Вантажний автомобіль',
    value: 'C',
  },
  {
    label: 'Автобус',
    value: 'D',
  },
  {
    label: 'Причеп',
    value: 'EF',
  },
];

const IngredientItem = () => {
  return (
    <ItemWrapper>
      <IngredientSelect
        classNamePrefix="ingredientSelect"
        options={selectCategoryOptions}
        defaultValue={selectCategoryOptions[0]}
      />
      <InputStyled type="text" />
      <RemoveBtnStyled type="button">
        <SpriteSVG name="remove-ingredient" />
      </RemoveBtnStyled>
    </ItemWrapper>
  );
};

export default IngredientItem;
