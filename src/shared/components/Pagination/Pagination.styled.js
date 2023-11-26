import styled from 'styled-components';

export const StyledNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.mainPage};
    }
  }
`;

export const StyledPrev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 16px;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.mainPage};
    }
  }
`;
