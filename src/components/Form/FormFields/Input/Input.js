import React from "react"

export default function Input() {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      className="input"
      onChange={changeHandler}
    />
  )
}
