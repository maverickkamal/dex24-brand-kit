import { Check, X, Download } from 'lucide-react'
import CopyButton from '../ui/CopyButton'
import { brandGradients } from '../../data/brandGradients'
import styles from './GradientsSection.module.css'

function GradientsSection() {
  return (
    <div className={styles.gradientsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Brand Gradients</h3>
          <p className={styles.sectionDescription}>
            Gradients add depth and visual interest while maintaining brand consistency. 
            Use these approved gradient combinations for backgrounds, overlays, and dynamic elements.
          </p>
        </div>

        {/* Gradients Grid */}
        <div className={styles.gradientsGrid}>
          {brandGradients.map(gradient => (
            <div key={gradient.id} className={styles.gradientCard}>
              {/* Gradient Preview */}
              <div 
                className={styles.gradientPreview}
                style={{ background: gradient.css }}
              >
                <div className={styles.directionIndicator}>
                  <span>{gradient.direction}</span>
                </div>
              </div>

              {/* Gradient Info */}
              <div className={styles.gradientInfo}>
                <h4 className={styles.gradientName}>{gradient.name}</h4>
                
                <div className={styles.colorTransition}>
                  {gradient.colors.map((color, index) => (
                    <span key={index}>
                      <code>{color}</code>
                      {index < gradient.colors.length - 1 && ' → '}
                    </span>
                  ))}
                </div>

                <p className={styles.gradientUsage}>{gradient.usage}</p>
                <p className={styles.gradientWhen}>
                  <strong>When to use:</strong> {gradient.whenToUse}
                </p>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <CopyButton 
                    text={gradient.css}
                    label="Copy CSS"
                    successMessage="CSS gradient copied!"
                    variant="primary"
                    size="small"
                  />
                  {gradient.previewImage && (
                    <a 
                      href={`/assets/gradients/${gradient.previewImage}`}
                      download={gradient.previewImage}
                      className={styles.downloadGradient}
                    >
                      <Download size={16} />
                      Download PNG
                    </a>
                  )}
                </div>

                {/* Code Section (Collapsed by default, can be expanded) */}
                <details className={styles.codeDetails}>
                  <summary className={styles.codeSummary}>View Code Examples</summary>
                  
                  <div className={styles.codeSection}>
                    <div className={styles.codeBlock}>
                      <div className={styles.codeLabel}>CSS</div>
                      <pre className={styles.codeContent}>
                        <code>{`background: ${gradient.css};`}</code>
                      </pre>
                      <CopyButton 
                        text={gradient.css}
                        label="Copy"
                        variant="ghost"
                        size="small"
                        className={styles.copyCodeButton}
                      />
                    </div>

                    <div className={styles.codeBlock}>
                      <div className={styles.codeLabel}>iOS Swift</div>
                      <pre className={styles.codeContent}>
                        <code>{gradient.swiftCode}</code>
                      </pre>
                      <CopyButton 
                        text={gradient.swiftCode}
                        label="Copy"
                        variant="ghost"
                        size="small"
                        className={styles.copyCodeButton}
                      />
                    </div>

                    <div className={styles.codeBlock}>
                      <div className={styles.codeLabel}>Android XML</div>
                      <pre className={styles.codeContent}>
                        <code>{gradient.androidXML}</code>
                      </pre>
                      <CopyButton 
                        text={gradient.androidXML}
                        label="Copy"
                        variant="ghost"
                        size="small"
                        className={styles.copyCodeButton}
                      />
                    </div>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Usage Rules */}
        <div className={styles.usageRules}>
          <h4 className={styles.rulesTitle}>Gradient Usage Rules</h4>
          
          <div className={styles.rulesGrid}>
            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <Check className={styles.checkIcon} size={20} />
                <span>DO</span>
              </div>
              <ul className={styles.ruleList}>
                <li>Use gradients for backgrounds, not text fills</li>
                <li>Ensure sufficient contrast with overlaid text (test with both white and dark text)</li>
                <li>Apply gradients to large surfaces (banners, hero sections, full-width cards)</li>
                <li>Use opacity overlays (10-30%) over images before applying text</li>
                <li>Stick to 2-color gradients only</li>
              </ul>
            </div>

            <div className={styles.ruleColumn}>
              <div className={styles.ruleHeader}>
                <X className={styles.xIcon} size={20} />
                <span>AVOID</span>
              </div>
              <ul className={styles.ruleList}>
                <li>Multi-stop gradients (more than 2 colors)</li>
                <li>Radial gradients unless specifically approved</li>
                <li>Gradients on small UI elements (buttons, badges)</li>
                <li>Animated or moving gradients</li>
                <li>Instagram-style rainbow gradients</li>
                <li>Applying gradients to logos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientsSection

