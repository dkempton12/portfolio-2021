import { createGlobalStyle } from "styled-components"
import headingfont from "../assets/fonts/SuezOne-Regular.ttf"

const Typography = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');


html {
  font-family: "Roboto", sans-serif;
}

@font-face {
  font-family: "Suez One", serif;
  src: url()(${headingfont});
}

h1, h2, h3, h4, h5, h6 {
  color: var(--white);
}

h1 {
  font-size: 60px;
  font-family: "Suez One", serif;
  color: var(--white);
  letter-spacing: 0.5px;
  margin: 2rem 0;

  @media (min-width: 768px) {
    font-size: 75px;
  }
}

h3 {
  font-size: 48px;
  font-weight: 300;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 60px;
  }
}
`

export default Typography
