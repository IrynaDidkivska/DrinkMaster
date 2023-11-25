import styled from 'styled-components';

export const InputStyled = styled.input`
  display: block;
  height: 34px;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: 'Manrope-400';
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  padding-bottom: 14px;
  outline: transparent;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 41px;
    padding-bottom: 18px;
    letter-spacing: -0.32px;
  }
`;
