import styled from "styled-components";
import { StyledBtn } from "../../../../shared/components/Buttons/LigthBtn.styled";

export const StyledPopupTitle = styled.p`
  font-family: "Manrope-500", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.popUp.main};
`;

export const StyledBtnEditProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 38px;
  min-width: 141px;
  border: none;
  background-color: transparent;
`;

export const StyledBtnLogOut = styled(StyledBtn)`
  padding: 12px 43px;
  line-height: 18px;
  color: ${({ theme }) => theme.popUp.secondary};
  background-color: ${({ theme }) => theme.popUp.main};
`;
