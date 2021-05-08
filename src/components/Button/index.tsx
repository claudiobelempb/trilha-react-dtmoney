import React from "react";
import { ButtonContainer } from "./style";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  color?: string;
  isBgColor?: boolean;
  bgColor?: string;
  tgColor?: string;
  width?: string;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
  alt?: string;
  src?: string;
  isImg?: boolean;
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
      fontSize={props.fontSize}
      opacity={props.opacity}
      isAfter={props.isAfter}
      onClick={props.onClick}
      isImg={props.isImg}
    >
      {props.isImg ? (
        <img src={props.src} alt={props.alt} />
      ) : (
        ""
      )}
      <span>{props.title ? props.title : "Button"}</span>
    </ButtonContainer>
  );
}
