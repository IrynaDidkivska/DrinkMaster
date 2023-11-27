import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1240px;
    height: 100%;
    gap: 20px;

    align-items: start;
    display: flex;
    justify-content: flex-start;
    margin-top: 62px;
    justify-content: space-between;
  }
`;
