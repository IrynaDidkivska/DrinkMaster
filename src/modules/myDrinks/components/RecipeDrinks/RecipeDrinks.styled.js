import styled from 'styled-components';

export const StyledRecipeDrinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRecipTitle = styled.h2`
  margin-bottom: 40px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media screen and (min-width: 1400px) {
    margin-bottom: 60px;
  }
`;

export const StyledWrapperContent = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    gap: 60px;
  }
`;

export const StyledRecipeText = styled.p`
  margin-bottom: 40px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    order: 2;
  }
`;

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }

  &:active {
    color: #004080;
  }
`;
