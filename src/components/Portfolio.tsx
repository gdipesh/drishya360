"use client";
import { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";

const placeholders: {
  id: number;
  title: string;
  location: string;
  category: string;
  aspect: string;
  embedUrl?: string; // ← the ? makes it optional
}[] = [
  {
    id: 1,
    title: "Jamghat Restaurant & Sekuwa Corner",
    location: "Garamani,Birtamode Nepal",
    category: "Hospitality",
    aspect: "square",
    embedUrl: "https://pano.cool/@bihih679673DNSG7RI/reshab-resturant",
  },
  // {
  //   id: 2,
  //   title: "Himalayan View Resort",
  //   location: "Sarangkot, Nepal",
  //   category: "Hospitality",
  //   aspect: "tall",
  // },
  // {
  //   id: 3,
  //   title: "Heritage Homestay",
  //   location: "Bandipur, Nepal",
  //   category: "Hospitality",
  //   aspect: "square",
  // },
  // {
  //   id: 4,
  //   title: "Luxury Villa",
  //   location: "Pokhara, Nepal",
  //   category: "Real Estate",
  //   aspect: "square",
  // },
  // {
  //   id: 5,
  //   title: "Annapurna Basecamp Trail",
  //   location: "Annapurna, Nepal",
  //   category: "Destination",
  //   aspect: "wide",
  // },
];

export default function Portfolio() {
  const [fullscreenId, setFullscreenId] = useState<number | null>(null);

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenId(null);
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);
  return (
    <section id="portfolio" className={`${styles.portfolio} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className="gold-line" />
          <p className="eyebrow">Our Work</p>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.intro}>
            Tours launching soon. Every property below is a glimpse of what we
            will deliver — immersive, high-fidelity, and ready to embed on any
            website.
          </p>
        </div>

        <div className={styles.grid}>
          {placeholders.map((item) => (
            <article
              id={`tour-${item.id}`}
              key={item.id}
              className={`${styles.card} ${styles[item.aspect]}`}
            >
              {item.embedUrl ? (
                <>
                  <iframe
                    src={item.embedUrl}
                    className={styles.tourFrame}
                    allow="vr; gyroscope; accelerometer; fullscreen"
                    allowFullScreen
                    frameBorder="0"
                    title={item.title}
                  />
                  <button
                    className={styles.fullscreenBtn}
                    onClick={() => {
                      const el = document.getElementById(`tour-${item.id}`);
                      el?.requestFullscreen();
                      setFullscreenId(item.id);
                    }}
                    aria-label="Open fullscreen"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                    Fullscreen
                  </button>
                </>
              ) : (
                <div className={styles.placeholder} aria-hidden="true">
                  <div className={styles.placeholderRing}>
                    <svg viewBox="0 0 120 120" fill="none">
                      <circle
                        cx="60"
                        cy="60"
                        r="56"
                        stroke="rgba(201,169,110,0.3)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="40"
                        stroke="rgba(201,169,110,0.2)"
                        strokeWidth="0.5"
                        strokeDasharray="3 6"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="8"
                        fill="rgba(201,169,110,0.15)"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="3"
                        fill="rgba(201,169,110,0.5)"
                      />
                      <line
                        x1="60"
                        y1="4"
                        x2="60"
                        y2="20"
                        stroke="rgba(201,169,110,0.3)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="60"
                        y1="100"
                        x2="60"
                        y2="116"
                        stroke="rgba(201,169,110,0.3)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="4"
                        y1="60"
                        x2="20"
                        y2="60"
                        stroke="rgba(201,169,110,0.3)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="100"
                        y1="60"
                        x2="116"
                        y2="60"
                        stroke="rgba(201,169,110,0.3)"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <span className={styles.comingSoon}>
                    360° Tour Coming Soon
                  </span>
                </div>
              )}

              {/* info: always show, but hide when this card is fullscreen */}

              <div className={styles.info}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardLocation}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.location}
                </p>
              </div>

              {!item.embedUrl && (
                <div className={styles.hoverOverlay} aria-hidden="true">
                  <span className={styles.viewBtn}>Preview Tour</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Are you a property owner or developer?{" "}
          <a href="#contact" className={styles.noteLink}>
            Enquire about being our next featured project →
          </a>
        </p>
      </div>
    </section>
  );
}
