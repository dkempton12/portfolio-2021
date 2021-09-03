import React from "react"
import "./Input.scss"

export default function Input({ type, id, name, value, changeHandler }) {
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
