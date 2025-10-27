import { ArrowUp, Download, Mail } from 'lucide-react'
import styles from './Footer.module.css'

function Footer({ onDownloadAll, isDownloading }) {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Primary CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Use Our Brand Assets?</h2>
          <p className={styles.ctaText}>
            Download the complete brand kit including logos, color palettes, fonts, and guidelines.
          </p>
          <button 
            className={styles.downloadButton}
            onClick={onDownloadAll}
            disabled={isDownloading}
          >
            <Download size={20} />
            <span>{isDownloading ? 'Downloading...' : 'Download All Assets'}</span>
          </button>
        </div>

        {/* Footer Content */}
        <div className={styles.footerContent}>
          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerList}>
              <li>
                <button onClick={scrollToTop} className={styles.footerLink}>
                  <ArrowUp size={16} />
                  Back to Top
                </button>
              </li>
              <li>
                <a href="#colors" className={styles.footerLink}>
                  Colors
                </a>
              </li>
              <li>
                <a href="#typography" className={styles.footerLink}>
                  Typography
                </a>
              </li>
              <li>
                <a href="#logos" className={styles.footerLink}>
                  Logos
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Information</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerText}>
                Version: Dexterous Medics Brand Guidelines v1.0
              </li>
              <li className={styles.footerText}>
                Last updated: {lastUpdated}
              </li>
              <li>
                <a href="mailto:brand@dexterousmedics.com" className={styles.footerLink}>
                  <Mail size={16} />
                  Contact for Questions
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>About</h3>
            <p className={styles.footerText}>
              Brand guidelines site built for Dexterous Medics. 
              Ensuring consistent visual communication across all touchpoints.
            </p>
            <p className={styles.brandTag}>
              DEX24 - Marketing beyond walls
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Dexterous Medics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

