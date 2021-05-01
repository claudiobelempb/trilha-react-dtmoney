import React, {useMemo} from "react"

import { Grid } from "./style";

import emojis from "../../utils/emojis";
import { ButtonTogle } from '../../components/ButtonToggle';

import { Brand } from '../../components/Brand';
import { NavBarVertical } from '../../components/NavBarVertical';
import { Aside } from "../../components/Aside"
import { Header } from '../../components/Header';
import { Main }from "../../components/Main";

interface ILayoutDashBoardProps {
  children?: React.ReactNode;
}

const LayoutDashBoard: React.FC<ILayoutDashBoardProps> = ({ children }: ILayoutDashBoardProps) => {

  const emoji = useMemo(() => {

    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];

  }, []);

  return(
    <Grid>
      <Aside>
        <Brand mw={30} alt={"My Logo"} title={"My Wallet"}/> 
        <NavBarVertical />
      </Aside>
      <Header jcontent={"space-between"}>
        <ButtonTogle/>
        <div>
          <h3>Olá, {emoji}</h3> 
          <span>Cláudio Cardoso</span>
        </div>
      </Header>
      <Main>
        { children }
      </Main>
    </Grid>
  )
}

export { LayoutDashBoard };