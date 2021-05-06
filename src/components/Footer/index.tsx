import React from 'react';
import { Container } from '../Container';
import { Content } from '../Content';
import { 
  FooterContainer
} from './style';

interface IFooterProps {
  children?: React.ReactNode;
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
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

const Footer: React.FC<IFooterProps> = ({ children, ...props }: IFooterProps) => {
  return (
    <FooterContainer
      isPosition={props.isPosition}
      jcontent={props.jcontent}
      padding={props.padding}
      mtop={props.mtop}
      ptb={props.ptb}
      prl={props.prl}
      isPadding={props.isPadding}
      pt={props.pt}
      pb={props.pb}
      pr={props.pr}
      pl={props.pl}
      width={props.width}
      isHeight={props.isHeight}
      height={props.height}
      garea={props.garea}
    >
      <Container>
        <Content>{children}</Content>
      </Container>
    </FooterContainer>
  );
}

export { Footer };