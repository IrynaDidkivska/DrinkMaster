import styled from 'styled-components';
import Subtitle from '../../../../shared/components/Title/Subtitle';

export const TextareaStyled = styled.textarea`
  width: 100%;
  color: ${({ theme }) => theme.colors.mainText};
  height: 184px;
  padding: 16px 18px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  outline: none;
  background: transparent;
  resize: none;
  overflow-x: hidden;
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
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const SubtitleStyled = styled(Subtitle)`
  margin: 0 0 40px 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
