'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

const services = ['Hospitality Tour', 'Real Estate Tour', 'Destination Showcase', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault();
  setStatus('sending');
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (res.ok) setStatus('sent');
};
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.info}>
            <span className="gold-line" />
            <p className="eyebrow">Get in Touch</p>
            <h2 className={styles.title}>
              Let&apos;s Create
              <br />
              <em className={styles.titleItalic}>Something Unforgettable</em>
            </h2>
            <p className={styles.desc}>
              Whether you run a boutique hotel on Phewa Lake or manage a property portfolio
              in Kathmandu, we&apos;re here to help you showcase it. Reach out and let&apos;s talk.
            </p>

            <div className={styles.contactItems}>
              <a
                href="https://wa.me/9779867993572"
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <p className={styles.contactValue}>+977-9867993572</p>
                </div>
              </a>

              <a href="mailto:growdipesh@gmail.com" className={styles.contactItem} aria-label="Email">
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>growdipesh@gmail.com</p>
                </div>
              </a>

              <div className={styles.contactItem} aria-label="Location">
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>Pokhara, Gandaki Pradesh, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formWrap}>
            {status === 'sent' ? (
              <div className={styles.successMsg} role="status" aria-live="polite">
                <span className={styles.successIcon} aria-hidden="true">✓</span>
                <p className={styles.successTitle}>Message Received</p>
                <p className={styles.successDesc}>
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className={styles.form} role="form" aria-label="Contact form">
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+977..."
                      autoComplete="tel"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      className={`${styles.input} ${styles.select}`}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and what you need..."
                    rows={4}
                  />
                </div>

                <button
                  className={styles.submit}
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                  type="button"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                  {status !== 'sending' && <span aria-hidden="true"> →</span>}
                </button>

                <p className={styles.formNote}>
                  Or reach us directly on{' '}
                  <a
                    href="https://wa.me/9779867993572"
                    className={styles.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>{' '}
                  for a faster response.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
