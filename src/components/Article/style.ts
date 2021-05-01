import styled from  'styled-components';

interface IContainer {
  flexDirection?: string;
}

export const Container = styled.div<IContainer>`

  background-color: ${props => props.theme.colors.blue};
`;


