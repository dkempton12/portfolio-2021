import React from "react"

export default function Label({ htmlFor, labelText }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {labelText}
    </label>
  )
}
