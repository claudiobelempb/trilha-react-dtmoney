import React from "react";
import Modal from "react-modal";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global';
import dark from './assets/style/themes/dark';
// import light from './assets/style/themes/light';

import { Routes } from './routes';

Modal.setAppElement("#root");

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export { App };

