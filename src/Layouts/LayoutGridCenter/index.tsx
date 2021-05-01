import React from "react"

import { ContainerGridCenter } from "./style";

interface IContainerGridCente {
  children?: React.ReactNode;
}

const LayoutGridCenter: React.FC<IContainerGridCente> = ({children}: IContainerGridCente) => {
  return(
    <ContainerGridCenter>
      {children}
    </ContainerGridCenter>
  );
}

export { LayoutGridCenter };