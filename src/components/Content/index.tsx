import React from 'react';
import { 
  ContentContainer
} from './style';

interface IContentProps {
  garea?: string;
  children?: React.ReactNode;
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
  bgscroll?: string;
  width?: number;
  height?: string;
  mheight?:string;
  isbr?: boolean;
  isbb?: boolean;
  isofy?: boolean;
}


const Content: React.FC<IContentProps> = ({ garea, width, height, mheight, children, jcontent, aitems, fdirection, bgcolor, isbr, isbb, isofy, bgscroll}) => {
  return (
    <ContentContainer garea={garea} width={width} height={height} mheight={mheight} jcontent={jcontent} aitems={aitems} fdirection={fdirection} bgcolor={bgcolor} isbr={isbr} isbb={isbb} isofy={isofy} bgscroll={bgscroll}>
      {children}
    </ContentContainer>
  );
}

export { Content };