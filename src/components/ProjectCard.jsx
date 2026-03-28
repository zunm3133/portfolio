import { useState } from 'react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, delay = 0 }) {
  const [open, setOpen] = useState(false)

  const categoryColors = {
    'Data Analytics':        { bg: '#EEF4EE', text: '#3A6B3A' },
    'Marketing Analytics':   { bg: '#F0F0F8', text: '#3A3A8B' },
    'Machine Learning':      { bg: '#FFF0EE', text: '#8B3A3A' },
    'Healthcare Analytics':  { bg: '#FFF6E8', text: '#8B6A1A' },
    'Full-Stack Development':{ bg: '#F4EEF8', text: '#6A3A8B' },
  }
  const cat = categoryColors[project.category] || { bg: '#F4F2EE', text: '#4A4640' }

  return (
    <article className={styles.card} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.top}>
        <span className={styles.emoji}>{project.emoji}</span>
        <span className={styles.category} style={{ background: cat.bg, color: cat.text }}>
          {project.category}
        </span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <button
        className={`${styles.toggle} ${open ? styles.open : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Key Findings
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className={styles.findings}>
          {project.highlights.map((h, i) => (
            <li key={i} className={styles.finding}>{h}</li>
          ))}
        </ul>
      )}

      <div className={styles.tags}>
        {project.tags.map((t, i) => (
          <span key={i} className={styles.tag}>{t}</span>
        ))}
      </div>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View on GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.linkLive}`}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Dashboard
          </a>
        )}
      </div>
    </article>
  )
}
