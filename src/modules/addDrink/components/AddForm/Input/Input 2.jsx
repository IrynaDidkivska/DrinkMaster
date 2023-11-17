/* eslint-disable react/prop-types */
import { InputStyled } from './Input.styled';

const Input = ({ placeholder, type }) => {
  return (
    <>
      <InputStyled placeholder={placeholder} type={type} />
    </>
  );
};

export default Input;
