import styled from "styled-components";

const PopularContainer = styled.div`
  width: 335px;
  height: 484px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 284px;
  }

  @media screen and (min-width: 1440px) {
    width: 516px;
    height: 330px;
  }
`;

const PopularItemContainer = styled.div`
  width: 336px;
  height: 90px;
  gap: 24px;
  display: flex;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 313px;
    gap: 14px;
  }
`;

const PopularImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;
const PopularContainerDiscr = styled.div`
  width: 232px;
  max-height: 89px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`;

const PopularName = styled.h3`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #f3f3f3;
  justify-content: left;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const PopularItem = styled.div`
  width: 232px;
  height: 89px;
`;

const PopularDiskr = styled.p`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ButtonSeeMore = styled.button`
  color: rgba(243, 243, 243, 0.5);
  cursor: pointer;
`;
export {
  PopularContainer,
  PopularItemContainer,
  PopularImage,
  PopularItem,
  PopularName,
  PopularDiskr,
  ButtonSeeMore,
  PopularContainerDiscr,
};
