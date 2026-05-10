import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Hospitality Tours',
    subtitle: 'Hotels · Resorts · Homestays',
    description:
      'Let guests explore your property before booking — every room, lobby, pool, and viewpoint captured in breathtaking 360° detail. Proven to increase booking conversions and reduce cancellations.',
    features: ['Room walkthroughs', 'Common area tours', 'View showcases', 'Web embeddable'],
  },
  {
    number: '02',
    title: 'Real Estate',
    subtitle: 'Properties · Apartments · Land',
    description:
      'Give buyers a complete sense of space, layout, and light without being there in person. Ideal for diaspora buyers, international investors, and remote clients considering Nepal properties.',
    features: ['Full property walkthrough', 'Floor plan overlays', 'Measurement ready', 'Shareable links'],
  },
  {
    number: '03',
    title: 'Destination Showcase',
    subtitle: 'Trekking · Heritage · Experience',
    description:
      'Capture the raw beauty of Nepal\'s landscapes, temples, and trekking routes. Perfect for tourism boards, travel operators, and destination marketing organisations.',
    features: ['Panoramic vistas', 'Trail previews', 'Cultural sites', 'Social media ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className={`${styles.services} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className="gold-line" />
          <p className="eyebrow">What We Do</p>
          <h2 className={styles.title}>
            Immersive Experiences
            <br />
            <em className={styles.titleItalic}>Crafted for Nepal</em>
          </h2>
          <p className={styles.intro}>
            Using the Insta360 X5 — one of the world&apos;s most advanced 360° cameras — we
            create ultra-high-resolution virtual environments that captivate, convert, and
            inspire.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <article key={service.number} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{service.number}</span>
                <div className={styles.titleGroup}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardSubtitle}>{service.subtitle}</p>
                </div>
              </div>

              <div className={styles.divider} />

              <p className={styles.description}>{service.description}</p>

              <ul className={styles.features} role="list">
                {service.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Camera callout */}
        <div className={styles.cameraCallout}>
          <div className={styles.cameraIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <circle cx="12" cy="12" r="3.5" />
              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0" />
              <path d="M12 2v2M12 20v2M2 12H4M20 12h2" />
            </svg>
          </div>
          <div className={styles.cameraText}>
            <p className={styles.cameraTitle}>Shot with Insta360 X5</p>
            <p className={styles.cameraDesc}>
              8K resolution · AI-powered stabilisation · Professional-grade 360° imagery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
