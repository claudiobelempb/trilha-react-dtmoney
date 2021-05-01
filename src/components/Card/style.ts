import styled from 'styled-components';

interface ICardProps {
  bgColor?: string;
  color?: string;
}

export const CardContainer = styled.article<ICardProps>`
  width:100%;
  height: auto;
  min-height: 136px;
  background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.white };
  color: ${props => props.color ? props.color : props.theme.colors.black};
  margin-top: 20px;
  padding: 20px 32px;
  margin-right: 10px;
  position: relative;
  right: 0;
  left: 0;
  top: -97px;
  border-radius: 0.25rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardValue = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
`;

export const CardIcon = styled.h1``;

export const CardTitle = styled.h1<ICardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
`;
