import styled, { css } from "styled-components";
import { darken } from "polished";

interface IButtonProps {
  isBgColor?: boolean;
  bgColor?: string;
  color?: string;
  tagColor?: string;
  width?: string;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
  isImg?: boolean;
}

export const ButtonContainer = styled.button<IButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // width: ${(props) => (props.width ? props.width : "1rem")};
  padding: 0 1rem;
  height: 3rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.light};
  /* margin-top: 20px; */
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.dark_light};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};

  ${(props) =>
    props.isBgColor &&
    css<IButtonProps>`
      background-color: ${(props) =>
        props.bgColor ? props.bgColor : props.theme.colors.blue_light};
    `};

  ${(props) =>
    props.isAfter &&
    css<IButtonProps>`
      &::after {
        content: "";
        display: block;
        width: 60px;
        height: 8px;
        position: absolute;
        bottom: 0;
        background-color: ${(props) =>
          props.tagColor ? props.tagColor : props.theme.colors.info};
      }
    `}

  & .actived {
    opacity: 1;
    color: #000;
  }

  ${(props) =>
    props.isImg &&
    css<IButtonProps>`
      & img {
        margin-right: 1rem;
      }
    `};

  & span {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
    font-weight: normal;
    transition: opacity 0.3s;
    transition: border-color 0.2s;

    &:hover {
      opacity: 0.7;
      border-color: ${darken(0.1, "#D7D7D7")};
    }
  }
`;
