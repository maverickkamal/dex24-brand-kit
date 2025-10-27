import { useState } from 'react'
import { Check, X, ChevronDown } from 'lucide-react'
import CopyButton from './CopyButton'
import styles from './ColorCard.module.css'

function ColorCard({ color }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const { name, hex, rgb, cmyk, usage, rules } = color

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`${styles.colorCard} ${isExpanded ? styles.expanded : ''}`}>
      {/* Color Swatch */}
      <div 
        className={styles.swatch}
        style={{ backgroundColor: hex }}
        onClick={toggleExpand}
        role="button"
        tabIndex={0}
        aria-label={`Expand ${name} color details`}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleExpand()
          }
        }}
      >
        <div className={styles.expandHint}>
          <ChevronDown 
            size={24} 
            className={isExpanded ? styles.rotated : ''}
          />
        </div>
      </div>

      {/* Color Info */}
      <div className={styles.info}>
        <h3 className={styles.colorName}>{name}</h3>
        
        <div className={styles.values}>
          <div className={styles.valueRow}>
            <span className={styles.label}>HEX</span>
            <code className={styles.value}>{hex}</code>
            <CopyButton 
              text={hex}
              label="Copy"
              successMessage={`${hex} copied!`}
              variant="ghost"
              size="small"
              showIcon={true}
            />
          </div>

          <div className={styles.valueRow}>
            <span className={styles.label}>RGB</span>
            <code className={styles.value}>{rgb}</code>
            <CopyButton 
              text={rgb}
              label="Copy"
              successMessage="RGB copied!"
              variant="ghost"
              size="small"
              showIcon={true}
            />
          </div>

          <div className={styles.valueRow}>
            <span className={styles.label}>CMYK</span>
            <code className={styles.value}>{cmyk}</code>
            <CopyButton 
              text={cmyk}
              label="Copy"
              successMessage="CMYK copied!"
              variant="ghost"
              size="small"
              showIcon={true}
            />
          </div>
        </div>

        <p className={styles.usage}>{usage}</p>

        {/* Expanded Rules */}
        {isExpanded && rules && (
          <div className={styles.rules}>
            <div className={styles.ruleSection}>
              <h4 className={styles.ruleTitle}>
                <Check className={styles.checkIcon} size={18} />
                DO
              </h4>
              <ul className={styles.ruleList}>
                {rules.do.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className={styles.ruleSection}>
              <h4 className={styles.ruleTitle}>
                <X className={styles.xIcon} size={18} />
                AVOID
              </h4>
              <ul className={styles.ruleList}>
                {rules.avoid.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorCard

