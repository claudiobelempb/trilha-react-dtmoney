import styled, { css } from "styled-components";

interface IMainProps {
  fdirection?: string;
  garea?: string;
  jcontent?: string;
  aitems?: string;
  isbg?: boolean;
  isp?: boolean;
  isml?: boolean;
  bgcolor?: string;
  isColor?: boolean;
  color?: string;
  bbottom?: string;
  width?: number;
  isPaddingTB?: boolean;
  isPaddingRL?: boolean;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  padding?: number;
  ml?: number;
  isPosition?: boolean;
}

export const MainContainer = styled.main<IMainProps>`
  position: relative;
  grid-area: ${(props) => (props.garea ? props.garea : "")};
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

  padding: 0 1rem;

  ${(props) =>
    props.isPaddingTB &&
    css<IMainProps>`
      padding-top: ${(props) => (props.pt ? props.pt : 1)}rem;
      padding-bottom: ${(props) => (props.pb ? props.pb : 1)}rem;
    `};

  ${(props) =>
    props.isPaddingRL &&
    css<IMainProps>`
      padding-right: ${(props) => (props.pr ? props.pr : 1)}rem;
      padding-left: ${(props) => (props.pl ? props.pl : 1)}rem;
    `};

  ${(props) =>
    props.isPadding &&
    css<IMainProps>`
      padding-top: ${(props) => (props.pt ? props.pt : 1)}rem;
      padding-bottom: ${(props) => (props.pb ? props.pb : 1)}rem;
      padding-left: ${(props) => (props.pl ? props.pl : 1)}rem;
      padding-right: ${(props) => (props.pr ? props.pr : 1)}rem;
    `};

  ${(props) =>
    props.isColor &&
    css<IMainProps>`
      color: ${(props) =>
        props.color ? props.color : props.theme.colors.white};
    `}

  ${(props) =>
    props.isbg &&
    css<IMainProps>`
      background-color: ${(props) =>
        props.bgcolor ? props.bgcolor : props.theme.colors.white};
    `}


  ${(props) =>
    props.isml &&
    css<IMainProps>`
      margin-left: ${(props) => (props.ml ? props.ml : 1)}rem;
    `}

  ${(props) =>
    props.isPosition &&
    css<IMainProps>`
      position: absolute;
      top: -60px;
    `};
`;