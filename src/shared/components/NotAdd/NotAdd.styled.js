import styled from 'styled-components';

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
  }
  @media screen and (min-width: 768px) {
    p {
      width: 236px;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    background-position: 56% 57%;
    span {
    }
  }
`;
export const StyledImage = styled.img`
  width: 198px;
  height: 247px;
  margin-top: 91px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 67px;
  }
`;
