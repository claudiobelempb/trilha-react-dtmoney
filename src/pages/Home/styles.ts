import styled from 'styled-components';

interface IHomeProps{
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
}
export const ContainerHome = styled.main<IHomeProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  grid-column: ${props => props.mincolumn} / ${props => props.maxcolumn};
  
  & span {
    font-size: 1rem;
  }

  & h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;