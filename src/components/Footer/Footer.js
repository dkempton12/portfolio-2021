import React from "react"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <p>Lorem ipsum lorem ipsum lorem ipsum</p>
      <span>
        © {new Date().getFullYear()} Danny Kempton
        {` `}
      </span>
    </footer>
  )
}

export default Footer
