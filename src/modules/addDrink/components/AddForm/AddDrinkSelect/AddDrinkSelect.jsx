/* eslint-disable react/prop-types */
import {
  LabelStyled,
  SelectStyled,
  SelectWrapper,
} from './AddDrinkSelect.styled';
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

const AddDrinkSelect = ({ label }) => {
  return (
    <>
      <SelectWrapper>
        <LabelStyled htmlFor={label}>{label}</LabelStyled>
        <SelectStyled
          id={label}
          classNamePrefix="addDrink"
          options={selectCategoryOptions}
          defaultValue={selectCategoryOptions[0]}
        />
      </SelectWrapper>
    </>
  );
};

export default AddDrinkSelect;
