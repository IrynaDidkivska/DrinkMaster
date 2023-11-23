import styled from "styled-components";

const IngredientsContainer = styled.div`
  width: 157px;
  height: 183px;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 258px;
  }
`;

const IngredientsImage = styled.img`
  width: 157px;
  height: 157px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;
const IngredientsContainerDiscr = styled.div`
  width: 157px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 24px;
  }
`;

const IngredientsName = styled.h3`
  font-family: "Manpore";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #f3f3f3;
  justify-content: left;
  padding-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const IngredientsNumber = styled.p`
  font-family: "Manpore";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export {
  IngredientsContainer,
  IngredientsImage,
  IngredientsName,
  IngredientsNumber,
  IngredientsContainerDiscr,
};
