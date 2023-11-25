import styled from "styled-components";
import { StyledBtn } from "../../../../shared/components/Buttons/LigthBtn.styled";

export const StyledTitleSection = styled.h1`
  margin-bottom: 8px;
  font-family: "Manrope-600", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 68px;
  }
`;

export const DivWrapper = styled.div`
  position: relative;
`;

export const StyledJustDrinks = styled.div`
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`;

export const StyledJustType = styled.p`
  margin-bottom: 20px;
  font-family: "Manrope-400", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.subtitle};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledJustText = styled.p`
  margin-bottom: 40px;
  font-family: "Manrope-400";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.mainText};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const StyledJustButton = styled(StyledBtn)`
  margin-bottom: 80px;

  &:disabled {
    background: #434d67;
    color: rgba(243, 243, 243, 0.2);
    border: transparent;
    cursor: not-allowed;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const StyledJustImages = styled.img`
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;

export const DrinkIDImage = styled.img`
  width: 335px;
  height: 400px;
  border-radius: 1%;
  /* object-fit: cover; */
  object-fit: contain;
  object-position: center;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
