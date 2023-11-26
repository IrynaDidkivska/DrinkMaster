import styled from 'styled-components';

export const InputStyled = styled.input`
  display: block;
  height: 34px;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.link};
  border-top: none;
  border-left: none;
  border-right: none;

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
