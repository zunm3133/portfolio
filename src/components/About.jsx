import { useReveal } from '../hooks/useReveal'
import { personal, education, certifications } from '../data'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>About</p>
          <h2 className={styles.heading}>Analyst by craft,<br />builder by curiosity.</h2>
          <p className={styles.body}>
            I'm a Data Analyst based in Singapore with over 2 years of hands-on experience turning messy, real-world data into clean decisions. My background spans supply chain analytics, financial reporting, and full end-to-end analytics projects across healthcare, finance, e-commerce, and marketing.
          </p>
          <p className={styles.body}>
            I care deeply about the last mile — taking a finding and turning it into a recommendation a non-technical stakeholder can act on. That's what makes data useful.
          </p>
          <div className={styles.contactRow}>
            <a href={`mailto:${personal.email}`} className={styles.contactLink}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {personal.email}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Education</p>
            {education.map((e, i) => (
              <div key={i} className={styles.eduItem}>
                <div className={styles.eduDegree}>{e.degree}</div>
                <div className={styles.eduMeta}>{e.institution} · {e.year}</div>
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Certifications</p>
            {certifications.map((c, i) => (
              <div key={i} className={styles.certItem}>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.certMeta}>{c.issuer} · {c.year}</div>
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Languages</p>
            <div className={styles.langRow}>
              <span className={styles.lang}>English <span className={styles.langLevel}>Professional</span></span>
              <span className={styles.lang}>Chinese <span className={styles.langLevel}>Basic</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
