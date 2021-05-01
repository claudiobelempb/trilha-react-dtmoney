import React from "react"

import { ContainerLayoutMaciota } from "./style";

interface IContainerLayoutMaciota {
  children?: React.ReactNode;
}

const LayoutMaciota: React.FC<IContainerLayoutMaciota> = ({children}: IContainerLayoutMaciota) => {
  return(
    <ContainerLayoutMaciota>
      {children}
    </ContainerLayoutMaciota>
  );
}

export { LayoutMaciota };