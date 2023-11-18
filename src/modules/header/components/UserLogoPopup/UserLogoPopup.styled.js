import styled from 'styled-components';

export const StyledUserPopup = styled.div`
  width: 177px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.dropdown};

  position: absolute;
  top: 73px;
  right: 0;
  z-index: 10;
`;
