import styled from 'styled-components';

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.section === 'request' ? '90px' : '100vh')};
`;
