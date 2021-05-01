import React from "react";
import { BoxContainer } from "./style";

interface IBoxProps {
  children?: React.ReactNode;
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  color?: string;
  isColor?: boolean;
  isbg?: boolean;
  bbottom?: string;
  width?: string;
  isml?: boolean;
  isp?: boolean;
  isPosition?: boolean;
  isPaddingTB?: boolean;
  isPaddingRL?: boolean;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Box: React.FC<IBoxProps> = ({
  children, 
  fdirection, 
  jcontent, 
  aitems, 
  isbg, 
  bgcolor, 
  isColor,
  color,
  isml, 
  isp, 
  isPosition,
  isPaddingTB,
  isPaddingRL,
  isPadding,
  pt,
  pb,
  pr,
  pl
  
}: IBoxProps) => {
  return (
    <BoxContainer 
      isPosition={isPosition}  
      isp={isp} isml={isml} 
      isbg={isbg} 
      bgcolor={bgcolor} 
      isColor={isColor}
      color={color}
      fdirection={fdirection} 
      jcontent={jcontent} 
      aitems={aitems}
      isPaddingTB={isPaddingTB}
      isPaddingRL={isPaddingRL}
      isPadding={isPadding}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
    >
      {children}
    </BoxContainer>
  )
}

export { Box };