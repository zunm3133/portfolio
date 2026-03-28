import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }) }}>
          ZMH
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <button className={styles.link} onClick={() => scrollTo(l)}>{l}</button>
            </li>
          ))}
        </ul>
        <a href="mailto:zunmyathsu31@gmail.com" className={styles.cta}>Get in Touch</a>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobile}>
          {links.map(l => (
            <button key={l} className={styles.mobileLink} onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <a href="mailto:zunmyathsu31@gmail.com" className={styles.mobileCta}>Get in Touch</a>
        </div>
      )}
    </nav>
  )
}
