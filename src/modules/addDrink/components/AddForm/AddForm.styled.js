import styled from "styled-components";

export const ImgContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.dropdown};
  border-radius: 8px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AddImgButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainText};
  border-radius: 6px;
  border: none;
  & svg {
    width: 28px;
    height: 28px;
    stroke: ${({ theme }) => theme.colors.secondaryText};
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const AddImgLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Manrope-500";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
