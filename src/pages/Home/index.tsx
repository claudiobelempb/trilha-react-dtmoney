import React from "react";

import { LayoutSantoGraal } from "../../Layouts/LayoutSantoGraal";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { Box } from "../../components/Box";
// import { InputSelect } from "../../components/InputSelect";
import { Section } from "../../components/Section";
// import { Title } from "../../components/Title";
// import { ContainerHome } from './styles';
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { Container } from "../../components/Container";
import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import total from "../../assets/images/total.svg";
import { Footer } from "../../components/Footer";

interface IHomeProps {
  children?: React.ReactNode;
  garea?: string;
  maxcolumn?: number;
  mincolumn?: number;
  
}
const Home: React.FC<IHomeProps> = ({ children, garea, maxcolumn, mincolumn }) => {

  return (
   <LayoutSantoGraal>
    <Container isbg={true} garea={"H"}>
      <Content>
        <Header height={212} aitems={"flex-start"}>
          <Box aitems={"flex-start"} isp={true}>
            <Brand link={"/"} alt={"My Logo"} />
          </Box>
          <Box aitems={"flex-end"} isp={true}>
            <Button title={"Nova transação"} />
          </Box>
        </Header>
      </Content>
    </Container>
    <Container garea={"M"}>
      <Content>
        <Section isPosition={true} isHeight={true}>
            <Box  isbg={true} isp={true}>
              <Box fdirection={"row"} jcontent={"space-between"}>
                <span className={"title"}>Entrada</span>
                <img src={income} alt={"income"}/>
              </Box>
              <Box aitems={"flex-start"} isPadding={true} pt={1} pb={1}>
                <h1>R$ 17.400,00</h1>
                <span className={"sub-title"}>Última entrada dia 13 de abril</span>
              </Box>
            </Box>
            <Box isbg={true} isml={true} isp={true}>
              <Box fdirection={"row"} jcontent={"space-between"}>
                <span className={"title"}>Saída</span>
                <img src={outcome} alt={"income"}/>
              </Box>
              <Box aitems={"flex-start"} isPadding={true} pt={1} pb={1}>
                <h1>R$ 17.400,00</h1>
                <span className={"sub-title"}>Última saída dia 03 de abril</span>
              </Box>
            </Box>
            <Box isbg={true} isml={true} isp={true} isColor={true} bgcolor={"#33CC95"}>
              <Box fdirection={"row"} jcontent={"space-between"}>
                <span className={"title"}>Total</span>
                <img src={total} alt={"income"}/>
              </Box>
              <Box aitems={"flex-start"} isPadding={true} pt={1} pb={1}>
                <h1>R$ 17.400,00</h1>
                <span className={"sub-title"}>01 à 16 de abril</span>
              </Box>
            </Box>
        </Section>
        <Section mtop={5} >
          <Box >
            <Table />
          </Box>
        </Section>
      </Content>
    </Container>
    <Container garea={"F"}>
      <Content>
        <Footer>
          <Box>
            <h1>FOOTER</h1>
          </Box>
        </Footer>
      </Content>
    </Container>
   </LayoutSantoGraal>
  );
}

export { Home };