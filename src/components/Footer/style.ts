import styled from  'styled-components';

interface IFooterContainer {
  flexDirection?: string;
  bgcolor?: string;
}

export const FooterContainer = styled.footer<IFooterContainer>`
  width: 100%;
  height: 60px;
  display:flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.bgcolor ? props.theme.colors.blue : props.bgcolor};
  padding: 0 1rem;
`;


