import React from 'react';

import { 
  InputSelectContainer, 
  InputSelectItem,
} from './style';

interface IInputSelectProps {
  options: {
    value: string | number,
    label: string | number,
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

export const InputSelect: React.FC<IInputSelectProps> = ({ options, onChange, defaultValue }) => {
  return (
    <InputSelectContainer flexDirection={'column'}>
      <InputSelectItem onChange={onChange} defaultValue={defaultValue}>
        {
          options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </InputSelectItem>
    </InputSelectContainer>
  );
}
