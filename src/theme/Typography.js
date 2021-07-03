import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

html {
  font-family: "Roboto", sans-serif;
}

h1 {
  font-size: 60px;

  @media (min-width: 768px) {
    font-size: 75px;
  }
}
`

export default Typography
