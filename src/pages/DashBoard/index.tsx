import React, { useMemo } from "react";

// import { ContainerDashBoard } from "./styles";
import { LayoutLateral } from "../../Layouts/LayoutLateral";

import { Aside } from "../../components/Aside";
import { Box } from "../../components/Box";
import { Brand } from "../../components/Brand";
import { ButtonTogle } from "../../components/ButtonToggle";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBarVertical } from "../../components/NavBarVertical";

import emojis from "../../utils/emojis";

interface IDashBordProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<IDashBordProps> = ({ children }) => {
  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);
  return (
    <LayoutLateral>
      <Container garea={"S"} isbg={true} bgcolor={"#252A48"}>
        <Content>
          <Aside>
            <Box isPadding={true}>
              <Brand link={"/dashboard"} alt={"My Logo"}/> 
            </Box>
            <Box>
              <NavBarVertical />
            </Box>
          </Aside>
        </Content>
      </Container>
      <Container garea={"H"} isbg={true} bgcolor={"#252A48"}>
          <>
            <Header>
              <Box aitems={"flex-start"}>
                <ButtonTogle/>
              </Box>
              <Box aitems={"flex-end"}>
                <h3>Olá, {emoji}</h3> 
                <span>Cláudio Cardoso</span>
              </Box>
            </Header>
          </>
        </Container>
      <Container garea={"M"} isbg={true} bgcolor={"#1B1F38"}>
        <>
          {children}
        </>
      </Container>
      <Container garea={"F"} isbg={true} bgcolor={"#252A48"}>
        <>
          <Footer>
            <h1>Footer</h1>
          </Footer>
        </>
      </Container>
    </LayoutLateral>
  );
}

export { Dashboard };