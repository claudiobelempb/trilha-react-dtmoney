import styled from 'styled-components'

interface ITableContainerProps {
  tagcolor?: string
}

export const TableContainer = styled.table<ITableContainerProps>`
  width: 100%;
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
  }

  & thead {
    padding: 8px 0px 8px 0px;
    & tr {
      /* border: 1px solid #000; */
      text-align: left;
      /*padding: 0.5em;*/
      & th {
        /* border: 1px solid #000; */
        background-color: #ccc;
        padding: 0 1rem;
        height: 2.5rem;
      }
    }
  }

  & tbody {
    padding: 8px 0px 8px 0px;

    & tr {
      border-bottom: 1px solid #ccc;

      & td {
        /* border: 1px solid #000; */
        padding: 0 1rem;
        height: 2.5rem;
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
    & tr {
      
      & td {
        /* border: 1px solid #000; */
        background-color: #ccc;
        padding: 0 1rem;
        height: 2.5rem;
      }
    }
  }

  
`
