import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Zap, Check } from 'lucide-react'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import styles from './ExamplesSection.module.css'

function ExamplesSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [examples, setExamples] = useState([])
  const [selectedExample, setSelectedExample] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filters = [
    { id: 'all', label: 'All Examples' },
    { id: 'good', label: 'Good Examples' },
    { id: 'bad', label: 'Bad Examples' },
    { id: 'color', label: 'Color Usage' },
    { id: 'typography', label: 'Typography' },
    { id: 'composition', label: 'Composition' }
  ]

  // Mock examples data (you can add more examples to public/assets/examples/)
  const exampleData = [
    {
      id: 'good-social-1',
      file: 'good-social-post-1.png',
      title: 'Social Media Post - Community Health',
      type: 'good',
      categories: ['color', 'composition'],
      description: 'Excellent use of brand colors with clear visual hierarchy',
      annotations: [
        { x: 10, y: 20, label: 'Deep Teal for authority' },
        { x: 70, y: 60, label: 'Proper white space' }
      ]
    },
    {
      id: 'good-poster-1',
      file: 'good-poster-1.png',
      title: 'Vaccination Campaign Poster',
      type: 'good',
      categories: ['typography', 'composition'],
      description: 'Strong typography hierarchy with effective call-to-action',
      annotations: [
        { x: 50, y: 15, label: 'Bold headline in Montserrat' },
        { x: 50, y: 85, label: 'Clear CTA with contrast' }
      ]
    },
    {
      id: 'mental-health',
      file: 'mental-health-poster.png',
      title: 'Mental Health Awareness',
      type: 'good',
      categories: ['color', 'composition'],
      description: 'Proper gradient usage with emotional impact',
      annotations: [
        { x: 50, y: 30, label: 'Deep Dark gradient' },
        { x: 50, y: 70, label: 'Yellow accent for emphasis' }
      ]
    }
  ]

  useEffect(() => {
    setExamples(exampleData)
  }, [])

  const filteredExamples = examples.filter(example => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'good' || activeFilter === 'bad') {
      return example.type === activeFilter
    }
    return example.categories.includes(activeFilter)
  })

  const openLightbox = (example, index) => {
    setSelectedExample(example)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedExample(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredExamples.length) % filteredExamples.length
    setCurrentIndex(newIndex)
    setSelectedExample(filteredExamples[newIndex])
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredExamples.length
    setCurrentIndex(newIndex)
    setSelectedExample(filteredExamples[newIndex])
  }

  return (
    <section id="examples" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Brand Examples</h2>
          <p className="section-subtitle">
            Real-world examples demonstrating proper brand application. Learn from both good and bad implementations.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className={styles.examplesGrid}>
          {filteredExamples.length > 0 ? (
            filteredExamples.map((example, index) => (
              <div 
                key={example.id} 
                className={styles.exampleCard}
                onClick={() => openLightbox(example, index)}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}>
                    <Zap size={48} />
                    <p>Example Image</p>
                    <small>{example.file}</small>
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`${styles.badge} ${styles[example.type]}`}>
                    {example.type === 'good' ? <Check size={16} /> : <X size={16} />}
                    {example.type === 'good' ? 'Good' : 'Avoid'}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{example.title}</h3>
                  <p className={styles.cardDescription}>{example.description}</p>
                  
                  <div className={styles.tags}>
                    {example.categories.map(cat => (
                      <span key={cat} className={styles.tag}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <Zap size={64} />
              <h3>No Examples Found</h3>
              <p>Add example images to <code>public/assets/examples/</code></p>
              <p className={styles.hint}>
                Expected files: good-social-post-1.png, good-poster-1.png, mental-health-poster.png
              </p>
            </div>
          )}
        </div>

        {/* Best Practices Summary */}
        <div className={styles.bestPractices}>
          <h3 className={styles.practicesTitle}>Key Takeaways</h3>
          
          <div className={styles.practicesGrid}>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon} style={{ backgroundColor: 'var(--color-deep-teal)' }}>
                <Check size={24} />
              </div>
              <h4>Good Examples Show:</h4>
              <ul>
                <li>Proper color usage following brand guidelines</li>
                <li>Clear visual hierarchy with brand typography</li>
                <li>Appropriate white space and composition</li>
                <li>Consistent brand voice and messaging</li>
                <li>High contrast for readability</li>
              </ul>
            </div>

            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon} style={{ backgroundColor: 'var(--color-crimson)' }}>
                <X size={24} />
              </div>
              <h4>Avoid Examples Show:</h4>
              <ul>
                <li>Improper color combinations or usage</li>
                <li>Poor typography choices or hierarchy</li>
                <li>Cluttered compositions without focus</li>
                <li>Off-brand messaging or tone</li>
                <li>Low contrast or readability issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedExample && (
        <Modal isOpen={!!selectedExample} onClose={closeLightbox} size="large">
          <div className={styles.lightbox}>
            {/* Navigation Arrows */}
            <button 
              className={`${styles.navButton} ${styles.prev}`}
              onClick={goToPrevious}
              aria-label="Previous example"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.next}`}
              onClick={goToNext}
              aria-label="Next example"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image with Annotations */}
            <div className={styles.lightboxImage}>
              <div className={styles.imagePlaceholder}>
                <Zap size={64} />
                <p>{selectedExample.title}</p>
                <small>Place image at: /assets/examples/{selectedExample.file}</small>
              </div>
              
              {/* Annotation Hotspots */}
              {selectedExample.annotations && selectedExample.annotations.map((annotation, idx) => (
                <div 
                  key={idx}
                  className={styles.hotspot}
                  style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
                  title={annotation.label}
                >
                  <span className={styles.hotspotNumber}>{idx + 1}</span>
                  <div className={styles.hotspotTooltip}>{annotation.label}</div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className={styles.lightboxDetails}>
              <div className={`${styles.typeBadge} ${styles[selectedExample.type]}`}>
                {selectedExample.type === 'good' ? <Check size={20} /> : <X size={20} />}
                {selectedExample.type === 'good' ? 'Good Example' : 'Avoid This'}
              </div>
              
              <h2>{selectedExample.title}</h2>
              <p>{selectedExample.description}</p>
              
              {/* Annotations List */}
              {selectedExample.annotations && selectedExample.annotations.length > 0 && (
                <div className={styles.annotationsList}>
                  <h4>Key Points:</h4>
                  <ol>
                    {selectedExample.annotations.map((annotation, idx) => (
                      <li key={idx}>{annotation.label}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default ExamplesSection

