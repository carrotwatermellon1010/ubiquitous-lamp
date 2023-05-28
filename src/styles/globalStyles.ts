import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
    scroll-behavior: smooth !important;
  }

  body {
    background: ${({ theme }) => theme.colors.bg} !important;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;    
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    color: ${({ theme }) => theme.colors.white} !important;
  }
  


  h1 {
    font-weight: ${({ theme }) => theme.fonts.weights.w900};
    font-size: ${({ theme }) => theme.fonts.sizes.h1};    
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.FontFace.secondary};

    @media screen and (max-width: 600px) {
      font-size: ${({ theme }) => theme.fonts.sizes.h5};    
    }

  }

  h3 {
    font-weight: ${({ theme }) => theme.fonts.weights.w700};
    font-size: ${({ theme }) => theme.fonts.sizes.xxl};    

    @media screen and (max-width: 600px) {
      font-size: ${({ theme }) => theme.fonts.sizes.lg};    
    }

  }

  button, input, textarea {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
