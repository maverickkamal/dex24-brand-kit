import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Accordion.module.css'

function AccordionItem({ title, children, isOpen, onToggle, icon }) {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.title}>{title}</span>
        <ChevronDown 
          className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
          size={20}
        />
      </button>
      
      <div className={`${styles.accordionContent} ${isOpen ? styles.expanded : ''}`}>
        <div className={styles.accordionInner}>
          {children}
        </div>
      </div>
    </div>
  )
}

function Accordion({ items, title, children, defaultOpen = null, allowMultiple = false, className = '' }) {
  // Support both patterns: items array OR single title+children
  const accordionItems = items || (title ? [{ title, content: children }] : [])
  
  const [openItems, setOpenItems] = useState(
    defaultOpen !== null ? [defaultOpen] : []
  )

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <div className={`${styles.accordion} ${className}`}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion

