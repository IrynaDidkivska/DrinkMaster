import styled from 'styled-components';
import Subtitle from '../../../../shared/components/Title/Subtitle';

export const TextareaStyled = styled.textarea`
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  height: 184px;
  padding: 16px 18px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  outline: transparent;
  background: transparent;
  resize: none;
  overflow-x: hidden;
  margin-top: 40px;
  font-family: 'Manrope-400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #434d67;
    border-radius: 20px;
    border: 8px solid transparent;
  }

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 480px;
    height: 184px;
    font-size: 17px;
    line-height: 156%; /* 26.52px */
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 24px;
  }
`;
export const SubtitleStyled = styled(Subtitle)`
  margin: 0 0 40px 0;
`;
