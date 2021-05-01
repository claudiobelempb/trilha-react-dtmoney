import React from 'react';

import { AsideContainer } from "./style";

interface IAsideProps {
  children?: React.ReactNode;
  garea?: string;
  bgcolor?: string;
}

export const Aside: React.FC<IAsideProps> = ({children, garea, bgcolor }) => {
  return (
    <AsideContainer garea={garea} bgcolor={bgcolor}>
      { children }
    </AsideContainer>
  );
}
