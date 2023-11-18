import styled from 'styled-components';

export const StyledModal = styled.div`
  width: 335px;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.background.dropdown};
  overflow: hidden;
  transform: translate(-50%, -50%);

  position: absolute;
  top: 50%;
  left: 50%;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 50px 50px 75px 50px;
  }
`;

export const StyledBtnClose = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  position: fixed;
  top: 14px;
  right: 14px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledUserFoto = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 39px;

  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
  }
`;

export const StyledBtnAdd = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 116px;
`;

export const StyledModalForm = styled.form`
  width: 100%;
  padding: 0;
  background-color: transparent;
  border: none;

  position: relative;
`;

export const StyledModalInput = styled.input`
  width: 100%;
  margin-bottom: 18px;
  padding: 16px 24px;
  font-family: 'Manrope-400', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.ligth};
  border-radius: 200px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const StyledBtnEdit = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 17px;
  right: 19px;
`;

export const StyledBtnSave = styled.button`
  width: 100%;
  padding: 18px 90px;
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

export const Ellipse222 = styled.div`
  pointer-events: none;
  z-index: -1;
  width: 283.617px;
  height: 306.702px;
  border-radius: 306.702px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  position: absolute;
  top: -153px;
  left: -84px;
`;

export const Ellipse224 = styled.div`
  pointer-events: none;
  z-index: -1;
  width: 362px;
  height: 358px;
  border-radius: 362px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  position: absolute;
  bottom: -271px;
  right: -304px;
`;