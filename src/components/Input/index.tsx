import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import { InputContainer } from './style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
}

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children?: React.ReactNode;
}

const Label: React.FC<ILabelProps> = (props) => {
  return (
    <label {...props}/>
  );
}

// import { FaEnvelope } from 'react-icons/fa';

const Input: React.FC<IInputProps> = (props) => {
  return (
    <InputContainer>
      <Label form={props.name}>
        {props.name}
      </Label>
      <input {...props}/>
    </InputContainer>
  );
}

export { Input };
