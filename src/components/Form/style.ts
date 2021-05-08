import styled, { css } from 'styled-components';
interface IFormProps {
  isbg?: boolean;
  bgcolor?: string;
}

export const FormContainer = styled.div<IFormProps>`
  width: 100%;
  /* height: 350px; */
  ${props => props.isbg && css<IFormProps>`
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.white};
  `}
  border-radius: 5px;
  padding: 10px;

  & h2 {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.dark};
  }
`;