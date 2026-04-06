import styles from './Hero.module.css'
import { personal } from '../data'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>
          {personal.name}
        </h1>

        <div className={styles.titleRow}>
          <span className={styles.title}>{personal.title}</span>
          <span className={styles.divider}>—</span>
          <span className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Singapore
          </span>
        </div>

        <p className={styles.tagline}>{personal.tagline}</p>

        <p className={styles.bio}>{personal.summary}</p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a href={`mailto:${personal.email}`} className={styles.btnSecondary}>
            {personal.email}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>Analytics Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>500k+</span>
            <span className={styles.statLabel}>Records Analysed</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Certifications</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
      </div>
    </section>
  )
}
