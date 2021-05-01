import styled from "styled-components";

interface ILinkProps {
  color?: string;
}

export const LinkContainer = styled.a<ILinkProps>`
  display: flex;
  align-items: center;
  color: ${props => props.color ? props.color : props.theme.colors.warning};
  text-decoration: none;
  font-size: 1.3rem;

  transition: opacity .3s;
  &:hover {
    opacity: 0.7;
  }

  & > svg {
    margin-right: 0.30rem;
  }
`;