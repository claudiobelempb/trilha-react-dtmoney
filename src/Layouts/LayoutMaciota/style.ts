import styled from "styled-components";

export const ContainerLayoutMaciota = styled.div`
  background-color: #CCC;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 60px 1fr 60px;


  grid-template-areas: 
  "H" 
  "M"
  "F";
  height: 100vw;
  
`;