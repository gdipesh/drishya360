import styles from './About.module.css';

const values = [
  { label: 'Precision', desc: 'Every shot composed with intention' },
  { label: 'Authenticity', desc: 'Capturing spaces as they truly are' },
  { label: 'Partnership', desc: 'Your success drives our work' },
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Story */}
          <div className={styles.story}>
            <span className="gold-line" />
            <p className="eyebrow">The Story</p>
            <h2 className={styles.title}>
              Born in Pokhara.
              <br />
              <em className={styles.titleItalic}>Built for Nepal.</em>
            </h2>
            <div className={styles.body}>
              <p>
                Nepal has always been a destination that inspires awe — from the Annapurna
                range reflecting on Phewa Lake to the quiet grandeur of ancient Newari
                courtyards. Yet most of this beauty exists only in person.
              </p>
              <p>
                Drishya360 was founded on a simple belief: potential guests, buyers, and
                travellers should be able to truly <em>see</em> a space before committing.
                Not just photographs. Not a video. A living, explorable environment.
              </p>
              <p>
                Based in Pokhara, we bring professional-grade 360° virtual tour production
                to Nepal&apos;s hospitality and real estate sectors — helping local businesses
                compete and connect with a global audience.
              </p>
            </div>

            <div className={styles.values}>
              {values.map((v) => (
                <div key={v.label} className={styles.value}>
                  <span className={styles.valueLabel}>{v.label}</span>
                  <span className={styles.valueDesc}>{v.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Gear + Visual */}
          <div className={styles.visual}>
            <div className={styles.gearCard}>
              <div className={styles.gearTop}>
                <span className="eyebrow">Our Equipment</span>
              </div>
              <div className={styles.gearHero} aria-label="Insta360 X5 camera illustration">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Camera body */}
                  <rect x="60" y="55" width="80" height="90" rx="10" fill="rgba(30,30,30,1)" stroke="rgba(201,169,110,0.4)" strokeWidth="1"/>
                  {/* Lens left */}
                  <circle cx="80" cy="80" r="18" fill="#0A0A0A" stroke="rgba(201,169,110,0.5)" strokeWidth="1"/>
                  <circle cx="80" cy="80" r="12" fill="#0A0A0A" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5"/>
                  <circle cx="80" cy="80" r="5" fill="rgba(201,169,110,0.2)"/>
                  {/* Lens right */}
                  <circle cx="120" cy="80" r="18" fill="#0A0A0A" stroke="rgba(201,169,110,0.5)" strokeWidth="1"/>
                  <circle cx="120" cy="80" r="12" fill="#0A0A0A" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5"/>
                  <circle cx="120" cy="80" r="5" fill="rgba(201,169,110,0.2)"/>
                  {/* Screen */}
                  <rect x="72" y="108" width="56" height="26" rx="3" fill="#0A0A0A" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5"/>
                  {/* Screen content lines */}
                  <line x1="78" y1="116" x2="122" y2="116" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5"/>
                  <line x1="78" y1="121" x2="108" y2="121" stroke="rgba(201,169,110,0.15)" strokeWidth="0.5"/>
                  {/* Button */}
                  <circle cx="100" cy="138" r="4" fill="rgba(201,169,110,0.15)" stroke="rgba(201,169,110,0.4)" strokeWidth="0.5"/>
                  {/* 360 rings */}
                  <circle cx="100" cy="100" r="55" stroke="rgba(201,169,110,0.06)" strokeWidth="0.5" strokeDasharray="3 5"/>
                  <circle cx="100" cy="100" r="70" stroke="rgba(201,169,110,0.04)" strokeWidth="0.5"/>
                </svg>
              </div>
              <div className={styles.gearInfo}>
                <p className={styles.gearModel}>Insta360 X5</p>
                <div className={styles.specs}>
                  <div className={styles.spec}>
                    <span className={styles.specVal}>8K</span>
                    <span className={styles.specKey}>Video</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specVal}>72MP</span>
                    <span className={styles.specKey}>Photo</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specVal}>360°</span>
                    <span className={styles.specKey}>Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className={styles.locationBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Serving all of Nepal — based in Pokhara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
