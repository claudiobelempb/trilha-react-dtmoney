import React from 'react';
import { ButtonContainer } from  './style';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  color?: string;
  bgColor?: string;
  tgColor?: string;
  width?: string;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
}

export function Button({
  title, 
  color,
  isAfter, 
  bgColor, 
  tgColor, 
  width, 
  fontSize, 
  opacity, 
  type, 
  onClick
}:IButtonProps) {
  return (
      <ButtonContainer   
        bgColor={bgColor} 
        color={color}
        tagColor={tgColor} 
        width={width} 
        fontSize={fontSize} 
        opacity={opacity} 
        isAfter={isAfter} 
        onClick={onClick}
      >
      <span>{title ? title : 'Button'}</span>
    </ButtonContainer>
  );
}
