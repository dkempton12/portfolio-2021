import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

:root {
  --white: #fff;
  --black: #000;
  --darkblue: #191970;
  --green: #3cb371;
  --orange: #ff8c00;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 15px;
  box-sizing: border-box;
  height: 100vh;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  background: rgb(40, 32, 164);
  background: linear-gradient(
    90deg,
    rgba(40, 32, 164, 1) 0%,
    rgba(27, 27, 164, 1) 35%,
    rgba(20, 35, 87, 1) 100%
  );
  color: var(--black);
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

img {
  margin: 0;
  border: none;
  max-width: 100%;
}

a {
  text-decoration: none;
}
`

export default Global
