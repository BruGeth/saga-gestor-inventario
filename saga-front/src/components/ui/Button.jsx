"use client"
import "./Button.css"

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  ...props
}) => {
  const buttonClass = `
    btn 
    btn-${variant} 
    btn-${size} 
    ${disabled || loading ? "btn-disabled" : ""} 
    ${className}
  `.trim()

  return (
    <button type={type} className={buttonClass} disabled={disabled || loading} onClick={onClick} {...props}>
      {loading && (
        <div className="btn-spinner">
          <div className="spinner"></div>
        </div>
      )}
      <span className={loading ? "btn-text-loading" : ""}>{children}</span>
    </button>
  )
}

export default Button
