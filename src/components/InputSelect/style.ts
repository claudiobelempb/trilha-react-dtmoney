import styled from 'styled-components';

interface IInputSelectContainer {
  flexDirection?: string;
}

export const InputSelectContainer = styled.div<IInputSelectContainer>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin-left: 1rem;
`;

export const InputSelectItem = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border-radius: 5px;
  outline: none;
  & label {

  }

  & label > span {

  }

  & label > select {
    
  }
`;