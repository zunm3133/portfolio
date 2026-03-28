import { useReveal } from '../hooks/useReveal'
import { skills } from '../data'
import styles from './Skills.module.css'

const icons = {
  'Analytics & Data Science':  '📈',
  'Data Engineering':          '🗄️',
  'Business Intelligence':     '📊',
  'Development':               '💻',
  'Business & Strategy':       '🧭',
}

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Skills</p>
          <h2 className={styles.heading}>Technical Toolkit</h2>
          <p className={styles.sub}>Technologies and methodologies I work with day-to-day.</p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div key={i} className={styles.group} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={styles.groupTop}>
                <span className={styles.groupIcon}>{icons[group.category]}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.chips}>
                {group.items.map((item, j) => (
                  <span key={j} className={styles.chip}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
