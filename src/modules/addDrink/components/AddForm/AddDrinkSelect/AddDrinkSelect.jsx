/* eslint-disable react/prop-types */
import {
  LabelStyled,
  SelectStyled,
  SelectWrapper,
} from './AddDrinkSelect.styled';

const AddDrinkSelect = ({ label, options = [], changeF }) => {
  return (
    <>
      <SelectWrapper>
        <LabelStyled htmlFor={label}>{label}</LabelStyled>
        <SelectStyled
          id={label}
          classNamePrefix="addDrink"
          options={options}
          onChange={e => changeF(e.label)}
        />
      </SelectWrapper>
    </>
  );
};

export default AddDrinkSelect;
