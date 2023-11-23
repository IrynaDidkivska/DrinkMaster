import styled from 'styled-components';
import { StyledBtn } from '../../../../shared/components/Buttons/LigthBtn.styled';

export const StyledTitleSection = styled.h1`
  margin-bottom: 8px;
  font-family: 'Manrope-600', sans-serif;
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

export const StyledJustDrinks = styled.div`
  padding-top: 80px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 249px;
    padding-top: 158px;
    margin-bottom: 100px;
  }
`;

export const StyledJustType = styled.p`
  margin-bottom: 20px;
  font-family: 'Manrope-400', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledJustText = styled.p`
  margin-bottom: 40px;
  font-family: 'Manrope-400';
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
