"use client"
import "./Input.css"

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  disabled = false,
  required = false,
  ...props
}) => {
  const inputClass = `
    input 
    ${disabled ? "input-disabled" : ""} 
    ${className}
  `.trim()

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClass}
      disabled={disabled}
      required={required}
      {...props}
    />
  )
}

export default Input
