import React, { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => (
  <FooterStyled>
    <div className="top-list">
      {/* <Link href="/"> */}
      <h3 className="logo">Bridge_</h3>
      {/* </Link> */}
      <div className="footer-links">
        <a href="#features">
          <p>Features</p>
        </a>
        <a href="#faq">
          <p>Faqs</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
    <p id="res">2023 All Rights</p>
  </FooterStyled>
);

export default Footer;

const FooterStyled = styled.footer`
  width: 100%;
  padding: 7% 5% 3%;

  .top-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};

    .logo {
      color: ${({ theme }) => theme.colors.primary};
      font-style: italic;
      font-weight: ${({ theme }) => theme.fonts.weights.w300};
    }

    .footer-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;

      a,
      p {
        margin-right: 2rem;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  #res {
    text-align: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    .top-list {
      display: block;

      .logo {
        margin-bottom: 1rem;
        text-align: center;
      }
    }
  }
`;
