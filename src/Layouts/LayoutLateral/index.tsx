import React from "react";

import { ContainerLateral } from "./style";


interface ILayoutLateral {
  children?: React.ReactNode;
}

const LayoutLateral = ({ children }: ILayoutLateral)=> {
  
  return(
    <ContainerLateral>
      {children}
    </ContainerLateral>
  )
}

export { LayoutLateral };