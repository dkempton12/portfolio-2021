import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import classes from "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="main-navigation">
      <ul className="main-navigation__list">
        <li className="main-navigation__list__item">
          <Link to="/about">About</Link>
        </li>
        <li className="main-navigation__list__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
