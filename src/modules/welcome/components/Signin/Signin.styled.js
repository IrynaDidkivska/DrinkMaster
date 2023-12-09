import styled from 'styled-components';

import { switchBorderColor } from '../../helpers/switchColor';

import { LinkStyled } from '@/shared/components/StyledLink/StyledLink.styled';
import { StyledBtn } from '@/shared/components/Buttons/LigthBtn.styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
`;

export const StyledSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    gap: 18px;
  }
`;

export const StyledSubitleContent = styled.p`
  margin-top: 11px !important;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const InputWrapper = styled.input`
  display: block;
  padding: 14px 0 15px 24px;
  min-width: 335px;
  min-height: 54px;
  font-family: 'Manrope-400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: transparent;
  outline: transparent;
  border-radius: 200px;
  border: 1px solid ${props => switchBorderColor(props)};
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

export const SryledLinkWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const StyledAuthLink = styled(LinkStyled)`
  padding: 0;
  font-family: 'Manrope-600', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28px; /* 112.5% */
  color: ${({ theme }) => theme.colors.mainText};
  background: transparent;
  text-decoration-line: underline;
  border: none;
  margin-top: 14px;
`;
