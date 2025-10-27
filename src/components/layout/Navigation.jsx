import styles from './Navigation.module.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'images', label: 'Images & Composition' },
  { id: 'logos', label: 'Logos' },
  { id: 'examples', label: 'Examples' },
  { id: 'guidelines', label: 'Guidelines' }
]

function Navigation({ activeSection, isMobile, onLinkClick }) {
  const handleClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      onLinkClick()
    }
  }

  return (
    <nav className={isMobile ? styles.mobileNav : styles.desktopNav}>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.id} className={styles.navItem}>
            <a
              href={`#${item.id}`}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

