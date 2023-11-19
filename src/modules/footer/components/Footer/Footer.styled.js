import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: 42px;
  background-color: ${({ theme }) => theme.footer.bacground};
  border-top: ${({ theme }) => theme.footer.borderTop};
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
`;
export const StyledFooterLogo = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const StyledFooterIconLogo = styled.div`
  fill: ${({ theme }) => theme.footer.color};
  width: 22px;
  height: 22px;
`;
export const StyledFooterPrivacy = styled.div`
  /* color: ${({ theme }) => theme.colors.mainPage}; */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const StyledFooterSpan = styled.div`
  /* color: rgba(243, 243, 243, 0.5); */
  font-size: 12px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const StyledFooterPrivacyBlock = styled.div`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-right: 102px;
  }
`;
export const StyledFooterPrivacyLink = styled.a`
  color: ${({ theme }) => theme.footer.link};
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const OverlayBottom = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  width: 774px;
  height: 762px;
  right: 100px;
  top: 500px;
  border-radius: 774px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    right: 160px;
    top: 350px;
  }
  @media screen and (min-width: 1440px) {
    right: 500px;
    top: 280px;
  }
`;
