import styled from "styled-components";

export const ContainerLateral = styled.div`
  background-color: #CCC;
  display: grid;
  /*grid-template-columns: minmax(150px, 25%) 1fr;*/
  grid-auto-columns: 250px 1fr;
  grid-template-rows: 70px 1fr;


  grid-template-areas: 
  "S H H" 
  "S M M"
  "S F F";
  height: 100vh;
`;