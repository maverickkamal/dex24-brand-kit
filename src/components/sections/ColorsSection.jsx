import { Check, X, Lightbulb } from 'lucide-react'
import ColorCard from '../ui/ColorCard'
import GradientsSection from './GradientsSection'
import { brandColors } from '../../data/brandColors'
import styles from './ColorsSection.module.css'

function ColorsSection() {
  const doRules = [
    'Keep Deep Teal as the brand\'s backbone (it should appear in every composition)',
    'Keep Crimson limited to symbolic, emotional or high-contrast touches',
    'Use Yellow to inject warmth at highlight interaction points, only where contrast allows',
    'Pair neutrals strategically to create breathing room between bold backgrounds',
    'Use neutral tones (white, light grey, graphite) to create breathing room'
  ]

  const avoidRules = [
    'Using Yellow on white or light grey backgrounds',
    'Placing red or crimson text directly on teal unless the layout competes visually',
    'Overpainting with teal (if everything is teal, nothing stands out)',
    'Using all three brand colors (teal, yellow, crimson) at full strength in one frame'
  ]

  return (
    <section id="colors" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Brand Colors</h2>
          <p className="section-subtitle">
            Our color palette embodies precision, compassion and clarity
          </p>
        </div>

        {/* Color Cards Grid */}
        <div className={styles.colorGrid}>
          {brandColors.map(color => (
            <ColorCard key={color.id} color={color} />
          ))}
        </div>

        {/* Color Usage Rules */}
        <div className={styles.usageRules}>
          <h3 className={styles.rulesTitle}>Color Usage Rules</h3>
          
          <div className={styles.rulesGrid}>
            {/* DO Rules */}
            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <Check className={styles.checkIcon} size={24} />
                <h4>DO</h4>
              </div>
              <ul className={styles.ruleList}>
                {doRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* AVOID Rules */}
            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <X className={styles.xIcon} size={24} />
                <h4>AVOID</h4>
              </div>
              <ul className={styles.ruleList}>
                {avoidRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Color in Context Box */}
        <div className={styles.contextBox}>
          <div className={styles.contextIcon}>
            <Lightbulb size={24} />
          </div>
          <div className={styles.contextContent}>
            <h4 className={styles.contextTitle}>Color in Context</h4>
            <p className={styles.contextText}>
              Color use in Dexterous Medics visuals is context-driven, not decorative. 
              Each background has a defined hierarchy that optimizes clarity, emotion, and brand recall. 
              Designers should always test color contrast before deployment and ensure every design 
              element reflects the brand's true nature — clinical precision yet human connection.
            </p>
          </div>
        </div>

        {/* Gradients Subsection */}
        <GradientsSection />
      </div>
    </section>
  )
}

export default ColorsSection

