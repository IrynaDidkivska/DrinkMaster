import styled from "styled-components";

export const StyledIngredientsTitle = styled.h3`
  margin-bottom: 42px;
  font-family: "Manrope-500";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.link};

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const StyledDrinkIngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    gap: 22px;
  }

  @media screen and (min-width: 1440px) {
    gap: 35px;
    margin-bottom: 100px;
  }
`;
