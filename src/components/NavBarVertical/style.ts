import styled from 'styled-components';

export const NavBarVerticalContainer = styled.nav`
  margin-top: 3rem;
  padding: 0.8rem 0 0 0;
  width: 100%;
  min-width: 100%;
  
  & > ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    list-style: none;

    & > li {
    padding: 0.30rem 1rem;
  }

  & img {
    height: 50px;
    width: 50px;
  }

}`;
