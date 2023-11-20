import styled from "styled-components";

const DrinkCardItemFaxContainer = styled.div`
  width: 335px;

  @media screen and (min-width: 768px) {
    .drinkCardItemFax-img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1440px) {
    .drinkCardItemFax-img {
      height: 676px;
    }
  }
`;

const DrinkCardItemFaxImg = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    .drinkCardItemFax-img {
      width: 342px;
      height: 360px;
    }
  }

  @media screen and (min-width: 1440px) {
    .drinkCardItemFax-img {
      width: 400px;
      height: 400px;
    }
  }
`;

const DrinkCardItemFaxName = styled.h3`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #f3f3f3;
  justify-content: left;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const DrinkCardItemFaxStatus = styled.p`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);
  justify-content: left;
  padding-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const DrinkCardItemFaxDescription = styled.p`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #f3f3f3;
  justify-content: left;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
const DrinkCardItemFaxNavi = styled.div`
  display: flex;
  margin-top: 18px;
`;
const DrinkCardItemContainerDiscr = styled.div`
  width: 197px;
  height: 46px;
  display: flex;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    .drinkCardItem-img {
      width: 224px;
      height: 54px;
    }
  }

  @media screen and (min-width: 1440px) {
    .gallary-comics-img {
      width: 224px;
      height: 54px;
    }
  }
`;

const DrinkCardItemFaxBtn = styled.button`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #f3f3f3;
  background-color: #161f37;
  padding: 14px 40px;
  border-radius: 42px;
  border-color: transparent;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const DrinkCardItemFaxDel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 100px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.button.dark};

  svg {
    stroke: ${({ theme }) => theme.button.ligth};
    background: transparent;
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 56px;
    height: 54px;
  }
`;

export {
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxStatus,
  DrinkCardItemFaxDescription,
  DrinkCardItemContainerDiscr,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxDel,
};
