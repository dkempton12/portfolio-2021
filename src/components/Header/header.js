import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"
import Logo from "./Logo/logo"

function Header({ siteTitle }) {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="main-navigation">
        <ul className="main-navigation__list">
          <li className="main-navigation__list__item">
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className="main-navigation__list__item">
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
