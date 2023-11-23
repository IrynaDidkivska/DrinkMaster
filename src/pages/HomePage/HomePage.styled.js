import styled from "styled-components";

export const BlueGlass = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 196px;
  padding-bottom: 285px;
  width: 241px;
  background: url("../../shared/img/Found.webp"),
    lightgray -40.378px -23px / 133.644% 107.865% no-repeat;
`;

export const HomeImage = styled.img`
  width: 359px;
  height: 360px;
  flex-shrink: 0;
  margin-top: 20px;
`;

export const MainText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  padding-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const WrapperCategory = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  @media screen and (min-width: 1400px) {
    /* flex-direction: row; */
  }
`;
