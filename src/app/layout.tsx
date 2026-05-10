import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drishya360.com.np'),
  title: {
    default: 'Drishya360 — Immersive 360° Virtual Tours in Nepal',
    template: '%s | Drishya360',
  },
  description:
    'Premium 360° virtual tours for hotels, resorts, homestays, and real estate in Pokhara and Nepal. Powered by Insta360 X5. Let your guests explore before they arrive.',
  keywords: [
    'virtual tour Nepal',
    'virtual tour Pokhara',
    '360 virtual tour Nepal',
    'hotel virtual tour Nepal',
    'real estate virtual tour Nepal',
    'Pokhara resort virtual tour',
    'immersive tour Nepal',
    'Drishya360',
    'virtual tour Gandaki',
    '360 photography Nepal',
  ],
  authors: [{ name: 'Drishya360', url: 'https://drishya360.com' }],
  creator: 'Drishya360',
  publisher: 'Drishya360',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drishya360.com',
    siteName: 'Drishya360',
    title: 'Drishya360 — Immersive 360° Virtual Tours in Nepal',
    description:
      'Premium 360° virtual tours for hotels, resorts, and real estate in Pokhara & Nepal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drishya360 — Virtual Tours Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drishya360 — Immersive 360° Virtual Tours in Nepal',
    description:
      'Premium 360° virtual tours for hotels, resorts, and real estate in Pokhara & Nepal.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://drishya360.com',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Drishya360',
  description:
    'Premium 360° virtual tour services for hospitality and real estate in Nepal',
  url: 'https://drishya360.com',
  logo: 'https://drishya360.com/logo.png',
  image: 'https://drishya360.com/og-image.jpg',
  telephone: '+977-9867993572',
  email: 'growdipesh@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pokhara',
    addressLocality: 'Pokhara',
    addressRegion: 'Gandaki Pradesh',
    addressCountry: 'NP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.2096',
    longitude: '83.9856',
  },
  areaServed: [
    { '@type': 'City', name: 'Pokhara' },
    { '@type': 'Country', name: 'Nepal' },
  ],
  serviceType: ['360° Virtual Tours', 'Real Estate Photography', 'Hospitality Marketing'],
  sameAs: [
    'https://www.facebook.com/drishya360',
    'https://www.instagram.com/drishya360',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="geo.region" content="NP-GA" />
        <meta name="geo.placename" content="Pokhara, Nepal" />
        <meta name="geo.position" content="28.2096;83.9856" />
        <meta name="ICBM" content="28.2096, 83.9856" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
