import styled from 'styled-components';

interface ICardListContainerProps {
  tagcolor?: string;
}

export const CardListContainer = styled.li<ICardListContainerProps>`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 17px;
  background-color: ${props => props.theme.colors.dark_light};
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }

  &::before {
    display: block;
    content: '';
    width: 14px;
    height: 31px;
    background-color: ${props => props.tagcolor || "#000"};
    position: absolute;
    left: 0;
    top: 15px;
  }   

  & span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
    margin-right: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  & small {
    font-weight: 100;
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
  }

`;

