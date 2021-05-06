import styled from "styled-components";

export const ContainerSantoGraal = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "H H H"
    "M M M"
    "F F F";

  /* height: 100vh; */

  @media screen and (max-width: 700px) {
    & {
      border: 1px solid red;
    }
  }
`;
