import styled from "styled-components";

const IngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-width: 368px;
  gap: 22px;

  @media screen and (min-width: 768px) {
    /* padding: 20px 32px 20px 0; */
  }

  @media screen and (min-width: 1440px) {
    gap: 35px;
  }
`;
export { IngredientsList };
