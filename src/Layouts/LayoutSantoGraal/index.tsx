import React from "react"

import { ContainerSantoGraal } from "./style";

interface IContainerSantoGraal {
  children?: React.ReactNode;
}

const LayoutSantoGraal: React.FC<IContainerSantoGraal> = ({children}: IContainerSantoGraal) => {
  return(
    <ContainerSantoGraal>
      {children}
    </ContainerSantoGraal>
  );
}

export { LayoutSantoGraal };