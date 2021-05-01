import React from 'react';
import { Box } from '../Box';
import { CardListContainer } from './style';

interface ICardListProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;
}

export const CardList: React.FC<ICardListProps> = ({
  title,
  subtitle,
  tagcolor,
  amount
}: ICardListProps) => {
  return (
    <>
      <CardListContainer tagcolor={tagcolor}>
        <Box aitems={"flex-start"}>
          <span>{title}</span>
          <small>{subtitle}</small>
        </Box>
        <Box aitems={"flex-end"}>
          <span>{amount}</span>
        </Box>
      </CardListContainer>
    </>
  );
}
