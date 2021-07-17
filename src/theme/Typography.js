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
  margin: 0;
  padding: 0;
  color: var(--white);
}

h1 {
  margin: 2rem 0;
  font-size: 60px;
  font-family: "Suez One", serif;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 2;
  color: var(--white);

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

p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--white);
}

a {
  font-size: 1.2rem;
  color: var(--white);
  text-decoration: none;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
`

export default Typography
