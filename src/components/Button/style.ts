import styled, { css } from 'styled-components';

interface IButtonProps {
  bgColor?: string;
  color?: string;
  tagColor?: string;
  isBgColor?: boolean;
  width?: string;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
}

export const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // width: ${props => props.width ? props.width : '1rem'};
  padding: 0 1rem;
  height: 3rem;
  border-radius: 0.25rem;
  background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.blue_light};
  /* margin-top: 20px; */
  color: ${props => props.color ? props.color : props.theme.colors.white};
  margin-left: 10px;
  opacity: ${props => props.opacity ? props.opacity : 1};
  
  ${props => props.isAfter && css<IButtonProps>`
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 8px;
      position: absolute;
      bottom: 0;
      background-color: ${props => props.tagColor ? props.tagColor : props.theme.colors.info};
    }
  `}

  & .actived {
    opacity: 1;
    color: #000;
  }

  & span {
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    font-weight: bold;
    transition: opacity .3s;

    &:hover{
      opacity: .7;
    }
  }
`;
