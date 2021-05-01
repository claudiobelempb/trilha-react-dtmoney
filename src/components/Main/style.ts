import styled from "styled-components";

interface IMainProps {
  flexDirection?: string;
  garea?:string;
}

export const MainContainer = styled.main<IMainProps>`
  grid-area: ${props => props.garea ? props.garea : "CT"};
  /*width: 100%;*/
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};

  
`;