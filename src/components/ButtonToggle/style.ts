import styled from 'styled-components';
import Switch, { ReactSwitchProps } from "react-switch";

interface IButtonProps {
  bgColor?: string;
  tagColor?: string;
  isBgColor?: boolean;
  width?: string;
  fontSize?: string;
}

export const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // width: ${props => props.width ? props.width : '1rem'};
  border-radius: 5px;
  background: ${props => props.bgColor ? props.theme.colors.warning : 'none'};
  /* margin-top: 20px; */
  color: ${props => props.theme.colors.white};


  /*&::after {
    content: '';
    display: block;
    width: 60px;
    height: 8px;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.tagColor ? props.tagColor : props.theme.colors.info};
  }*/

  & > span {
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    font-weight: bold;
    transition: opacity .3s;
    padding: 0.50rem;

    &:hover{
      opacity: .7;
    }
  }
`;

export const ButtonTitle = styled.span<IButtonProps>`
  font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
  font-weight: bold;
  transition: opacity .3s;
  padding: 0.50rem;

  &:hover{
    opacity: .7;
  }
`;

export const ToggleSwitch = styled(Switch).attrs<ReactSwitchProps>(
  ({theme}) => ({
    onColor: theme.colors.warning,
    offColor: theme.colors.danger,
  }))<ReactSwitchProps>`

`;