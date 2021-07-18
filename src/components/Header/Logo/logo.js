import React, { useState, useEffect } from "react"
import styled from "styled-components"

const LogoStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Suez+One&display=swap");
  position: absolute;
  left: 4rem;
  top: 1rem;
  font-family: "Suez One", serif;
  font-size: 60px;
  font-weight: normal;
  letter-spacing: 0.5px;
  color: var(--white);
  transform: rotate(-4deg);

  &.logo-anim {
    top: 0.4rem;
    transition: 0.5s ease-in-out;
    transform: rotate(0deg);
  }

  &:after {
    display: block;
    content: "";
    margin-top: -10px;
    height: 8px;
    background-color: #ff8243;
  }

  .initial {
    color: #00c957;
  }
`

function Logo() {
  const [logoScrollAnim, setLogoScrollAnim] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setLogoScrollAnim(window.pageYOffset > 60)
      )
    }
  }, [])

  return (
    <LogoStyled className={`${logoScrollAnim ? "logo-anim" : ""}`}>
      D<span className="initial">K</span>
    </LogoStyled>
  )
}

export default Logo
