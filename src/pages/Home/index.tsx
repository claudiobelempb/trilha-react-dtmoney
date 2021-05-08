import React, { useEffect, useState } from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { BoxContainer } from "../../components/BoxContainer";
import { Section } from "../../components/Section";
import { Table } from "../../components/Table";
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
import { InputCheckBox } from "../../components/InputCheckBox";

interface IHomeProps {
  children?: React.ReactNode;
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
}
const Home: React.FC<IHomeProps> = ({
  children,
  garea,
  maxcolumn,
  mincolumn,
}) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <LayoutSantoGraal>
      <Header garea={"H"} isbg={true}>
        <BoxContainer>
          <BoxContent aitems={"flex-start"} isp={true}>
            <Brand link={"/"} alt={"My Logo"} />
          </BoxContent>
          <BoxContent aitems={"flex-end"} isp={true}>
            <Button
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
            <Table />
          </BoxContainer>
        </Section>

        <ModalDefault
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <Form title={"Cadastrar Transação"} action="/">
            <BoxContainer>
              <BoxContent>
                <Input type={"text"} placeholder={"titulo"} />
                <Input type={"number"} placeholder={"Valor"} />
              </BoxContent>
            </BoxContainer>
            <BoxContainer>
              <BoxContent>
                <Button
                  title={"Entrada: "}
                  name={"entrada"}
                  id={"income"}
                  isImg={true}
                  src={income}
                  alt={"Entrada"}
                />
              </BoxContent>
              <BoxContent>
                <Button
                  title={"Saída: "}
                  name={"saida"}
                  id={"outcome"}
                  isImg={true}
                  src={outcome}
                  alt={"Saída"}
                />
              </BoxContent>
            </BoxContainer>
            <BoxContainer>
              <Input type={"text"} placeholder={"Categoria"} />
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
