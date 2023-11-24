import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-bottom: 80px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1240px;
    height: 100%;
    gap: 20px;
    justify-content: flex-start;
  }
`;
