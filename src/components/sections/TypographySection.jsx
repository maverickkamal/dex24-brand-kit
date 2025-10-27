import { Check, X, ExternalLink } from 'lucide-react'
import CopyButton from '../ui/CopyButton'
import { brandFonts, typographyRules, fontPersonalities } from '../../data/brandFonts'
import styles from './TypographySection.module.css'

function TypographySection() {
  return (
    <section id="typography" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Typography System</h2>
          <p className="section-subtitle">
            Our type choices balance professionalism with approachability
          </p>
        </div>

        {/* Font Cards */}
        <div className={styles.fontCards}>
          {brandFonts.map(font => (
            <div key={font.id} className={styles.fontCard}>
              {/* Font Preview */}
              <div className={styles.fontPreview} style={{ fontFamily: font.family }}>
                <div className={styles.previewLarge}>{font.samples.large}</div>
                <div className={styles.previewMedium}>{font.samples.medium}</div>
                <div className={styles.previewSmall}>{font.samples.small}</div>
              </div>

              {/* Font Info */}
              <div className={styles.fontInfo}>
                <h3 className={styles.fontName}>{font.name}</h3>
                
                <div className={styles.fontDetail}>
                  <span className={styles.detailLabel}>Weights:</span>
                  <span className={styles.detailValue}>{font.weights.join(', ')}</span>
                </div>

                <div className={styles.fontDetail}>
                  <span className={styles.detailLabel}>Best at:</span>
                  <span className={styles.detailValue}>{font.bestAt}</span>
                </div>

                <div className={styles.fontDetail}>
                  <span className={styles.detailLabel}>Line height:</span>
                  <span className={styles.detailValue}>{font.lineHeight}</span>
                </div>

                <div className={styles.fontDetail}>
                  <span className={styles.detailLabel}>Letter spacing:</span>
                  <span className={styles.detailValue}>{font.letterSpacing}</span>
                </div>

                <p className={styles.fontUsage}>{font.usage}</p>

                {/* Sample Usage Examples */}
                <div className={styles.examples}>
                  <div className={styles.examplesTitle}>Sample Usage:</div>
                  {font.examples.map((example, index) => (
                    <div key={index} className={styles.exampleItem}>
                      <span className={styles.exampleSpecs}>
                        {example.size} {example.weight}
                      </span>
                      <span 
                        className={styles.exampleText}
                        style={{ 
                          fontFamily: font.family,
                          fontSize: example.size,
                          fontWeight: example.weight.includes('Bold') ? 700 : 
                                    example.weight.includes('SemiBold') ? 600 :
                                    example.weight.includes('Medium') ? 500 : 400
                        }}
                      >
                        {example.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.fontActions}>
                  <a 
                    href={font.googleFontsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.getFontButton}
                  >
                    <ExternalLink size={16} />
                    Get Font
                  </a>
                  
                  <CopyButton 
                    text={font.importStatement}
                    label="Copy CSS"
                    successMessage="Import statement copied!"
                    variant="primary"
                    size="small"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Typography Usage Rules */}
        <div className={styles.usageRules}>
          <h3 className={styles.rulesTitle}>Typography Usage Rules</h3>
          
          <div className={styles.rulesGrid}>
            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <Check className={styles.checkIcon} size={20} />
                <span>DO</span>
              </div>
              <ul className={styles.ruleList}>
                {typographyRules.do.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <X className={styles.xIcon} size={20} />
                <span>AVOID</span>
              </div>
              <ul className={styles.ruleList}>
                {typographyRules.avoid.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tone & Personality */}
        <div className={styles.personality}>
          <h3 className={styles.personalityTitle}>Tone & Personality</h3>
          <div className={styles.personalityGrid}>
            {fontPersonalities.map((item, index) => (
              <div key={index} className={styles.personalityCard}>
                <div className={styles.personalityIcon}>{item.icon}</div>
                <div className={styles.personalityFont}>{item.font}</div>
                <div className={styles.personalityDesc}>{item.personality}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypographySection

