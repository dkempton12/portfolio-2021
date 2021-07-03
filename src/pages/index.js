import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ textAlign: "center" }}>Danny Kempton</h1>
    <h3>Web Developer</h3>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/about/">Go to About Page</Link> <br />
      <Link to="/contact/">Go to Contact Page</Link>
    </p>
  </Layout>
)

export default IndexPage
