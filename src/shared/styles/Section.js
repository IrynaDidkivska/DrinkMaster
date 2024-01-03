import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0px;
  padding-top: 80px;
  padding-bottom: 80px;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;

export const OverlayBottom = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    pointer-events: none;
    z-index: -1;
    width: 549px;
    height: 543px;
    top: 414px;
    left: 651px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }

  @media screen and (min-width: 1440px) {
    top: 374px;
    left: 1181px;
  }
`;

export const OverlayMain = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  width: 520px;
  height: 550px;
  top: -71px;
  right: 254px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 829.931px;
    border-radius: 829.931px;

    right: 719px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    border-radius: 849px;
    right: 1386px;
  }
`;
