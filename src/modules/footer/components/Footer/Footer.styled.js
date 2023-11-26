import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  padding-top: 42px;
  padding-bottom: 18px;
  background-color: ${({ theme }) => theme.footer.bacground};
  border-top: ${({ theme }) => theme.footer.border};
  @media screen and (min-width: 768px) {
    padding-top: 83px;
  }
`;
export const StyledFooterTabletBox = styled.div`
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledFooterFirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
  }
`;
export const StyledFooterLogoNav = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 40px;
  }
`;
export const StyledFooterLogo = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 22px;
  span {
    color: ${({ theme }) => theme.footer.color};
    font-family: 'Manrope-600', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.12;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    span {
      font-size: 18px;
      line-height: 1.22;
    }
  }
`;
export const StyledFooterIconLogo = styled.div`
  fill: ${({ theme }) => theme.footer.color};
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
export const StyledFooterPrivacy = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const StyledFooterSpan = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const StyledFooterPrivacyBlock = styled.div`
  display: flex;
  gap: 14px;
  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.footer.link};
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-right: 102px;
    button {
      border: none;
      background: none;
      font-size: 14px;
    }
  }
`;

export const OverlayBottom = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  width: 774px;
  height: 762px;
  bottom: -670px;
  right: 27px;
  border-radius: 774px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    right: 57px;
    bottom: -660px;
  }
  @media screen and (min-width: 1440px) {
    right: 473px;
    bottom: -675px;
  }
`;
export const OverlayDesctop = styled.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    width: 784px;
    height: 849px;
    bottom: -764px;
    right: 221px;
    border-radius: 849px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }
`;

export const StyledModalFooteer = styled.div`
  width: 335px;
  padding: 20px 30px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.popUp.secondary};
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
export const StyledBtnCloseFooter = styled.button`
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
