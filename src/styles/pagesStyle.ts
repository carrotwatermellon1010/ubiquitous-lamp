import styled from "styled-components";

const PageBodyStyled = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100vw;
  overflow: hidden !important;
  padding-bottom: 4%;
  /* position: relative; */

  .hero-wrap {
    padding: 0 5% 3%;
    width: 100vw;
    background-image: url("https://plus.unsplash.com/premium_photo-1668824629714-f47c34836df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"),
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
`;

export default PageBodyStyled;
