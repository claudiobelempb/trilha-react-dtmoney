import React, { useEffect, useState, FormEvent } from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { BoxContainer } from "../../components/BoxContainer";
import { Section } from "../../components/Section";
import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import total from "../../assets/images/total.svg";
import { Footer } from "../../components/Footer";

import { BoxContent } from "../../components/BoxContent";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ModalDefault } from "../../components/ModalDefault";
import { formatDateRo, formatValueRo } from "../../utils/utils";

interface IHomeProps {
  children?: React.ReactNode;
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
}

interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

const Home: React.FC<IHomeProps> = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [typeBtn, setTypeBtn] = useState("deposit");
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      typeBtn,
      title,
      value,
      category,
    };

    api.post("/transactions", data);
  }

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, [setTransactions]);

  return (
    <LayoutSantoGraal>
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
                <img src={income} alt={"income"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong>R$ 17.400,00</strong>
                <span className={"sub-title"}>
                  Última entrada dia 13 de abril
                </span>
              </BoxContent>
            </BoxContent>
            <BoxContent isbg={true} isPadding={true}>
              <BoxContent fdirection={"row"} jcontent={"space-between"}>
                <h3 className={"title"}>Saída</h3>
                <img src={outcome} alt={"outcome"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong>R$ 17.400,00</strong>
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
                <h3 className={"title"}>Entrada</h3>
                <img src={total} alt={"total"} />
              </BoxContent>
              <BoxContent aitems={"flex-start"}>
                <strong>R$ 17.400,00</strong>
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
                      <td className={transaction.type === "deposit" ? "deposit" : "withdraw"}>
                        {formatValueRo(transaction.amount)}
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
                  value={value}
                  onChange={(event) => setValue(Number(event.target.value))}
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
                  src={income}
                  alt={"Entrada"}
                  onClick={() => {
                    setTypeBtn("deposit");
                  }}
                  isActive={typeBtn === "deposit"}
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
                  src={outcome}
                  alt={"Saída"}
                  onClick={() => {
                    setTypeBtn("withdraw");
                  }}
                  isActive={typeBtn === "withdraw"}
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
