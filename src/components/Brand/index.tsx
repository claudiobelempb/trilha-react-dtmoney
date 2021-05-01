import React from 'react';
import { BrandContainer } from './style';

import logoBrand from '../../assets/images/logo.svg';

interface IBrand {
  title?: string;
  alt?: string;
  mw?: number;
  link?: string;
}

const Brand: React.FC<IBrand> = ({ title, alt, mw, link }: IBrand) => {
  return (
    <BrandContainer mw={mw} href={link}>
      <img src={logoBrand} alt={alt} />
      <h1>{title}</h1>
    </BrandContainer>
  );
}

export { Brand };
