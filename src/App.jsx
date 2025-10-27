import { useState, useEffect } from 'react'
import { ToastProvider } from './components/ui/ToastContainer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeSection from './components/sections/HomeSection'
import ColorsSection from './components/sections/ColorsSection'
import TypographySection from './components/sections/TypographySection'
import LogosSection from './components/sections/LogosSection'
import ImagesSection from './components/sections/ImagesSection'
import ExamplesSection from './components/sections/ExamplesSection'
import GuidelinesSection from './components/sections/GuidelinesSection'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for header styling
      setIsScrolled(window.scrollY > 50)

      // Track active section for navigation
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 150

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isDownloading, setIsDownloading] = useState(false)

  const handleSearchOpen = () => {
    // Will be implemented in Phase 6
    console.log('Search opened')
  }

  const handleDownloadAll = async (e) => {
    // Prevent default behavior if triggered from a button
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    
    if (isDownloading) return
    
    setIsDownloading(true)
    try {
      const { generateBrandKitZip } = await import('./utils/zipGenerator')
      
      const result = await generateBrandKitZip((progress, message) => {
        console.log(`${progress}%: ${message}`)
      })
      
      if (result.success) {
        console.log(`Downloaded: ${result.filename}`)
      } else {
        console.error('Download failed:', result.error)
        alert('Failed to download brand kit. Please try again.')
      }
    } catch (error) {
      console.error('Error in handleDownloadAll:', error)
      alert('An error occurred while downloading. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <ToastProvider>
      <div className="app">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header 
          activeSection={activeSection} 
          isScrolled={isScrolled}
          onDownloadAll={handleDownloadAll}
          isDownloading={isDownloading}
        />
        
        <main id="main-content" role="main">
          <HomeSection 
            onSearchOpen={handleSearchOpen}
            onDownloadAll={handleDownloadAll}
            isDownloading={isDownloading}
          />
          <ColorsSection />
          <TypographySection />
          <ImagesSection />
          <LogosSection />
          <ExamplesSection />
          <GuidelinesSection />
        </main>

        <Footer 
          onDownloadAll={handleDownloadAll}
          isDownloading={isDownloading}
        />
      </div>
    </ToastProvider>
  )
}

export default App

