import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  body, input, textarea, button {
    font-size: 1rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', cursive;
  }

  a {
    text-decoration: none;
  }


`