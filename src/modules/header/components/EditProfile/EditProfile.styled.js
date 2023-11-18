import styled from 'styled-components';
import { StyledBtn } from '../../../../shared/components/Buttons/LigthBtn.styled';

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

export const StyledBtnLogOut = styled(StyledBtn)`
  padding: 12px 43px;
  line-height: 18px;
`;
