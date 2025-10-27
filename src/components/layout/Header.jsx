import { useState } from 'react'
import { Menu, X, Search, Download } from 'lucide-react'
import Navigation from './Navigation'
import styles from './Header.module.css'

function Header({ activeSection, isScrolled, onDownloadAll, isDownloading }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <img 
              src="/assets/logos/svg/dex24_logo dark teal.svg" 
              alt="DEX24 Logo" 
              className={styles.logoImage}
              title="Dexterous Medics - DEX24"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Navigation 
              activeSection={activeSection} 
              isMobile={false}
              onLinkClick={closeMenu}
            />
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button 
              className={styles.iconButton}
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              className={`${styles.downloadButton} ${styles.desktopOnly}`}
              onClick={onDownloadAll}
              disabled={isDownloading}
            >
              <Download size={18} />
              <span>{isDownloading ? 'Downloading...' : 'Download All'}</span>
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button 
              className={`${styles.iconButton} ${styles.mobileOnly}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <Navigation 
              activeSection={activeSection} 
              isMobile={true}
              onLinkClick={closeMenu}
            />
          </div>
        )}
      </div>

      {/* Search Overlay - Will be implemented in Phase 6 */}
      {isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContent}>
            <input 
              type="text" 
              placeholder="Search brand guidelines..."
              className={styles.searchInput}
              autoFocus
            />
            <button onClick={toggleSearch} className={styles.closeSearch}>
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

