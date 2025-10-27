import styles from './Button.module.css'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  onClick, 
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
  ...props 
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  )
}

export default Button

