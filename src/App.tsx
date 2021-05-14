import React from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/style/global";
import dark from "./assets/style/themes/dark";
// import light from './assets/style/themes/light';

import { TransactionsProvider } from "./hooks/useTransactions";

import { Routes } from "./routes";

Modal.setAppElement("#root");

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <TransactionsProvider>
        <Routes />
      </TransactionsProvider>
    </ThemeProvider>
  );
};

export { App };
