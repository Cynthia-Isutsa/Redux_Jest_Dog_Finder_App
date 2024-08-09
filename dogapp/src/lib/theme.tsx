import { createGlobalStyle } from "styled-components"
import PoppinsBold from "../styles/fonts/PoppinsBold.otf";
import PoppinsRegular from "../styles/fonts/PoppinsRegular.otf";


export const theme = {
  background: "#E6E9ED",
  primary: "#6342C3",
  light: "#e2e2e2",
  text: "#0A2463",
  error: "#FB3640",
  border: "#0A2463",
  button: "#ff3693",
  white: "#fff",
};


export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
};


@font-face {
font-family: 'Poppins Bold'
src: url(${PoppinsBold})
}

@font-face {
font-family: 'Poppins Regular'
src: url(${PoppinsRegular})
}

body {
font-sizing: border-box;
font-family: 'Poppins Regular'
background-color: ${theme.background};
}


 h1 {
    font-size: 3.375rem;
    font-family: 'Poppins Bold'
  } `;