import styled from 'styled-components';

interface IAsideProps {
  flexDirection?: string;
  garea?:string;
  bgcolor?: string;
}

export const AsideContainer = styled.aside<IAsideProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.dark_light};
  color: ${props => props.theme.colors.white};
`;