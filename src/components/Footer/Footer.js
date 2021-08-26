import React from "react"

import "./Footer.scss"

import gitLogo from "../../assets/images/svg/github-logo.svg"
import linkedInLogo from "../../assets/images/svg/linkedin.svg"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__contact-heading">
        Find me elsewhere <span className="find-online">online</span>
        <span className="exclamation"> !</span>
      </p>
      <div className="footer__images">
        <span className="footer-social">
          <a href="https://github.com/dkempton12" target="_blank">
            <img src={gitLogo} alt="GitHub Account" />
          </a>
        </span>
        <span className="footer-social">
          <a href="https://www.linkedin.com/in/dkempton12" target="_blank">
            <img src={linkedInLogo} alt="LinkedIn Account" />
          </a>
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
