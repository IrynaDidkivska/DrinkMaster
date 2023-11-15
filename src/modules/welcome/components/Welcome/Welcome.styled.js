import styled from "styled-components";

export const StyledWrapper = styled.div`
  h1 {
    margin-bottom: 14px;
    font-family: "Manrope-600", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.14; /* 114.286% */
    letter-spacing: -0.56px;
    text-align: center;
  }
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
    h1 {
      font-size: 40px;
      line-height: 1.1; /* 110% */
      letter-spacing: -0.8px;
      text-align: left;
    }
    p {
      font-size: 18px;
      line-height: 1.33; /* 133.333% */
      letter-spacing: -0.36px;
      text-align: left;
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;
