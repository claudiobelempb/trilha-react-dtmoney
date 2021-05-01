import React from 'react';

import { ButtonContainer, ToggleSwitch } from  './style';

interface IButtonToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  bgColor?: string;
  tgColor?: string;
  width?: string;
  fontSize?: string;
}

const ButtonTogle: React.FC = ({title, bgColor, tgColor, width, fontSize, type, onClick}:IButtonToggleProps) => {
  return (
      <ButtonContainer bgColor={bgColor} tagColor={tgColor} width={width} fontSize={fontSize} onClick={onClick}>
      <span>{title ? title : 'Light'}</span>
        <ToggleSwitch 
          checked
          
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={()=> {console.log("MUDOU")}}
        />
      <span>{title ? title : 'Dark'}</span>
    </ButtonContainer>
  );
}

export { ButtonTogle };
