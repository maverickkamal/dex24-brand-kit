import { useState, useEffect, useRef } from 'react'

/**
 * Hook for lazy loading images and components
 * @param {Object} options - Intersection Observer options
 * @returns {[ref, isVisible]} - Ref to attach and visibility status
 */
export function useLazyLoad(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0.01
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.root, options.rootMargin, options.threshold])

  return [ref, isVisible]
}

/**
 * Lazy loading image component wrapper
 */
export function LazyImage({ src, alt, className, ...props }) {
  const [ref, isVisible] = useLazyLoad()
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div ref={ref} className={className} {...props}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  )
}

