import React from "react";
import { TableContainer } from "./style";

interface ITableProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;

  ths: {
    key: string | number;
    title: string | number;
  }[];

  tds: {
    key: string | number;
    value: string | number;
  }[];
}

export const Table: React.FC<ITableProps> = ({
  title,
  subtitle,
  tagcolor,
  amount,
  ths,
  tds,
}: ITableProps) => {
  return (
    <>
      <TableContainer tagcolor={tagcolor}>
        <thead>
          {ths.map((th) => (
            <tr>
              <th key={th.key}>{th.title}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {tds.map((th) => (
            <tr>
              <td key={th.key}>{th.value}</td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
        <tr>
          <td>Título</td>
          <td>Preço</td>
          <td>Categoria</td>
          <td>Data</td>
          <td>Ações</td>
        </tr>
      </tfoot> */}
      </TableContainer>
    </>
  );
};
