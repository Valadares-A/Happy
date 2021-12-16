import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
	margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: #fff;
  background: #ebf2f5;
}

body,
input,
button,
textarea {
  font: 600 18px Nunito, sans-serif;
}

.leaflet-container{
  z-index:5;
}
`;
