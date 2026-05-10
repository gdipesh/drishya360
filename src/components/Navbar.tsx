'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} aria-label="Drishya360 Home">
          <span className={styles.logoText}>Drishya</span>
          <span className={styles.logo360}>360</span>
        </a>

        <ul className={styles.links} role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Get a Quote
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Navigation menu">
          <ul role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
