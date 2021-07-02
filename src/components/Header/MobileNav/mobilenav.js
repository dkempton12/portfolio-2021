import React from "react"

function MobileNav() {
  return (
    <header className="mobile-header">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="mobile-navigation">
        <ul className="mobile-navigation__list">
          <li className="mobile-navigation__list__item">
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className="mobile-navigation__list__item">
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MobileNav
