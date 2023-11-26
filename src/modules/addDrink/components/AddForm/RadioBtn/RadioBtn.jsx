import { InputStyled, LabelStyled, RadioWrapper } from './RadioBtn.styled';

const RadioBtn = ({ id, name, label, isDisabled = false, changeF, value }) => {
  return (
    <RadioWrapper>
      <InputStyled
        id={id}
        type="radio"
        name={name}
        value={value}
        disabled={isDisabled}
        defaultChecked
        onClick={e => {
          changeF(e.target.value);
        }}
      />
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
    </RadioWrapper>
  );
};

export default RadioBtn;
