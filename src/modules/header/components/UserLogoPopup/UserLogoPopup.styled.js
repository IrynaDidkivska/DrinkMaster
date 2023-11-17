import styled from 'styled-components';

export const StyledPopupWrapper = styled.div``;

export const StyledPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledPopupContent = styled.div`
  text-align: center;
`;
