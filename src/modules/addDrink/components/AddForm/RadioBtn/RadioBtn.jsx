/* eslint-disable react/prop-types */
import { InputStyled, LabelStyled, RadioWrapper } from './RadioBtn.styled';

const RadioBtn = ({ id, name, label, isDisabled = false }) => {
  return (
    <RadioWrapper>
      <InputStyled id={id} type="radio" name={name} disabled={isDisabled} />
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
    </RadioWrapper>
  );
};

export default RadioBtn;
