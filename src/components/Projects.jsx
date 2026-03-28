import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const filters = ['All', 'Data Analytics', 'Machine Learning', 'Healthcare Analytics', 'Full-Stack Development']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, visible] = useReveal()

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active || (active === 'Data Analytics' && p.category === 'Marketing Analytics'))

  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} ${visible ? styles.visible : ''}`} ref={ref}>
        <p className={styles.sectionLabel}>Projects</p>
        <h2 className={styles.heading}>Selected Work</h2>
        <p className={styles.sub}>End-to-end analytics and development projects built on real datasets.</p>
      </div>

      <div className={styles.filterBar}>
        {filters.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
