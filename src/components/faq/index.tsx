import React, { FC } from "react";
import styled from "styled-components";
// @ts-ignore-next-line
import Faq from "react-faq-component";
import faqData, { faqStyles, faqConfig } from "../../utils/faqData";

const FAQs: FC = () => (
  <FAQsStyled id="faq">
    <Faq data={faqData} styles={faqStyles} config={faqConfig} />
  </FAQsStyled>
);

export default FAQs;

const FAQsStyled = styled.section`
  width: 75%;
  margin: auto;
  padding: 3rem 0;

  .faq-title {
    display: flex;
    align-items: center;
    justify-content: center !important;
    border: none !important;
    padding-bottom: 2rem !important;
    text-transform: uppercase;
  }

  .faq-row {
    margin-bottom: 1rem;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
  }

  .row-title-text {
    padding-left: 1rem;
    font-weight: ${({ theme }) => theme.fonts.weights.w600};
  }

  @media screen and (max-width: 789px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
