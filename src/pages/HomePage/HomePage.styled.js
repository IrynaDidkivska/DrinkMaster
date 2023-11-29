import styled from 'styled-components';

export const MainText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  padding-bottom: 32px;
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 112px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    margin-bottom: 112px;
  }
`;

export const WrapperCategory = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 40px;
  /* align-items: flex-start; */

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1400px) {
    /* flex-direction: row; */
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;

export const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 80px;
`;
