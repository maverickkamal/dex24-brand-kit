import styles from './LoadingSpinner.module.css'

function LoadingSpinner({ size = 'medium', message, fullScreen = false }) {
  const content = (
    <div className={styles.spinnerWrapper}>
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner

