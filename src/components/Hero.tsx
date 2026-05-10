import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Decorative 360 ring */}
      <div className={styles.ring} aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" stroke="rgba(201,169,110,0.12)" strokeWidth="1" />
          <circle cx="250" cy="250" r="200" stroke="rgba(201,169,110,0.08)" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="160" stroke="rgba(201,169,110,0.05)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Background grid pattern */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <p className={`eyebrow animate-fade-up`} aria-label="Based in Pokhara, Nepal">
          Pokhara · Nepal · Est. 2025
        </p>

        <h1 className={`${styles.headline} animate-fade-up delay-1`}>
          <span className={styles.headlineLight}>The World</span>
          <br />
          <span className={`${styles.headlineBold} gold-shimmer`}>Seen in Full.</span>
        </h1>

        <p className={`${styles.subline} animate-fade-up delay-2`}>
          Premium 360° virtual tours for hotels, resorts, homestays,
          <br className={styles.desktopBreak} />
          and real estate across Nepal.
        </p>

        <div className={`${styles.actions} animate-fade-up delay-3`}>
          <a href="#portfolio" className={styles.btnPrimary}>
            View Portfolio
            <span className={styles.btnArrow} aria-hidden="true">→</span>
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Start a Project
          </a>
        </div>

        <div className={`${styles.stats} animate-fade-up delay-4`} aria-label="Business highlights">
          <div className={styles.stat}>
            <span className={styles.statNum}>360°</span>
            <span className={styles.statLabel}>Immersive</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>8K</span>
            <span className={styles.statLabel}>Resolution</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>NP</span>
            <span className={styles.statLabel}>Based Locally</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

      {/* Bottom gradient fade */}
      <div className={styles.fadeBottom} aria-hidden="true" />
    </section>
  );
}
