import React from 'react';
import { TitleContainer } from './style';

interface ITitle {
  title: string;
  color?: string;
  isColor?: string;
  bgcolor?: string;
  isBgcolor?: string;
}

export const Title: React.FC<ITitle> = ({title, isColor, isBgcolor, color, bgcolor}: ITitle) => {
  return (
    <TitleContainer isColor={isColor} isBgColor={isBgcolor} color={color} bgcolor={bgcolor}>
      {title}
    </TitleContainer>
  );
}
