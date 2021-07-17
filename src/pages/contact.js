import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import MainHeading from "../components/MainHeading/MainHeading"

const Contact = () => (
  <Layout>
    <Seo title="Contact Me" />
    <MainHeading title="Contact Me" align="left" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
