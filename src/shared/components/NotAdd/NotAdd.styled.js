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
