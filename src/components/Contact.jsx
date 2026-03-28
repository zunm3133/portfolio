import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { personal } from '../data'
import styles from './Contact.module.css'

export default function Contact() {
  const [ref, visible] = useReveal()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.inner} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 className={styles.heading}>Let's work<br />together.</h2>
          <p className={styles.body}>
            I'm open to Data Analyst and Developer roles. Whether you have a position, a project, or just want to talk data — I'd genuinely enjoy the conversation.
          </p>

          <div className={styles.contactItems}>
            <a href={`mailto:${personal.email}`} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactVal}>{personal.email}</div>
              </div>
            </a>
            <a href={`tel:${personal.phone}`} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactVal}>{personal.phone}</div>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactVal}>linkedin.com/in/zunmyathsu</div>
              </div>
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div>
                <div className={styles.contactLabel}>GitHub</div>
                <div className={styles.contactVal}>github.com/zunmyathsu</div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                required
              />
            </div>
            <button type="submit" className={`${styles.submit} ${sent ? styles.sent : ''}`}>
              {sent ? (
                <>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
