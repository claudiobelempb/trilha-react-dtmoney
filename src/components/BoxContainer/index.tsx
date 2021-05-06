import React from "react";
import { BoxContainerContainer } from "./style";

interface IBoxContainerProps {
  children?: React.ReactNode;
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  bgcolor?: string;
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

const BoxContainer: React.FC<IBoxContainerProps> = ({
  children,
  ...props
}: IBoxContainerProps) => {
  return (
    <BoxContainerContainer
      isPosition={props.isPosition}
      isp={props.isp}
      isml={props.isml}
      isbg={props.isbg}
      bgcolor={props.bgcolor}
      isColor={props.isColor}
      color={props.color}
      fdirection={props.fdirection}
      jcontent={props.jcontent}
      aitems={props.aitems}
      isPaddingTB={props.isPaddingTB}
      isPaddingRL={props.isPaddingRL}
      isPadding={props.isPadding}
      pt={props.pt}
      pb={props.pb}
      pr={props.pr}
      pl={props.pl}
    >
      {children}
    </BoxContainerContainer>
  );
};

export { BoxContainer };
