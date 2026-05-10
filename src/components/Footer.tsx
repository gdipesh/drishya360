import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoText}>Drishya</span>
                <span className={styles.logo360}>360</span>
              </div>
              <p className={styles.tagline}>
                Immersive 360° virtual tours for Nepal&apos;s finest
                hospitality and real estate.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/drishya360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/drishya360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.links}>
              <p className={styles.linksTitle}>Navigate</p>
              <ul className={styles.linksList}  role="list">
                {[
                  { href: '#services', label: 'Services' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#about', label: 'About' },
                  { href: '#contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.link}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <p className={styles.linksTitle}>Services</p>
              <ul className={styles.linksList}  role="list">
                {['Hospitality Tours', 'Real Estate Tours', 'Destination Showcase', 'Get a Quote'].map((s) => (
                  <li key={s}>
                    <a href="#contact" className={styles.link}>{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <p className={styles.linksTitle}>Location</p>
              <p className={styles.address}>
                Pokhara, Gandaki Pradesh<br />
                Nepal<br />
                <br />
                <a href="mailto:growdipesh@gmail.com" className={styles.link}>
                  growdipesh@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              &copy; {year} Drishya360. All rights reserved.
            </p>
            <p className={styles.location}>
              Proudly based in Pokhara, Nepal 🇳🇵
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
