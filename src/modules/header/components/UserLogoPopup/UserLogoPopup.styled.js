import styled from 'styled-components';

export const StyledUserPopup = styled.div`
  width: 177px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.dropdown};

  position: absolute;
  top: 58px;
  right: 0;
  z-index: 11;

  @media screen and (min-width: 768px) {
    top: 73px;
    right: 0;
  }
`;

export const PopUpWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
`;
