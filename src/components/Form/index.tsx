import React, { FormHTMLAttributes } from 'react';
import { FormContainer } from './style';

interface IFromPprops extends FormHTMLAttributes<HTMLFontElement> {
  title?: string;
  isbg?: boolean;
}

const Form: React.FC<IFromPprops> = ({children}, props) => {
  return (
    <FormContainer>
      <form {...props}>
        { children }
      </form>
    </FormContainer>
  );
}

export { Form };
