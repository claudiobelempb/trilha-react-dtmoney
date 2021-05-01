import styled from  'styled-components';

export const MainContainer = styled.div`
  grid-area: CT;
  background-color: ${props => props.theme.colors.dark};
  padding: 0 20px;
  height: calc(100vh - 70px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.dark_light};
    border-radius:10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.dark_light};
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainForm = styled.form`
  
`;

export const MainSelect = styled.select`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 36px;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 8px;
    background-color: ${props => props.theme.colors.info};
  }
`;

export const MainBorder = styled.span`
  
`;