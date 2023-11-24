import styled from "styled-components";

export const IngredientsItem = styled.li`
  width: calc((100% - 1 * 21px) / 2);

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 22px) / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 4 * 35px) / 5);
  }
`;

export const IngredientsImage = styled.img`
  max-height: 157px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    max-height: 220px;
    margin-bottom: 14px;
  }
`;

export const IngredientsContainerDiscr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientsName = styled.p`
  font-family: "Manpore-500", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainPage};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const IngredientsNumber = styled.div`
  font-family: "Manpore-500", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.link};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
