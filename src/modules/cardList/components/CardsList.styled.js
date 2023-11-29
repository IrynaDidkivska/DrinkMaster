import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 62px;
  }
`;
