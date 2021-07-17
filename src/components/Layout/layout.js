/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import "./layout.scss"

import Header from "../Header/header"
import Global from "../../theme/Global.js"
import Typography from "../../theme/Typography.js"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />

      <Typography />

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="container">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
