import styled from "styled-components";

interface IContainerModal {
  flexDirection?: string;
}

export const ModalContainer = styled.div<IContainerModal>`
  background-color: ${(props) => props.theme.colors.blue};

`;
