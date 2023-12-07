import styled from 'styled-components';
import { StyledBtn } from '../../../../shared/components/Buttons/LigthBtn.styled';

export const StyledModal = styled.div`
  width: 335px;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.popUp.secondary};
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
  svg {
    stroke: ${({ theme }) => theme.colors.active};
  }
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
  text-align: center;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
  }
`;

export const StyledInputAdd = styled.input`
  display: none;
`;

export const StyledSvgWrapper = styled.button`
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
  color: ${({ theme }) => theme.popUp.main};
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }

  &:focus {
    outline: 1px solid #161f37;
  }
`;

export const StyledIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 17px;
  right: 19px;
`;

export const StyledBtnSave = styled(StyledBtn)`
  width: 100%;
  padding: 18px 96px;
  font-family: 'Manrope-600', sans-serif;
  line-height: 18px;
  color: ${({ theme }) => theme.popUp.secondary};
  background-color: ${({ theme }) => theme.popUp.main};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.popUp.secondary};
    color: ${({ theme }) => theme.popUp.main};
  }
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
