import styled from  'styled-components';

interface IFooterContainer {
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

export const FooterContainer = styled.footer<IFooterContainer>`
  grid-area: ${(props) => (props.garea ? props.garea : "")};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.bgcolor ? props.theme.colors.blue : props.bgcolor};
  padding: 0 1rem;
`;


