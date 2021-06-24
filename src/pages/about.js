import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About Me" />
    <h1>About Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
