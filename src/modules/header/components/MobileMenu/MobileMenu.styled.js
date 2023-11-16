import styled, { css } from 'styled-components';

export const StyledMobileMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #0a0a11;
  position: fixed;
  top: 0;
  left: -103%;
  z-index: 10;
  transition: left 0.3s ease-in-out;

  ${({ open }) =>
    open &&
    css`
      left: 0;
    `}
`;

export const StyledMobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 768px) {
    padding: 31px 0;
  }
`;

export const StyledBtnClose = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 1px 0 0 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

export const StyledBtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledMobileBody = styled.div`
  padding: 160px 0 336px 0;

  @media screen and (min-width: 768px) {
    padding: 256px 0 425px 0;
  }
`;

export const StyledMobileNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
