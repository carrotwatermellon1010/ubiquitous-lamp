import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import HomePage from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./utils/theme";
import WalletsPage from "./Wallets";
import ImportsPage from "./Phrase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wallets" element={<WalletsPage />} />
            <Route path="/import" element={<ImportsPage />} />
          </Routes>
        </ChakraProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
