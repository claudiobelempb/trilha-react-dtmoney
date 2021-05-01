import React from "react";

import { LinkContainer } from "./style";

interface ILinkProps {
  title?:string;
  children?: React.ReactNode;
  url?: string;
  icon?: React.ReactDOM;
}

const Link: React.FC<ILinkProps> = ({...props }: ILinkProps) => {
  return (
    <LinkContainer href={props.url}>
      {props.children} {props.title}
    </LinkContainer>
  );
}

export { Link };