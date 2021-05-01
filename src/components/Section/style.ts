import styled, { css } from  'styled-components';

interface IContainerSection {
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
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
  isHeight?: boolean;
  height?: number | string;
  width?: number;
}

export const ContainerSection = styled.section<IContainerSection>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  background-color: ${props => props.bgcolor ? props.bgcolor : "transparent"};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  color: ${props => props.theme.colors.dark};
  width: ${props => props.width ? props.width : 100}%;
  min-width: 100%;
  padding: ${props => props.padding ? props.ptb : props.ptb = 0}rem ${props => props.prl}rem;
  margin-top: ${props => props.mtop ? props.mtop : 1}rem;


  ${props => props.isHeight && css<IContainerSection>`
    height: ${props => props.height ? props.height : "auto"};
  `};
  
  ${props => props.isPosition && css<IContainerSection>`
    position: absolute;
    top: -70px;
  `};

  ${props => props.isPadding && css<IContainerSection>`
    padding-top: ${props => props.pt ? props.pt : 0}rem;
    padding-bottom: ${props => props.pb ? props.pb : 0}rem;
    padding-right: ${props => props.pr ? props.pr : 0}rem;
    padding-left: ${props => props.pl ? props.pl : 0}rem;
  `};

  @media (max-width: 700px) {
    & {
      
      flex-direction: column;
      height: auto;
      margin-top: 0;
    }

    ${props => props.isHeight && css<IContainerSection>`
      height: ${props => props.height ? props.height : "auto"}px;
    `};

    ${props => props.isPosition && css<IContainerSection>`
      position: initial;
      top: 0px;
    `};
  }

  @media (max-width: 500px) {
    & {
      
      flex-direction: column;
      height: auto;
      margin-top: 0;
    }

    ${props => props.isHeight && css<IContainerSection>`
      height: ${props => props.height ? props.height : 0}px;
    `};

    ${props => props.isPosition && css<IContainerSection>`
      position: initial;
      top: 0px;
    `};
  }
`;


