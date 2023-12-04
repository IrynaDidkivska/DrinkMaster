import styled from 'styled-components';

export const StyledModalContent = styled.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  p:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 16px;
      line-height: 1.37; /* 137.5% */
    }
  }
  @media screen and (min-width: 1440px) {
    p {
      font-size: 20px;
    }
    p:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
