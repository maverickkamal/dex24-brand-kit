import { Download, Search as SearchIcon, Palette, Type, Image, FileText } from 'lucide-react'
import Button from '../ui/Button'
import styles from './HomeSection.module.css'

function HomeSection({ onSearchOpen, onDownloadAll, isDownloading }) {
  const stats = [
    {
      icon: <Palette size={32} />,
      value: '8',
      label: 'Brand Colors',
      description: 'Core palette with usage rules'
    },
    {
      icon: <Type size={32} />,
      value: '3',
      label: 'Font Families',
      description: 'Space Grotesk, Montserrat, DM Sans'
    },
    {
      icon: <Image size={32} />,
      value: 'Multiple',
      label: 'Logo Variants',
      description: 'PNG & SVG in all brand colors'
    },
    {
      icon: <FileText size={32} />,
      value: 'Complete',
      label: 'Guidelines',
      description: 'Comprehensive brand documentation'
    }
  ]

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <img 
                src="/assets/logos/svg/dex24_logo main yellow.svg" 
                alt="DEX24 Logo" 
                className={styles.mainLogo}
              />
            </div>
            
            <h1 className={styles.heroTitle}>Dexterous Medics</h1>
            <p className={styles.heroTagline}>Brand Guidelines & Asset Library</p>
            
            <p className={styles.heroDescription}>
              Official brand guidelines for consistent visual communication. 
              Everything you need to represent Dexterous Medics professionally.
            </p>

            <div className={styles.ctaButtons}>
              <Button 
                variant="download" 
                size="large"
                icon={<Download size={20} />}
                onClick={onDownloadAll}
                disabled={isDownloading}
              >
                {isDownloading ? 'Downloading...' : 'Download All Assets'}
              </Button>
              
              <Button 
                variant="outline" 
                size="large"
                icon={<SearchIcon size={20} />}
                onClick={onSearchOpen}
              >
                Quick Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDescription}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection

