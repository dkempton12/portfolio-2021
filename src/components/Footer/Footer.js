import React from "react"

import "./Footer.scss"

import gitLogo from "../../assets/images/svg/github-logo.svg"
import linkedInLogo from "../../assets/images/svg/linkedin.svg"

function Footer() {
  return (
    <footer className="footer">
      <p>Lorem ipsum lorem ipsum lorem ipsum</p>
      <div className="footer__images">
        <span className="footer-social">
          <img src={gitLogo} alt="GitHub Account" />
        </span>
        <span className="footer-social">
          <img src={linkedInLogo} alt="LinkedIn Account" />
        </span>
      </div>
      <span>
        © {new Date().getFullYear()} Danny Kempton
        {` `}
      </span>
    </footer>
  )
}

export default Footer
