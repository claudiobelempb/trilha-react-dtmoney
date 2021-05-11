import React, { FormHTMLAttributes } from "react";
import { FormContainer } from "./style";

interface IFromProps extends FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  isbg?: boolean;
}

const Form: React.FC<IFromProps> = ({ children, ...props }:IFromProps) => {
  return (
    <FormContainer>
      <form 
        action={props.action} 
        onSubmit={props.onSubmit}
      >

        <h2>{props.title}</h2>
        {children}
      </form>
    </FormContainer>
  );
};

export { Form };
