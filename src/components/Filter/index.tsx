import React from 'react';

import { FilterContainer } from './style';

interface IFilterProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export const Filter: React.FC<IFilterProps> = ({children}) => {
  return (
    <FilterContainer>
     {children}
    </FilterContainer>
  );
}
