import React from "react";
import { Container } from "../Container";
import { Content } from "../Content";
import { HeaderContainer } from "./styles";

interface IHeader {
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

const Header: React.FC<IHeader> = ({ children, ...props }: IHeader) => {
  return (
    <HeaderContainer
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
        <Content>{children}</Content>
      </Container>
    </HeaderContainer>
  );
};

export { Header };
