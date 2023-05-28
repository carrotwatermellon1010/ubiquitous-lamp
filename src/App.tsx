import React, { FunctionComponent } from "react";
import { motion, Variants } from "framer-motion";

import PageBodyStyled from "./styles/pagesStyle";
import NavBar from "./components/nav";
import FAQs from "./components/faq";
import ContactForm from "./components/forms/contact";
import Footer from "./components/footer";
import HeroCards from "./components/home";

const HomePage: FunctionComponent = () => {
  const marqueeVariants: Variants = {
    animate: {
      x: -(window.innerWidth * 2),
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "infinity",
          duration: window.innerWidth > 800 ? 25 : 10,
          ease: "linear",
        },
      },
    },
  };
  return (
    <PageBodyStyled>
      <div className="hero-wrap">
        <NavBar />
        <div className="hero">
          <h1>
            Connecting
            <br /> WEB3
          </h1>
          <p>
            Simplify blockchain management with our platform. Streamline wallet
            validation, overcome challenges, and unlock new possibilities for
            your digital assets. Join us on this transformable journey
          </p>
          <h5>Revolutionize Your Blockchain Experience</h5>
        </div>
      </div>
      <div className="banner">
        <motion.h1 variants={marqueeVariants} animate="animate">
          <span> ETH $1,620.09 (+5.82%)</span>
          <span> BTC $20,774.80 (+2.81%)</span>
          <span>LTC $67.75 (+9.52%) </span>
          <span> DOT $6.78 (+5.62%) </span>
          <span> DOGE $0.12 (+0.13%) </span>
          <span> GAL $2.39 (-6.86%)</span>
          <span> TRX $0.06329000 (+2.30%)</span>
          <span> ETH $1,620.09 (+5.82%)</span>
          <span> GAL $2.39 (-6.86%)</span>
          <span> TRX $0.06329000 (+2.30%)</span>
          <span> ETH $1,620.09 (+5.82%)</span>
        </motion.h1>
      </div>
      <HeroCards />
      <FAQs />
      <ContactForm />
      <Footer />
    </PageBodyStyled>
  );
};

export default HomePage;
