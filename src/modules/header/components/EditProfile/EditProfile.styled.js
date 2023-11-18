import styled from 'styled-components';

export const StyledPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
`;

export const StyledPopupTitle = styled.p`
  font-family: 'Manrope-500', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const StyledBtnEditProfile = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledBtnLogOut = styled.button`
  padding: 12px 43px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: ${({ theme }) => theme.button.dark};
  background-color: ${({ theme }) => theme.button.ligth};
  border: 1px solid transparent;
  border-radius: 42px;
  outline: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.button.ligth};
    background-color: ${({ theme }) => theme.button.dark};
    border: 1px solid rgba(243, 243, 243, 0.2);
    transition: ${({ theme }) => theme.transition};
  }

  /* &:active {
    border: 1 solid rgba(64, 112, 205, 0.5);
  } */
`;
