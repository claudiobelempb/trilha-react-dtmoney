import React from 'react';
import { 
  ContainerSection
} from './style';

interface ISection {
  children?: React.ReactNode;
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  bgcolor?:string;
  bbottom?: string;
  isPosition?: boolean;
  mtop?: number;
  ptb?: number;
  prl?: number;
  padding?: number;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  isHeight?: boolean;
  height?: number | string;
  width?: number;
}
export const Section: React.FC<ISection> = ({
  children, 
  jcontent, 
  isPosition, 
  mtop, 
  padding, 
  ptb, 
  prl, 
  isPadding, 
  pt, 
  pb, 
  pr, 
  pl, 
  width,
  isHeight, 
  height 
}: ISection) => {
  return (
    <ContainerSection 
      isPosition={isPosition} 
      jcontent={jcontent} 
      padding={padding} 
      mtop={mtop} 
      ptb={ptb} 
      prl={prl} 
      isPadding={isPadding} 
      pt={pt} 
      pb={pb} 
      pr={pr} 
      pl={pl} 
      width={width}
      isHeight={isHeight}
      height={height}
    >
      {children}
    </ContainerSection>
  );
}