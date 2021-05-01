import styled, { css } from "styled-components";

interface IBoxProps {
  fdirection?: string;
  garea?:string;
  jcontent?: string;
  aitems?: string;
  isbg?: boolean;
  isp?: boolean;
  isml?: boolean;
  bgcolor?: string;
  isColor?: boolean;
  color?: string;
  bbottom?: string;
  width?: string;
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

export const BoxContainer = styled.div<IBoxProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  flex-direction: ${props => props.fdirection ? props.fdirection : "column"};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  width: ${props => props.width ? props.width : "100"}%;
  border-radius: 0.3rem;

  & .title {
    font-size: 0.9rem;
  }

  & .sub-title {
    font-size: 0.7rem;
  }

  ${props => props.isPaddingTB && css<IBoxProps>`
    padding-top: ${props => props.pt ? props.pt : 1}rem;
    padding-bottom: ${props => props.pb ? props.pb : 1}rem;
  `};

  ${props => props.isPaddingRL && css<IBoxProps>`
    padding-right: ${props => props.pr ? props.pr : 1}rem;
    padding-left: ${props => props.pl ? props.pl : 1}rem;
  `};

  ${props => props.isColor && css<IBoxProps>`
    color: ${props => props.color ? props.color : props.theme.colors.white};
  `}

  ${props => props.isbg && css<IBoxProps>`
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.white};
  `}
  ${props => props.isp && css<IBoxProps>`
    padding: ${props => props.padding ? props.padding : 0.30}rem 1rem;
  `}

  ${props => props.isml && css<IBoxProps>`
    margin-left: ${props => props.ml ? props.ml : 1}rem;
  `}
  ${props => props.isPosition && css<IBoxProps>`
    position: absolute;
    top: -70px;
  `};

  @media (max-width: 500px) {
    & {
      margin-left: 0;
      margin-top: 1rem;

      ${props => props.isp && css<IBoxProps>`
        padding: ${props => props.padding ? props.padding : 0.30}rem 1rem;
      `}

      ${props => props.isml && css<IBoxProps>`
        margin-left: ${props => props.ml ? props.ml : 0}rem;
      `}

      ${props => props.isPosition && css<IBoxProps>`
        position: initial;
        top: 0;
      `};
    }

  }
  @media (max-width: 700px) {
    & {
      margin-left: 0;
      margin-top: 1rem;

      ${props => props.isp && css<IBoxProps>`
        padding: ${props => props.padding ? props.padding : 0.30}rem 1rem;
      `}

      ${props => props.isml && css<IBoxProps>`
        margin-left: ${props => props.ml ? props.ml : 0}rem;
      `}

      ${props => props.isPosition && css<IBoxProps>`
        position: initial;
        top: 0;
      `};
    }

  }
`;

export const BoxContent = styled.div<IBoxProps>`
  grid-area: ${props => props.garea ? props.garea : ""};
  display: flex;
  flex-direction: ${props => props.fdirection ? props.fdirection : "column"};
  justify-content: ${props => props.jcontent ? props.jcontent : "center"};
  align-items: ${props => props.aitems ? props.aitems : "center"};
  width: ${props => props.width ? props.width : "100"}%;
  /*color: ${props => props.theme.colors.white};*/
  border-radius: 0.3rem;
  ${props => props.isbg && css<IBoxProps>`
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.white};
  `}
  ${props => props.isp && css<IBoxProps>`
    padding: ${props => props.padding ? props.padding : 0.30}rem 1rem;
  `}

  ${props => props.isml && css<IBoxProps>`
    margin-left: ${props => props.ml ? props.ml : 1}rem;
  `}
  ${props => props.isPosition && css<IBoxProps>`
    position: absolute;
    top: -70px;
  `};

  @media (max-width: 700px) {
      & {
        background-color: blue;
        margin-left: 0;
        margin-top: 1rem;

        ${props => props.isp && css<IBoxProps>`
          padding: ${props => props.padding ? props.padding : 0.30}rem 1rem;
        `}

        ${props => props.isml && css<IBoxProps>`
          margin-left: ${props => props.ml ? props.ml : 1}rem;
        `}

        ${props => props.isPosition && css<IBoxProps>`
          position: initial;
          top: 0;
        `};
      }

  }
`;