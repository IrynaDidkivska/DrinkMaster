import { InputStyled } from './Input.styled';

const Input = ({ placeholder, type, changeF }) => {
  return (
    <>
      <InputStyled
        placeholder={placeholder}
        type={type}
        onChange={e => changeF(e.target.value)}
      />
    </>
  );
};

export default Input;
