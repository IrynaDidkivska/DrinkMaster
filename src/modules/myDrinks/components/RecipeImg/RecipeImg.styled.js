import styled from 'styled-components';

export const StyledRecipeImages = styled.img`
  max-height: 430px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    order: 1;
    max-width: 631px;
    max-height: 480px;
  }
`;
