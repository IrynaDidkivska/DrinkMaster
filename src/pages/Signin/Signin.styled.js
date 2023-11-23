import styled from "styled-components";
import { LinkStyled } from "../../shared/components/StyledLink/StyledLink.styled";
import { StyledBtn } from "../../shared/components/Buttons/LigthBtn.styled";
import { switchBorderColor } from "../Signup/helpers/switchColor";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;

export const InputWrapper = styled.input`
  display: block;
  padding: 14px 0 14px 24px;
  min-width: 335px;
  min-height: 54px;
  text-align: center;
  font-family: "Manrope-400";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28; /* 26.52px */
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  outline: transparent;
  border-radius: 200px;
  border: 1px solid ${(props) => switchBorderColor(props)};
  opacity: 0.8;
  transition: ${({ theme }) => theme.transition};

  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }

  &::placeholder {
    text-align: left;
    color: rgba(243, 243, 243, 0.5);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const SignButton = styled(StyledBtn)`
  display: block;
  padding: 18px 0 18px 0;
  min-width: 335px;
  min-height: 54px;
`;
export const StyledAuthLink = styled(LinkStyled)`
  padding: 0;
  font-family: "Manrope-600", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28px; /* 112.5% */
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;
  text-decoration-line: underline;
  border: none;
  margin-top: 14px;
`;
