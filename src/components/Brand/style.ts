import styled from 'styled-components';

interface IBrandProps {
  mw?: number;
  height?: string;
  width?: number;
}

export const BrandContainer = styled.a<IBrandProps>`
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /*padding: 0 1rem;*/

  & img {
    height: auto;
    max-width: 100%;
    width: ${porps => porps.width ? porps.width : 100}%;
  }

  & h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
  }
`;
