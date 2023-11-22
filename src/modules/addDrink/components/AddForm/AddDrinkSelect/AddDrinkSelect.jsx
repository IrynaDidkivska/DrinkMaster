/* eslint-disable react/prop-types */
import {
  LabelStyled,
  SelectStyled,
  SelectWrapper,
} from './AddDrinkSelect.styled';

const AddDrinkSelect = ({ label, options = [] }) => {
  return (
    <>
      <SelectWrapper>
        <LabelStyled htmlFor={label}>{label}</LabelStyled>
        <SelectStyled id={label} classNamePrefix="addDrink" options={options} />
      </SelectWrapper>
    </>
  );
};

export default AddDrinkSelect;
