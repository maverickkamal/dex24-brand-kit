import { Download, Image as ImageIcon, Palette, Layers, Layout } from 'lucide-react'
import Accordion from '../ui/Accordion'
import Button from '../ui/Button'
import styles from './ImagesSection.module.css'

function ImagesSection() {
  const handleDownloadPreset = () => {
    const link = document.createElement('a')
    link.href = '/assets/presets/dex_preset.dng'
    link.download = 'dex_preset.dng'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const accordionItems = [
    {
      title: 'Image Selection & Editing',
      icon: <ImageIcon size={24} />,
      content: (
        <div className={styles.accordionContent}>
          <div className={styles.contentSection}>
            <h4 className={styles.contentTitle}>Choosing the Right Images</h4>
            
            <div className={styles.rulesGrid}>
              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>DO</h5>
                <ul className={styles.ruleList}>
                  <li>Use authentic, candid photography showing real people and genuine moments</li>
                  <li>Prefer images with natural lighting and minimal post-processing</li>
                  <li>Choose images with clear focal points and uncluttered backgrounds</li>
                  <li>Select photos that show diversity in age, gender, and ethnicity</li>
                  <li>Use images that evoke emotion: care, trust, community, professionalism</li>
                  <li>Ensure faces are visible and expressions are clear</li>
                </ul>
              </div>

              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>AVOID</h5>
                <ul className={styles.ruleList}>
                  <li>Overly staged or stock-photo-looking images</li>
                  <li>Images with busy, distracting backgrounds</li>
                  <li>Photos with visible competitor branding or irrelevant text</li>
                  <li>Low-resolution or pixelated images (minimum 1920px width for web)</li>
                  <li>Images with strong warm filters or unnatural saturation</li>
                  <li>Cliché medical imagery (stethoscopes on white background, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Color Harmony & Photo Editing',
      icon: <Palette size={24} />,
      content: (
        <div className={styles.accordionContent}>
          <p className={styles.description}>
            When preparing or editing images, adjust colors to complement the brand palette without distorting reality.
          </p>

          <div className={styles.presetSection}>
            <h4 className={styles.contentTitle}>Color Adjustment Presets</h4>
            <div className={styles.presetValues}>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Saturation:</span>
                <span className={styles.presetValue}>-15% to -20%</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Temperature:</span>
                <span className={styles.presetValue}>-8 (cooler, slight cyan shift)</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Tint:</span>
                <span className={styles.presetValue}>+8 (toward teal)</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Contrast:</span>
                <span className={styles.presetValue}>+10</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Brightness:</span>
                <span className={styles.presetValue}>-5</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Shadows:</span>
                <span className={styles.presetValue}>+6 (lift to reveal detail)</span>
              </div>
              <div className={styles.presetItem}>
                <span className={styles.presetLabel}>Highlights:</span>
                <span className={styles.presetValue}>-3 (prevent blown-out whites)</span>
              </div>
            </div>

            <div className={styles.downloadPreset}>
              <Button
                variant="download"
                icon={<Download size={18} />}
                onClick={handleDownloadPreset}
              >
                Download Camera Raw/Lightroom Preset
              </Button>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.rulesGrid}>
              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>DO</h5>
                <ul className={styles.ruleList}>
                  <li>Cool down warm-toned images to align with teal palette</li>
                  <li>Reduce saturation of colors that compete with brand palette</li>
                  <li>Maintain skin tone accuracy while adjusting overall temperature</li>
                  <li>Test edited images against brand color swatches</li>
                  <li>Export with color profile: sRGB for web, Adobe RGB for print</li>
                </ul>
              </div>

              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>AVOID</h5>
                <ul className={styles.ruleList}>
                  <li>Full-color unedited stock images (too commercial)</li>
                  <li>Strong warm filters (breaks palette harmony)</li>
                  <li>Over-HDR processing</li>
                  <li>Heavy vignettes or dark corners</li>
                  <li>Black & white unless specifically required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Image Overlays & Text Integration',
      icon: <Layers size={24} />,
      content: (
        <div className={styles.accordionContent}>
          <h4 className={styles.contentTitle}>Overlay Techniques</h4>
          
          <div className={styles.techniquesGrid}>
            <div className={styles.techniqueCard}>
              <h5 className={styles.techniqueTitle}>1. Gradient Overlay Method</h5>
              <p className={styles.techniqueDesc}>
                Apply approved brand gradient at 40-70% opacity over image. Use darker gradients 
                (Deep Dark, Light Dark) for white text.
              </p>
            </div>

            <div className={styles.techniqueCard}>
              <h5 className={styles.techniqueTitle}>2. Solid Color Overlay Method</h5>
              <p className={styles.techniqueDesc}>
                Deep Teal (#005656) at 50-60% opacity for dramatic effect. 
                Graphite (#1C1C1C) at 60-70% opacity for formal content.
              </p>
            </div>

            <div className={styles.techniqueCard}>
              <h5 className={styles.techniqueTitle}>3. Blur Background Method</h5>
              <p className={styles.techniqueDesc}>
                Apply Gaussian blur (15-25px) to background. Keep subject in focus. 
                Overlay with semi-transparent teal (20-30% opacity).
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h4 className={styles.contentTitle}>Text on Images - Readability Rules</h4>
            <div className={styles.rulesGrid}>
              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>DO</h5>
                <ul className={styles.ruleList}>
                  <li>Use text shadows for light text: <code>text-shadow: 0px 2px 8px rgba(0,0,0,0.4)</code></li>
                  <li>Ensure contrast ratio of at least 4.5:1</li>
                  <li>Place text in negative space (empty areas of image)</li>
                  <li>Use bold or semibold weights for better legibility</li>
                  <li>Limit text overlay to 2-3 lines maximum</li>
                </ul>
              </div>

              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>AVOID</h5>
                <ul className={styles.ruleList}>
                  <li>Placing text across faces or important image details</li>
                  <li>Using thin font weights on images</li>
                  <li>Center-aligning long text blocks on images</li>
                  <li>Text over high-contrast or busy image areas without overlay</li>
                  <li>Stretching text to fill width of image</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Composition Rules',
      icon: <Layout size={24} />,
      content: (
        <div className={styles.accordionContent}>
          <h4 className={styles.contentTitle}>Layout Principles</h4>
          
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <h5 className={styles.principleTitle}>Rule of Thirds</h5>
              <p className={styles.principleDesc}>
                Divide canvas into 3×3 grid. Place key elements at intersection points. 
                Position horizons along top or bottom third line.
              </p>
            </div>

            <div className={styles.principleCard}>
              <h5 className={styles.principleTitle}>Visual Hierarchy</h5>
              <p className={styles.principleDesc}>
                Primary focal point (largest, highest contrast) → Secondary elements (supporting info) 
                → Tertiary elements (supplementary)
              </p>
            </div>

            <div className={styles.principleCard}>
              <h5 className={styles.principleTitle}>White Space</h5>
              <p className={styles.principleDesc}>
                Minimum 15% of composition should be empty space. Use neutrals for breathing room. 
                More white space = more premium feel.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.rulesGrid}>
              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>DO</h5>
                <ul className={styles.ruleList}>
                  <li>Keep main subject centered or in lower thirds for text clarity</li>
                  <li>Use odd numbers of elements (3, 5, 7) for visual balance</li>
                  <li>Crop tightly or remove background to eliminate distracting clutter</li>
                  <li>Establish clear visual flow (Z-pattern for web)</li>
                  <li>Use grid systems (12-column for web)</li>
                </ul>
              </div>

              <div className={styles.ruleColumn}>
                <h5 className={styles.ruleHeader}>AVOID</h5>
                <ul className={styles.ruleList}>
                  <li>Cluttered compositions with no clear focal point</li>
                  <li>Mixing too many design styles in one piece</li>
                  <li>Centering everything (creates static, boring layouts)</li>
                  <li>Full-color unedited stock images</li>
                  <li>Random gradients unrelated to brand colors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.technicalSpecs}>
            <h4 className={styles.contentTitle}>Technical Specifications</h4>
            <div className={styles.specsGrid}>
              <div className={styles.specCard}>
                <h5 className={styles.specTitle}>For Web/Digital</h5>
                <ul className={styles.specList}>
                  <li><strong>Format:</strong> PNG for logos/graphics, JPG for photos</li>
                  <li><strong>Resolution:</strong> 72 DPI (144 DPI for retina)</li>
                  <li><strong>Color space:</strong> sRGB</li>
                  <li><strong>Max file size:</strong> 500KB per image</li>
                </ul>
              </div>

              <div className={styles.specCard}>
                <h5 className={styles.specTitle}>For Print</h5>
                <ul className={styles.specList}>
                  <li><strong>Format:</strong> PDF with bleed, TIFF, or high-res JPG</li>
                  <li><strong>Resolution:</strong> 300 DPI minimum</li>
                  <li><strong>Color space:</strong> CMYK</li>
                  <li><strong>Bleed:</strong> 3mm all sides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="images" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Working with Images & Composition</h2>
          <p className="section-subtitle">
            Visual composition guidelines to ensure every image reinforces the Dexterous Medics identity
          </p>
        </div>

        {/* Accordion */}
        <Accordion items={accordionItems} />
      </div>
    </section>
  )
}

export default ImagesSection

