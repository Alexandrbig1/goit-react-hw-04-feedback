import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(p) => p.theme.colors.mainBgColor};
}

p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;

}`;
