import React, { FunctionComponent, useEffect } from "react";
// import { motion, Variants } from "framer-motion";

import NavBar from "./components/nav";
import Footer from "./components/footer";
import Card from "./components/card";
import styled from "styled-components";
import tokenData from "./utils/tokenData";

const WalletsPage: FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <WalletBodyStyled>
      <div className="hero-wrap">
        <NavBar />
        <div className="hero">
          <h1>
            <br /> Wallets
          </h1>
          <p>
            Multiple iOS and Android wallets support the DeFi Protocol. Simply
            select your wallet to start securely using a dApp. Interaction
            between mobile apps and mobile browsers are supported via mobile
            deep linking.
          </p>
        </div>
      </div>
      <div className="render-cards">
        {tokenData.map(({ img, label, tags, value }) => (
          <Card title={label} img={img} tags={tags} key="value" value={value} />
        ))}
      </div>
      <Footer />
    </WalletBodyStyled>
  );
};

export default WalletsPage;

const WalletBodyStyled = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100vw;
  overflow: hidden !important;

  .hero-wrap {
    padding: 0 5% 3%;
    width: 100vw;
    background-image: url("https://plus.unsplash.com/premium_photo-1669751999588-3459ce85921d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"),
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    background-blend-mode: overlay;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .banner {
    width: 100vw;
    height: 60px;
    background: linear-gradient(to right, #f7931a, #485fe6);
    display: flex;
    align-items: center;
    padding: 0 5% 0;

    h1 {
      width: 100%;
      margin: 0;
      font-size: 1.4rem;
      white-space: nowrap;
      span {
        color: ${({ theme }) => theme.colors.white};
        margin-right: 6rem;
      }
    }
  }

  .hero {
    width: 100%;
    text-align: center;
    padding: 5% 0;

    p {
      margin: 1.5rem auto 2.5rem;
      width: 100%;
      max-width: 450px;
    }

    h5 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .render-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    grid-gap: 1.5rem;
    grid-auto-flow: dense;
    padding: 3% 5%;
    column-count: 2;
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    }
  }
`;
