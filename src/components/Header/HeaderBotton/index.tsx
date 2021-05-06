import React from "react";
import { HeaderContainer } from './styles';

interface IHeader {
  children?: React.ReactNode;
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
  bbottom?: string;
  height?: number;
  width?: number;
}

const Header: React.FC<IHeader> = ({children, fdirection, garea, jcontent, aitems, bgcolor, bbottom, width, height }: IHeader) => {

  return (
    <HeaderContainer fdirection={fdirection} jcontent={jcontent} aitems={aitems} garea={garea} bgcolor={bgcolor} bbottom={bbottom} width={width} height={height}>
      {children}
    </HeaderContainer>
  );
}

export { Header };