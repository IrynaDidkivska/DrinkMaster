import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
`;

export const IncButtonStyled = styled.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  padding: 11px 16px;
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;
  border-radius: 0 200px 200px 0;
  border: none;
  &:disabled {
    opacity: 0.5;
  }
`;

export const DecButtonStyled = styled(IncButtonStyled)`
  border-radius: 200px 0 0 200px;
`;
export const CountViveStyled = styled.div`
  color: ${({ theme }) => theme.colors.mainText};
  text-align: center;
  font-family: 'Manrope-400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
`;
