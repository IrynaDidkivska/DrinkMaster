import styled from "styled-components";

const DrinkCardItemContainer = styled.div`
  width: 335px;
  height: 448px;

  @media screen and (min-width: 768px) {
    .drinkCardItem-img {
      width: 342px;
      height: 398px;
    }
  }

  @media screen and (min-width: 1440px) {
    .gallary-comics-img {
      width: 400px;
      height: 438px;
    }
  }
`;

const DrinkCardItemImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  /* object-fit: cover; */

  @media screen and (min-width: 768px) {
    .drinkCardItem-img {
      width: 342px;
      height: 360px;
    }
  }

  @media screen and (min-width: 1440px) {
    .gallary-comics-img {
      width: 400px;
      height: 400px;
    }
  }
`;
const DrinkCardItemContainerDiscr = styled.div`
  width: 335px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    .drinkCardItem-img {
      width: 342px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    .gallary-comics-img {
      width: 335px;
      height: 18px;
    }
  }
`;

const DrinkCardItemName = styled.h3`
  font-family: "Manpore";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #f3f3f3;
  justify-content: left;
  padding-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const DrinkCardItemSeeMore = styled.a`
  font-family: "Manpore";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
};
