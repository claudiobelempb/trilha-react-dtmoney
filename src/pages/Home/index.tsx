import React, { useState, FormEvent } from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { BoxContainer } from "../../components/BoxContainer";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { BoxContent } from "../../components/BoxContent";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ModalDefault } from "../../components/ModalDefault";
import { formatDateRo, formatValueRo } from "../../utils/utils";
import ImgIncome from "../../assets/images/income.svg";
import ImgOutcome from "../../assets/images/outcome.svg";
import ImgTotal from "../../assets/images/total.svg";

import { useTransactions } from "../../hooks/useTransactions";

interface IHomeProps {
  children?: React.ReactNode;
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
  onRequestClose(): Promise<void>;
}

const Home: React.FC<IHomeProps> = ({ children, onRequestClose }) => {
  const { transactions, createTransaction } = useTransactions();
  console.log(transactions);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    handleCloseNewTransactionModal();
  }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <LayoutSantoGraal>
      {/* <HomeContext.Consumer>
        {(data) => {
          console.log(data);
          return <p></p>;
        }}
      </HomeContext.Consumer> */}
      <Header garea={"H"} isbg={true}>
        <BoxContainer>
          <BoxContent aitems={"flex-start"} isp={true}>
            <Brand link={"/"} alt={"My Logo"} />
          </BoxContent>
          <BoxContent aitems={"flex-end"} isp={true}>
            <Button
              MaxWidth={160}
              isBgColor={true}
              bgColor={"#33CC95"}
              color={"#FFF"}
              title={"Nova transação"}
              onClick={handleOpenNewTransactionModal}
            />
          </BoxContent>
        </BoxContainer>
      </Header>
      <Main garea={"M"}>
        <h1 className={"font-zero"}>Main</h1>
        <Section>
          <h2 className={"font-zero"}>Session</h2>
          <BoxContainer isp={true} isPosition={true}>
            <BoxContent isbg={true} isPadding={true}>
              <BoxContent fdirection={"row"} jcontent={"space-between"}>
                <h3 className={"title"}>Entrada</h3>
                <img src={ImgIncome} alt={"income"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong>{formatValueRo(summary.deposits)}</strong>
                <span className={"sub-title"}>
                  Última entrada dia 13 de abril
                </span>
              </BoxContent>
            </BoxContent>
            <BoxContent isbg={true} isPadding={true}>
              <BoxContent fdirection={"row"} jcontent={"space-between"}>
                <h3 className={"title"}>Saída</h3>
                <img src={ImgOutcome} alt={"outcome"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong className={"withdraw"}>
                  -{formatValueRo(summary.withdraws)}
                </strong>
                <span className={"sub-title"}>
                  Última entrada dia 13 de abril
                </span>
              </BoxContent>
            </BoxContent>
            <BoxContent
              isbg={true}
              bgcolor={"#33CC95"}
              isColor={true}
              isPadding={true}
            >
              <BoxContent fdirection={"row"} jcontent={"space-between"}>
                <h3 className={"title"}>Total</h3>
                <img src={ImgTotal} alt={"total"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong>{formatValueRo(summary.total)}</strong>
                <span className={"sub-title"}>
                  Última entrada dia 13 de abril
                </span>
              </BoxContent>
            </BoxContent>
          </BoxContainer>
        </Section>

        <Section mtop={5}>
          <h2>Section Table</h2>
          <BoxContainer>
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => {
                  return (
                    <tr key={transaction.id}>
                      <td>{transaction.title}</td>
                      <td
                        className={
                          transaction.type === "deposit"
                            ? "deposit"
                            : "withdraw"
                        }
                      >
                        {transaction.type === "deposit"
                          ? formatValueRo(transaction.amount)
                          : `-${formatValueRo(transaction.amount)}`}
                      </td>
                      <td>{transaction.category}</td>
                      <td>{formatDateRo(transaction.createAt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </BoxContainer>
        </Section>

        <ModalDefault
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <Form
            onSubmit={handleCreateNewTransaction}
            title={"Cadastrar Transação"}
          >
            <BoxContainer>
              <BoxContent>
                <Input
                  type={"text"}
                  placeholder={"Titulo"}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Input
                  type={"number"}
                  placeholder={"Valor"}
                  value={amount}
                  onChange={(event) => setAmount(Number(event.target.value))}
                />
              </BoxContent>
            </BoxContainer>
            <BoxContainer>
              <BoxContent>
                <Button
                  type={"button"}
                  title={"Entrada: "}
                  name={"entrada"}
                  id={"income"}
                  isImg={true}
                  src={ImgIncome}
                  alt={"Entrada"}
                  onClick={() => {
                    setType("deposit");
                  }}
                  isActive={type === "deposit"}
                  isBgColor={false}
                  bgColor={"#33CC95"}
                />
              </BoxContent>
              <BoxContent>
                <Button
                  // className={typeBtn === "deposit" ? "active" : ''}
                  type={"button"}
                  title={"Saída: "}
                  name={"saida"}
                  id={"outcome"}
                  isImg={true}
                  src={ImgOutcome}
                  alt={"Saída"}
                  onClick={() => {
                    setType("withdraw");
                  }}
                  isActive={type === "withdraw"}
                  isBgColor={false}
                  bgColor={"#E52E4D"}
                />
              </BoxContent>
            </BoxContainer>
            <BoxContainer>
              <Input
                type={"text"}
                placeholder={"Categoria"}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </BoxContainer>
            <BoxContainer>
              <Button
                type={"submit"}
                isBgColor={true}
                bgColor={"#33CC95"}
                color={"#FFF"}
                title={"Cadastrar"}
              />
            </BoxContainer>
          </Form>
        </ModalDefault>
      </Main>
      <Footer garea={"F"}>
        <h1>FOOTER</h1>
      </Footer>
    </LayoutSantoGraal>
  );
};

export { Home };
