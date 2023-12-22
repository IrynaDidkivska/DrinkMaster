import styled from 'styled-components';

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.section === 'request' ? '90px' : '100vh')};
`;

export const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 100vh;
  text-align: center;
  list-style: none;
`;
