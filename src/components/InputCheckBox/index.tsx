import React, { InputHTMLAttributes } from "react";

import { InputCheckBoxContainer } from "./style";

interface IInputCheckBoxProps extends InputHTMLAttributes<HTMLLabelElement> {
  isHover?: boolean;
  isBefore?: boolean;
  isAfter?: boolean;
  img?: string;
  title?: string;
  type?: string;
  htmlFor?: string;
  children?: React.ReactNode;
}

// import { FaEnvelope } from 'react-icons/fa';

const InputCheckBox: React.FC<IInputCheckBoxProps> = ({
  children,
  ...props
}) => {
  return (
    <InputCheckBoxContainer
      isBefore={props.isBefore}
      isAfter={props.isAfter}
      img={props.img}
    >
      <label htmlFor={props.htmlFor}>
        <span>{props.title}</span>
        <input
          type={props.type}
          id={props.htmlFor}
          name={props.name}
          checked={props.checked}
          value={0}
        />
      </label>
    </InputCheckBoxContainer>
  );
};

export { InputCheckBox };
