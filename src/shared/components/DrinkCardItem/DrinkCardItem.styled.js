import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DrinkCardItemImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
const DrinkCardItemContainerDiscr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 14px;
`;

const DrinkCardItemName = styled.h3`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainPage};
  justify-content: left;
  padding-top: 14px;

  // limiting the display of text with ellipses
  max-width: 241px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    max-width: 238px;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 277px;
    font-size: 18px;
    line-height: 24px;
  }
`;

const DrinkCardItemSeeMore = styled(Link)`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
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

export {
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
};
