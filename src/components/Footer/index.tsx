import React from 'react';
import { 
  FooterContainer
} from './style';

interface IFooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = ({ children }) => {
  return (
    <FooterContainer>
        {children}
    </FooterContainer>
  );
}

export { Footer };