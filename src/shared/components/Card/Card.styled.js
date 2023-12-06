import styled from 'styled-components';

const DrinkCardItemFaxContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc((100% - 1 * 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 2 * 20px) / 3);
  }
`;

const DrinkCardItemFaxImg = styled.img`
  margin-bottom: 18px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

const DrinkCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const DrinkCardItemFaxName = styled.p`
  margin-bottom: 4px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  justify-content: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
  margin-bottom: 18px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.link};
  justify-content: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const DrinkCardItemFaxDescription = styled.p`
  margin-bottom: 18px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  justify-content: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 22px;
  }
`;

const DrinkCardItemFaxNavi = styled.div`
  display: flex;
`;

const DivRelative = styled.div`
  position: relative;
`;

const DrinkCardItemContainerDiscr = styled.div`
  width: 197px;
  height: 46px;
  display: flex;

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
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.popUp.main};
  background-color: ${({ theme }) => theme.popUp.secondary};
  padding: 14px 40px;
  border-radius: 42px;
  border-color: transparent;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

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
  background-color: ${({ theme }) => theme.popUp.secondary};

  svg {
    stroke: ${({ theme }) => theme.popUp.main};
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
  DrinkCardContent,
  DivRelative,
};
