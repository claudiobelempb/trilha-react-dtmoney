import styled from 'styled-components'

interface ITableContainerProps {
  tagcolor?: string
}

export const TableContainer = styled.table<ITableContainerProps>`
  width: 100%;
  border-spacing: 0 0.5rem;
  border-collapse: collapse;
  /* 
  padding: 1rem;
  border-collapse: collapse;
  margin: 0 0 2em 0;
  background-color: beige; 
  text-align: left;
  */

  & a {
    text-decoration: none;
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.gray};
  }

  & thead {
    padding: 8px 0px 8px 0px;
    background-color: ${(props) => props.theme.colors.light};

    & tr {
      /* border: 1px solid #000; */
      text-align: left;
      /*padding: 0.5em;*/
      & th {
        /* border: 1px solid #000; */
        padding: 0 1rem;
        height: 2.5rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: ${(props) => props.theme.colors.gray};
      }
    }
  }

  & tbody {
    padding: 8px 0px 8px 0px;
    background-color: #fff;

    & tr {
      border-bottom: 1px solid #ccc;
      border-radius: 0.25rem;
      & td {
        /* border: 1px solid #000; */
        padding: 0 1rem;
        height: 2.5rem;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.gray};

        &:first-child {
          color: ${(props) => props.theme.colors.dark};
        }

        &.deposit {
          color: ${(props) => props.theme.colors.green};
        }

        &.withdraw {
          color: ${(props) => props.theme.colors.red};
        }
      }

      /* Pega as td de uma em uma */

      /* .table-default tbody tr:nth-child(1) td {
            background: red;
        } */

      /* Pega todas td impar */
      /* .table-default tbody tr:nth-child(odd) td {
            background: red;
        } */

      /* Pega todas td pares 
    & td:nth-child(even) {
      background: #eee;
    }
    

      & td:first-child {
        border-top: 2px solid #666;
      }

      & td:last-child {
        border-bottom: 2px solid #666;
      }
      */
    }
  }

  & tfoot {
    padding: 8px 0px 8px 0px;
    background-color: #ccc;
    & tr {
      & td {
        /* border: 1px solid #000; */

        padding: 0 1rem;
        height: 2.5rem;
      }
    }
  }
`;
