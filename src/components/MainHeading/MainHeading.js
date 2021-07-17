import React from "react"

export default function MainHeading({ title, align }) {
  return <h1 className={`text-${align}`}>{title}</h1>
}

const alignOptions = ["center", "left", "right"]
