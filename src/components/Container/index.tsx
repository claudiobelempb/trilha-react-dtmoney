import React from 'react';
import { MainContainer } from "./style";

interface IContainerProps {
  garea?: string;
  bgcolor?: string;
  jcontent?: string;
  aitems?: string;
  isbg?: boolean;
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ 
  garea, 
  bgcolor, 
  jcontent, 
  aitems, 
  isbg,
  children 
}: IContainerProps) => {
  return (
    <MainContainer 
      garea={garea} 
      bgcolor={bgcolor} 
      jcontent={jcontent} 
      aitems={aitems}
      isbg={isbg}
    >
      {children}
    </MainContainer>
  );
}

export { Container };