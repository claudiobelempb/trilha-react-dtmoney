import React, { FormHTMLAttributes } from "react";
import { FormContainer } from "./style";

interface IFromProps extends FormHTMLAttributes<HTMLFontElement> {
  title?: string;
  isbg?: boolean;
}

const Form: React.FC<IFromProps> = ({ children, ...props }) => {
  return (
    <FormContainer>
      <form action={props.action}>
        <h2>{props.title}</h2>
        {children}
      </form>
    </FormContainer>
  );
};

export { Form };
