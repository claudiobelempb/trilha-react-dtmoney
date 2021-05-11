import React from "react";
import { ButtonContainer } from "./style";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  color?: string;
  isBgColor?: boolean;
  bgColor?: string;
  tgColor?: string;
  width?: number;
  MaxWidth?: number;
  MinWidth?: number;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
  alt?: string;
  src?: string;
  isImg?: boolean;
  isActive?: boolean;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <ButtonContainer
      type={props.type}
      isBgColor={props.isBgColor}
      bgColor={props.bgColor}
      color={props.color}
      tagColor={props.tgColor}
      width={props.width}
      MaxWidth={props.MaxWidth}
      MinWidth={props.MinWidth}
      fontSize={props.fontSize}
      opacity={props.opacity}
      isAfter={props.isAfter}
      onClick={props.onClick}
      isImg={props.isImg}
      isActive={props.isActive}
    >
      {props.isImg ? <img src={props.src} alt={props.alt} /> : ""}
      <span>{props.title ? props.title : "Button"}</span>
    </ButtonContainer>
  );
}
