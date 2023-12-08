import styled, { css } from 'styled-components';
import { StyledNavBar } from '../../../../shared/components/Navbar/Navbar.styled';

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #0a0a11;
  overflow: hidden;
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.background.main};
  position: fixed;
  top: -103%;
  left: 0;
  z-index: 10;

  ${({ open }) =>
    open &&
    css`
      top: 0;
    `}
`;

export const StyledMobileHeader = styled.div`
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 768px) {
    padding: 31px 0;
  }
`;

export const StyledMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBtnClose = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 1px 0 0 0;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  border: none;
  svg {
    width: 32px;
    height: 32px;
    stroke: currentColor;
  }
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
  background-color: ${({ theme }) => theme.background.main};

  @media screen and (min-width: 768px) {
    /* padding: 256px 0 425px 0; */
  }
`;

export const StyledMobileNavBar = styled(StyledNavBar)`
  flex-direction: column;
`;

export const Ellipse222 = styled.div`
  pointer-events: none;
  z-index: 1;
  width: 520px;
  height: 550px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  position: absolute;
  top: 20px;
  left: -399px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Ellipse223 = styled.div`
  pointer-events: none;
  width: 257px;
  height: 247px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  position: absolute;
  top: 84px;
  left: 42px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: 387px;
    height: 372.442px;
    border-radius: 901px;
    border-radius: 387px;

    top: 116.33px;
    left: -160px;
  }
`;

export const Ellipse224 = styled.div`
  pointer-events: none;

  width: 549px;
  height: 543px;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  position: absolute;
  top: 498px;
  right: -505px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    border-radius: 549px;
    top: 498px;
    right: -432px;
  }
`;
