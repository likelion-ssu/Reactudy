import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;  
  }
 
  * {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    padding: 0;
  }
`;

export default GlobalStyle;
