import React from "react"
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
  return (
    <LogoStyled>
      D<span className="initial">K</span>
    </LogoStyled>
  )
}

export default Logo
