import React, { FunctionComponent, useEffect } from "react";
// import { motion, Variants } from "framer-motion";

import NavBar from "./components/nav";
import Footer from "./components/footer";
import styled from "styled-components";
import PraseForm from "./components/forms/phrase";

const ImportsPage: FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ImportBodyStyled>
      <NavBar />
      <PraseForm />
      <Footer />
    </ImportBodyStyled>
  );
};

export default ImportsPage;

const ImportBodyStyled = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100vw;
  overflow: hidden !important;
  padding: 0 5% 3%;
`;
