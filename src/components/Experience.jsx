import { useReveal } from '../hooks/useReveal'
import { experience } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className={styles.section}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Experience</p>
          <h2 className={styles.heading}>Work History</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.company}>{job.company}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.role}>{job.role}</h3>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => (
                    <li key={j} className={styles.bullet}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
