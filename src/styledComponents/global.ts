import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 62.5%; // 1rem = 10px
  }
`;
