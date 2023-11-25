import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    url("../../img/welcome.webp"),
    lightgray -3px -13.319px / 100.511% 101.679% no-repeat;
  background-size: auto, auto, auto, 587px 812px;
  background-position: 80px 0;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background.main};

  p {
    font-family: "Manrope-400", sans-serif;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28; /* 128.571% */
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    background-size: auto, auto, auto, 733px 1024px;
    background-position: 302px center;
    p {
      max-width: 470px;
      font-size: 18px;
      line-height: 1.33; /* 133.333% */
      letter-spacing: -0.36px;
      text-align: left;
    }
  }
  @media screen and (min-width: 1440px) {
    background-size: auto, auto, auto, 703px 983px;
    background-position: 737px center;
    p {
      margin-top: 14px;
      max-width: 485px;
    }
  }
`;
export const WelcomeWrapper = styled.div`
  z-index: 2;
  padding: 0 28px 0 28px;
  @media screen and (min-width: 768px) {
    padding: 0 0 0 64px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 0 0 100px;
  }
`;

export const StyledLinkWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

// Overlay
export const OverlayCentered = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  width: 257px;
  height: 247px;
  top: 84px;
  right: 76px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    width: 387px;
    height: 372.442px;
    border-radius: 387px;
    top: 46.33px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 387px;
    height: 381px;
    border-radius: 387px;
    top: -132px;
    left: 171px;
  }
`;

export const OverlayLeft = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  width: 520px;
  height: 550px;
  top: 20px;
  left: -399px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 829.931px;
    border-radius: 829.931px;
    top: -244.54px;
    left: -649px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    border-radius: 849px;
    top: -152px;
    left: -494px;
  }
`;

export const OverlayRight = styled.div`
  position: absolute;
  top: 498px;
  left: 331px;

  pointer-events: none;
  z-index: 1;
  width: 549px;
  height: 543px;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 1;
    width: 549px;
    height: 543px;
    top: 498px;
    left: 621px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    border-radius: 549px;
    top: 458px;
    left: 1181px;
  }
`;
