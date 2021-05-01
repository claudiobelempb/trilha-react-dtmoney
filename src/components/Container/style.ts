import styled, { css } from 'styled-components';

interface IMainProps {
  garea?:string;
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  isbg?: boolean;
  bgcolor?:string;
  bbottom?: string;
  isPosition?: boolean;
  mtop?: number;
  ptb?: number;
  prl?: number;
  isPadding?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  padding?: number;
  margin?: number;
  isMargin?: boolean;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  isHeight?: boolean;
  height?: number | string;
  width?: number;
}

export const MainContainer = styled.div<IMainProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  flex-direction: ${props => props.fdirection ? props.fdirection : "column"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  ${props => props.isbg && css<IMainProps>`
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.blue};
  `};
  color: ${props => props.theme.colors.dark};
  width: ${props => props.height ? props.height : 100}%;
  min-width: 100%;
  ${props => props.isHeight && css<IMainProps>`
    height: ${props => props.height ? props.height : 0}vh;
  `};
  padding: ${props => props.padding ? props.ptb : props.ptb = 0}rem ${props => props.prl}rem;

  margin: ${props => props.margin ? props.margin : 0}rem;
  ${props => props.isPadding && css<IMainProps>`
    margin-top: ${props => props.pt ? props.pt : 0}rem;
    margin-bottom: ${props => props.pb ? props.pb : 0}rem;
    margin-right: ${props => props.pr ? props.pr : 0}rem;
    margin-left: ${props => props.pl ? props.pl : 0}rem;
  `};
  
  ${props => props.isPosition && css<IMainProps>`
    position: absolute;
    top: -70px;
  `};

  padding: ${props => props.padding ? props.padding : 0}rem;
  ${props => props.isPadding && css<IMainProps>`
    padding-top: ${props => props.pt ? props.pt : 0}rem;
    padding-bottom: ${props => props.pb ? props.pb : 0}rem;
    padding-right: ${props => props.pr ? props.pr : 0}rem;
    padding-left: ${props => props.pl ? props.pl : 0}rem;
  `};
`;


