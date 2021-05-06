import React from "react";
import { BoxContainer } from "../BoxContainer";
import { CardListContainer } from "./style";

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
  amount,
}: ICardListProps) => {
  return (
    <>
      <CardListContainer tagcolor={tagcolor}>
        <BoxContainer aitems={"flex-start"}>
          <span>{title}</span>
          <small>{subtitle}</small>
        </BoxContainer>
        <BoxContainer aitems={"flex-end"}>
          <span>{amount}</span>
        </BoxContainer>
      </CardListContainer>
    </>
  );
};
