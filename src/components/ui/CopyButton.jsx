import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useToast } from './ToastContainer'
import { copyToClipboard } from '../../utils/clipboard'
import styles from './CopyButton.module.css'

function CopyButton({ 
  text, 
  label = 'Copy',
  successMessage = 'Copied!',
  variant = 'default',
  size = 'medium',
  showIcon = true,
  className = ''
}) {
  const [isCopied, setIsCopied] = useState(false)
  const { addToast } = useToast()

  const handleCopy = async () => {
    const success = await copyToClipboard(text)
    
    if (success) {
      setIsCopied(true)
      addToast(successMessage, 'success', 2000)
      
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } else {
      addToast('Failed to copy. Please try again.', 'error', 2000)
    }
  }

  const classNames = [
    styles.copyButton,
    styles[variant],
    styles[size],
    isCopied && styles.copied,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classNames}
      onClick={handleCopy}
      aria-label={isCopied ? 'Copied' : label}
    >
      {showIcon && (
        <span className={styles.icon}>
          {isCopied ? <Check size={16} /> : <Copy size={16} />}
        </span>
      )}
      <span className={styles.text}>
        {isCopied ? 'Copied!' : label}
      </span>
    </button>
  )
}

export default CopyButton

