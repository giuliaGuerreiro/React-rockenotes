import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };
    color: ${ ({ theme }) => theme.COLORS.WHITE };
    font-size: 1.6rem;
  }

  body, textarea, input, button, a, span {
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button:hover , a:hover {
    opacity: 0.5;
  }
`;