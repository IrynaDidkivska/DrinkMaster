import styled from "styled-components";

export const StyledNotAdd = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  p {
    width: 205px;
    font-size: 14px;
    text-align: center;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) {
    p {
      width: 236px;
      padding-bottom: 140px;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    background-position: 56% 57%;
    span {
    }
  }
`;
export const Glass = styled.img`
  width: 198px;
  height: 247px;
  margin-top: 91px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
    margin-top: 67px;
  }
`;
export const OverlayLeft = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  width: 520px;
  height: 550px;
  top: -140px;
  left: -500px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  @media screen and (min-width: 768px) {
  }
`;
export const OverlayRight = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    width: 549px;
    height: 543px;
    top: 70px;
    right: -400px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }
`;
