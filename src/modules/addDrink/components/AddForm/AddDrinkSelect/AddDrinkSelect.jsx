/* eslint-disable react/prop-types */
import {
  LabelStyled,
  SelectStyled,
  SelectWrapper,
} from './AddDrinkSelect.styled';

const AddDrinkSelect = ({ label, options = [], changeF }) => {
  const placeholder =
    label === 'Category' ? 'Cocktail' : label === 'Glass' ? 'Glass' : '';
  return (
    <>
      <SelectWrapper>
        <LabelStyled htmlFor={label}>{label}</LabelStyled>
        <SelectStyled
          id={label}
          classNamePrefix="addDrink"
          placeholder={placeholder}
          options={options}
          onChange={e => changeF(e.label)}
        />
      </SelectWrapper>
    </>
  );
};

export default AddDrinkSelect;
