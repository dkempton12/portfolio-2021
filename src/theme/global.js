import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
:root {
  --white: #fff;
  --black: #000;
  --darkblue: #191970;
  --green: #3cb371;
  --orange: #ff8c00;
}

html {
  font-size: 15px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: var(--black);
}

img {
  margin: 0;
  border: none;
  max-width: 100%;
}

h1 {
  font-size: 6rem;
}
`

export default Global
