import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://logonova.rs'),
  title: {
    default: 'Privatni logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master defektologije logoped',
    template: '%s | LOGONOVA Kragujevac'
  },
  description: 'Privatni logopedski kabinet LOGONOVA u Kragujevcu sa stručnim timom Ana Novaković i Marijana Mrmošanin. Profesionalna logopedska i defektološka usluga za decu - dijagnostika, terapija i savetovanje. Privatni logoped i defektolog sa individualnim pristupom. Zakazivanje: 063 8703545',
  keywords: 'privatni logoped Kragujevac, privatni defektolog Kragujevac, Marijana Mrmošanin defektolog logoped, Marijana Mrmošanin reedukator psihomotorike Kragujevac, UKC Kragujevac defektolog, privatni logopedski kabinet Kragujevac, privatna logopedska praksa, privatni tretman govora, logoped Kragujevac, logopedski kabinet Kragujevac, Ana Novakovic master defektologije logoped, Marijana Mrmošanin autizam, Marijana Mrmošanin disleksija, govorno-jezičke poteškoće, terapija govora, logopedija Kragujevac, logopedski tretman, govorno-jezički razvoj, logoped za decu Kragujevac, logopedska terapija Kragujevac, privatna defektološka dijagnostika, privatni psiholog Kragujevac, reedukacija psihomotorike Kragujevac, klinički defektolog Kragujevac, priprema za školu, fonološka svesnost, grafomotorika, najbolji logoped Kragujevac, privatni logoped centar Kragujevac, logopedska dijagnostika, govorna terapija deca, privatna psihomotorna terapija, kasno progovaranje Kragujevac, mentalna ometenost logoped, tikovi tretman Kragujevac, mucanje terapija',
  authors: [
    { name: 'Ana Novakovic', url: 'https://logonova.rs' },
    { name: 'Marijana Mrmošanin', url: 'https://logonova.rs/nas-tim' }
  ],
  creator: 'Ana Novakovic',
  publisher: 'LOGONOVA',
  category: 'Healthcare',
  openGraph: {
    title: 'Privatni logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master defektologije logoped',
    description: 'Privatni logopedski kabinet LOGONOVA u Kragujevcu sa stručnim timom Ana Novaković i Marijana Mrmošanin. Profesionalna logopedska i defektološka usluga za decu - dijagnostika, terapija i savetovanje.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs',
    images: [
      {
        url: '/IMG_8035.webp',
        width: 1200,
        height: 630,
        alt: 'Logopedski kabinet LOGONOVA Kragujevac - Profesionalna logopedska usluga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privatni logopedski kabinet LOGONOVA Kragujevac',
    description: 'Privatni logopedski kabinet za decu u Kragujevcu. Tim: Ana Novaković i Marijana Mrmošanin, privatni logoped i defektolog.',
    images: ['/IMG_8035.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Q5qUMMwzXOJ9j0n5KJVbhTP4z1CPRxMDACLBVbWIGpM',
  },
  alternates: {
    canonical: 'https://logonova.rs',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  other: {
    'google-site-verification': 'Q5qUMMwzXOJ9j0n5KJVbhTP4z1CPRxMDACLBVbWIGpM',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <head>
        {/* Critical resource preloading */}
        <link rel="preload" href="/IMG_8035.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        
        {/* Critical inline CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-loading { background: linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 100%); }
            .text-primary { color: #1e3a8a; }
            .text-accent { color: #fbbf24; }
            .bg-accent { background-color: #fbbf24; }
            .bg-primary { background-color: #1e3a8a; }
          `
        }} />
        
        <meta name="geo.region" content="RS" />
        <meta name="geo.placename" content="Kragujevac" />
        <meta name="geo.position" content="44.0165;20.9202" />
        <meta name="ICBM" content="44.0165, 20.9202" />
      </head>
      <body>{children}</body>
    </html>
  )
} 