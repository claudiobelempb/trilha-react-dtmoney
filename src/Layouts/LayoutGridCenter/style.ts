import styled from "styled-components";

export const ContainerGridCenter = styled.div`
  background-color: #CCC;
  display: grid;

  grid-auto-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;


  grid-template-areas: 
  "H" 
  "M"
  "F";
  height: 100vh;
  
`;