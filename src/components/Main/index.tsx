import React from "react";

import { MainContainer } from "./style";

interface IMainProps {
  children?: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }: IMainProps) => {
  return(
    <MainContainer garea={"CT"}> 
      {children}
    </MainContainer>
  );
}

export { Main };