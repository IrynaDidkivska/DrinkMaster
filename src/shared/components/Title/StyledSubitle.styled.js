import styled from "styled-components";
import { StyledTitle } from "./Title.styled";

export const StyledSubitle = styled(StyledTitle)`
  font-size: 28px;
  letter-spacing: -0.56px;
  line-height: 1.14; /* 114.286% */
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
    letter-spacing: -0.8px;
  }
`;
