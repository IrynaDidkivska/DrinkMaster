import styled from 'styled-components';

import welcomeBg375_1x from '@/modules/welcome/img/welcome-bg-375@1x.webp';
import welcomeBg375_2x from '@/modules/welcome/img/welcome-bg-375@2x.webp';
import welcomeBg768_1x from '@/modules/welcome/img/welcome-bg-768@1x.webp';
import welcomeBg768_2x from '@/modules/welcome/img/welcome-bg-768@2x.webp';
import welcomeBg1440_1x from '@/modules/welcome/img/welcome-bg-1440@1x.webp';
import welcomeBg1440_2x from '@/modules/welcome/img/welcome-bg-1440@2x.webp';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;

  background-image: url(${welcomeBg375_1x});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.background.main};

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${welcomeBg375_2x});
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    background-image: url(${welcomeBg768_1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeBg768_2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${welcomeBg1440_1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeBg1440_2x});
    }
  }
`;

export const WelcomeWrapper = styled.div`
  z-index: 2;
  padding: 0 28px 0 28px;

  p {
    margin-top: 14px;
  }

  h2 {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 0 0 0 64px;

    h2 {
      text-align: left;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0 0 0 100px;
  }
`;

export const WelcomeContent = styled.p`
  font-family: 'Manrope-400', sans-serif;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    max-width: 470px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 14px;
    max-width: 485px;
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
  left: 42px;
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
