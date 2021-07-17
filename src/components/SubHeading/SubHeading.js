import React from "react"

export default function SubHeading({ title, align }) {
  return <h3 className={`text-${align}`}>{title}</h3>
}

const alignOptions = ["center", "left", "right"]
