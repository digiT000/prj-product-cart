// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

// @ts-ignore
export const GlobalStyle = createGlobalStyle<{ isOpen?: boolean }>`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap');
    
    /* Reset some default browser styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Red Hat Text", sans-serif;
    background-color: ${({ theme }) => theme.colors.rose_50};
    color: ${({ theme }) => theme?.colors.black};
      font-style: normal;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      overflow: ${(props) => (props.isOpen ? 'hidden' : 'auto')};

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
