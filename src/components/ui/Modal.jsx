import { useEffect } from 'react'
import { X } from 'lucide-react'
import styles from './Modal.module.css'

function Modal({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'medium',
  showCloseButton = true 
}) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Handle Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className={`${styles.modal} ${styles[size]}`}>
        {showCloseButton && (
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        )}
        
        {title && (
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
        )}
        
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal

