import React from "react";
import { Container } from "../Container";
import { Content } from "../Content";

import { MainContainer } from "./style";

interface IMainProps {
  children?: React.ReactNode;
  isPosition?: boolean;
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
  isColor?: boolean;
  isbg?: boolean;
  isml?: boolean;
  isp?: boolean;
  isPaddingTB?: boolean;
  isPaddingRL?: boolean;
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

const Main: React.FC<IMainProps> = ({ children, ...props }: IMainProps) => {
  return (
    <MainContainer
      isPosition={props.isPosition}
      jcontent={props.jcontent}
      padding={props.padding}
      isPadding={props.isPadding}
      pt={props.pt}
      pb={props.pb}
      pr={props.pr}
      pl={props.pl}
      width={props.width}
      garea={props.garea}
      isbg={props.isbg}
    >
      <Container>
        {children}
      </Container>
    </MainContainer>
  );
};

export { Main };
