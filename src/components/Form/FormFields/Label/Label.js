import React from "react"

import "./Label.scss"

export default function Label({ htmlFor, labelText }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {labelText}
    </label>
  )
}
