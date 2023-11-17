import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 25px 0;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 768px) {
    padding: 28px 0;
  }
`;

export const SrtledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledMobileMenuBtn = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 2px 0 0 0;

  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;
