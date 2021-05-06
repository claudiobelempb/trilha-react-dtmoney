import styled, { css } from  'styled-components';

interface IContentProps {
  fdirection?: string;
  jcontent?: string;
  aitems?: string;
  garea?:string;
  width?: number;
  mwidth?: string;
  height?: string;
  mheight?:string;
  bgcolor?: string;
  bgscroll?: string;
  isbr?: boolean;
  isbb?: boolean;
  isofy?: boolean;
  isPosition?: boolean;
}

export const ContentContainer = styled.div<IContentProps>`
  position: relative;
  ${props => props.isPosition && css<IContentProps>`
    position: absolute;
  `};
  grid-area: ${props => props.garea ? props.garea : ""};
  justify-content: ${props => props.jcontent ? props.jcontent : ""};
  align-items: ${props => props.aitems ? props.aitems : ""};
  flex-direction: ${props => props.fdirection ? props.fdirection : ""};
  background-color: ${props => props.bgcolor ? props.bgcolor : "transparent"};
  border-right: ${props => props.isbr ? "1px solid #FFFFFF" : "1px solid none"};
  border-bottom: ${props => props.isbb ? "1px solid #FFFFFF" : "1px solid none"};
  width: ${props => props.width ? props.width : 83}%;
  height: ${props => props.height ? props.height : ""};
  overflow-y: ${props => props.isofy ? "scroll" : ""};
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props =>  props.bgscroll ? props.bgscroll : props.theme.colors.dark_light};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props =>  props.bgscroll ? props.bgscroll : props.theme.colors.light};
  }
`;


