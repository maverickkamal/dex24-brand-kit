import { useState } from 'react'
import { Download, Check, X } from 'lucide-react'
import Button from '../ui/Button'
import { useToast } from '../ui/ToastContainer'
import { logoVariants, logoGuidelines, getLogoPath } from '../../data/brandLogos'
import styles from './LogosSection.module.css'

function LogosSection() {
  const [activeTab, setActiveTab] = useState('main')
  const { showToast } = useToast()
  const [isDownloadingAll, setIsDownloadingAll] = useState(false)

  const handleDownload = (file, format = 'png') => {
    const link = document.createElement('a')
    link.href = getLogoPath(file, format)
    link.download = file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast(`Downloaded ${file}!`, 'success')
  }

  const handleDownloadAllLogos = async () => {
    if (isDownloadingAll) return
    
    setIsDownloadingAll(true)
    try {
      const JSZip = (await import('jszip')).default
      const zip = new JSZip()
      
      // Add all PNG logos
      for (const logo of [...logoVariants.main, ...logoVariants.crest]) {
        try {
          const response = await fetch(getLogoPath(logo.file, 'png'))
          if (response.ok) {
            const blob = await response.blob()
            zip.file(`png/${logo.file}`, blob)
          }
        } catch (err) {
          console.error(`Failed to fetch ${logo.file}:`, err)
        }
      }
      
      // Add all SVG logos
      for (const logo of logoVariants.svg) {
        try {
          const response = await fetch(getLogoPath(logo.file, 'svg'))
          if (response.ok) {
            const blob = await response.blob()
            zip.file(`svg/${logo.file}`, blob)
          }
        } catch (err) {
          console.error(`Failed to fetch ${logo.file}:`, err)
        }
      }
      
      // Generate and download ZIP
      const content = await zip.generateAsync({ type: 'blob' })
      const date = new Date().toISOString().split('T')[0].replace(/-/g, '')
      const filename = `dex24-logos-${date}.zip`
      
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
      
      showToast(`Downloaded all logos as ${filename}!`, 'success')
    } catch (error) {
      console.error('Error downloading logos:', error)
      showToast('Failed to download logos. Please try again.', 'error')
    } finally {
      setIsDownloadingAll(false)
    }
  }

  const renderLogoGrid = (logos, format = 'png') => {
    return (
      <div className={styles.logoGrid}>
        {logos.map(logo => (
          <div key={logo.id} className={styles.logoCard}>
            {/* Logo Preview */}
            <div 
              className={styles.logoPreview}
              style={{ 
                background: logo.color === '#FFFFFF' || logo.color === '#FFD600' || logo.color === '#E0F2F2'
                  ? '#1C1C1C' 
                  : '#F4F4F4'
              }}
            >
              <img 
                src={getLogoPath(logo.file, format)}
                alt={logo.name}
                className={styles.logoImage}
              />
            </div>

            {/* Logo Info */}
            <div className={styles.logoInfo}>
              <h4 className={styles.logoName}>{logo.name}</h4>
              <p className={styles.logoUsage}>{logo.usage}</p>
              
              {/* Color Badge */}
              {logo.color && (
                <div className={styles.colorBadge}>
                  <div 
                    className={styles.colorSwatch}
                    style={{ backgroundColor: logo.color }}
                  />
                  <code className={styles.colorCode}>{logo.color}</code>
                </div>
              )}

              {/* Download Buttons */}
              {format === 'svg' ? (
                <Button
                  variant="primary"
                  size="small"
                  icon={<Download size={16} />}
                  onClick={() => handleDownload(logo.file, 'svg')}
                  fullWidth
                >
                  Download SVG
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="small"
                  icon={<Download size={16} />}
                  onClick={() => handleDownload(logo.file, 'png')}
                  fullWidth
                >
                  Download PNG
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="logos" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Brand Logos</h2>
          <p className="section-subtitle">
            Download official DEX24 logos in various colors and formats
          </p>
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <Button
              variant="download"
              icon={<Download size={20} />}
              onClick={handleDownloadAllLogos}
              disabled={isDownloadingAll}
            >
              {isDownloadingAll ? 'Downloading All Logos...' : 'Download All Logos'}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'main' ? styles.active : ''}`}
            onClick={() => setActiveTab('main')}
          >
            Horizontal Logos
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'crest' ? styles.active : ''}`}
            onClick={() => setActiveTab('crest')}
          >
            Crest Logos
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'svg' ? styles.active : ''}`}
            onClick={() => setActiveTab('svg')}
          >
            SVG Format
          </button>
        </div>

        {/* Logo Content */}
        <div className={styles.logoContent}>
          {activeTab === 'main' && renderLogoGrid(logoVariants.main)}
          {activeTab === 'crest' && renderLogoGrid(logoVariants.crest)}
          {activeTab === 'svg' && renderLogoGrid(logoVariants.svg, 'svg')}
        </div>

        {/* Logo Usage Guidelines */}
        <div className={styles.guidelines}>
          <h3 className={styles.guidelinesTitle}>Logo Usage Guidelines</h3>
          
          <div className={styles.guidelinesGrid}>
            {/* DO Rules */}
            <div className={styles.guidelineColumn}>
              <div className={styles.guidelineHeader}>
                <Check className={styles.checkIcon} size={24} />
                <h4>DO</h4>
              </div>
              <ul className={styles.guidelineList}>
                {logoGuidelines.do.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* AVOID Rules */}
            <div className={styles.guidelineColumn}>
              <div className={styles.guidelineHeader}>
                <X className={styles.xIcon} size={24} />
                <h4>AVOID</h4>
              </div>
              <ul className={styles.guidelineList}>
                {logoGuidelines.avoid.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Size Specifications */}
        <div className={styles.specifications}>
          <h3 className={styles.specificationsTitle}>Size Specifications</h3>
          <div className={styles.sizeGrid}>
            <div className={styles.sizeCard}>
              <div className={styles.sizeValue}>80px</div>
              <div className={styles.sizeLabel}>Minimum Width</div>
              <div className={styles.sizeDesc}>For horizontal logo</div>
            </div>
            <div className={styles.sizeCard}>
              <div className={styles.sizeValue}>60px</div>
              <div className={styles.sizeLabel}>Minimum Size</div>
              <div className={styles.sizeDesc}>For crest/emblem</div>
            </div>
            <div className={styles.sizeCard}>
              <div className={styles.sizeValue}>X-height</div>
              <div className={styles.sizeLabel}>Clear Space</div>
              <div className={styles.sizeDesc}>Around all sides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogosSection

