# Drishya360 — Virtual Tour Portfolio Website

Premium 360° virtual tour portfolio built with Next.js 15 (static export), optimised for SEO and GEO targeting in Nepal.

---

## Stack

- **Next.js 15** — App Router, static export (`output: 'export'`)
- **TypeScript** — full type safety
- **CSS Modules** — scoped, zero-runtime styling
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Preview the built site
npx serve out
```

The `out/` folder contains the fully static site ready for any host.

---

## Deployment Options

### Option A — Vercel (Recommended, free tier)
1. Push this repo to GitHub
2. Connect to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Next.js — deploy

### Option B — Netlify
1. `npm run build`
2. Upload the `out/` folder to Netlify Drop, or connect GitHub repo
3. Set publish directory to `out`

### Option C — Your own VPS / cPanel
1. `npm run build`
2. Upload contents of `out/` to your web root (public_html or similar)
3. Point your domain DNS to the server

---

## Customisation Checklist

### Essential (do these first)
- [ ] Replace `+977-XXXXXXXXXX` with your real WhatsApp number in:
  - `src/components/Contact.tsx`
  - `src/components/Footer.tsx`
- [ ] Replace `hello@drishya360.com` with your real email
- [ ] Update `https://drishya360.com` with your actual domain in:
  - `src/app/layout.tsx` (metadataBase, canonicals)
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- [ ] Add real social media URLs in `src/app/layout.tsx` (sameAs) and `src/components/Footer.tsx`

### Add your images
- `/public/og-image.jpg` — 1200×630px, for social sharing previews
- `/public/favicon.ico` — 32×32px browser tab icon
- `/public/logo.png` — your logo

### Wire up the contact form
In `src/components/Contact.tsx`, replace the fake `setTimeout` with a real form submission.

**Recommended options:**
- **Formspree** — free tier, just POST to `https://formspree.io/f/YOUR_FORM_ID`
- **Netlify Forms** — add `data-netlify="true"` if deploying to Netlify
- **EmailJS** — sends directly from frontend

Example with Formspree:
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Replace portfolio placeholders
When you have real tours, replace the placeholder cards in `src/components/Portfolio.tsx`.

For Matterport or Kuula 360° embeds:
```tsx
<iframe
  src="https://kuula.co/share/YOUR_TOUR_ID"
  width="100%"
  height="500"
  allow="vr"
  frameBorder="0"
/>
```

---

## SEO Features Included

- `<title>` and `<meta description>` via Next.js Metadata API
- Open Graph + Twitter Card tags
- `sitemap.xml` auto-generated
- `robots.txt` auto-generated
- **JSON-LD structured data** (LocalBusiness schema)
- **GEO meta tags** — geo.region, geo.placename, geo.position, ICBM
- Canonical URL
- Semantic HTML throughout (landmarks, headings, lists, aria-labels)

---

## Performance

- Static export = instant CDN delivery, no server needed
- Google Fonts loaded with `display: swap` (no FOUT blocking)
- CSS Modules = zero unused styles in production
- No client-side JS except Navbar (mobile menu) and Contact form

---

## Brand Colours

```css
--gold:       #C9A96E   /* Primary gold */
--gold-light: #E8D5B0   /* Hover gold */
--gold-dark:  #8A6A3A   /* Dark gold */
--obsidian:   #0A0A0A   /* Main background */
--charcoal:   #141414   /* Section alternate */
--slate:      #1E1E1E   /* Cards */
--mist:       #F5F3EF   /* Primary text */
--smoke:      #9A9690   /* Secondary text */
--ash:        #6B6760   /* Muted text */
```

---

Built for **Drishya360** — Pokhara, Nepal 🇳🇵
