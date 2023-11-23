import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 520px;
  height: 550px;
  top: 20px;
  left: -375px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 829.931px;
    border-radius: 829.931px;
    top: 20px;
    left: -768px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: 20px;
    right: 1440px;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 196px;
  padding-bottom: 285px;
  width: 241px;
  /* background-image: url('./img/notFound.webp'), url('./img/notFound.png'); */
  background-size: 123px 156px;
  background-repeat: no-repeat;
  background-position: 61% 41%;

  span {
    color: rgba(243, 243, 243, 0.1);
    font-family: "Manrope-600", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2; /* 102.5% */
  }

  @media screen and (min-width: 768px) {
    width: 301px;
    padding-top: 239px;
    padding-bottom: 209px;
    background-size: 158px 201px;
    background-position: 60% 53%;

    span {
      font-size: 150px;
      line-height: 0.82; /* 82% */
    }
  }
  @media screen and (min-width: 1440px) {
    width: 402px;
    padding-top: 200px;
    padding-bottom: 140px;
    background-position: 56% 57%;
    span {
      font-size: 200px;
      line-height: 1; /* 100% */
    }
  }
`;

export const Glass = styled.img`
  width: 145px;
  height: 156px;
  position: absolute;
  left: 60px;

  @media screen and (min-width: 768px) {
    width: 198px;
    height: 201px;
    position: absolute;
    left: 65px;
  }
`;
