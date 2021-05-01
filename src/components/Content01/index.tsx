import React from 'react';
import { MainContainer } from './style';

export const Content: React.FC = ({children}) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
}
