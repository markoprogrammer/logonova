import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://logonova.rs'),
  title: {
    default: 'Logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master Logoped',
    template: '%s | LOGONOVA Kragujevac'
  },
  description: 'Profesionalni logopedski kabinet u Kragujevcu. Profesionalna logopedska usluga za decu - dijagnostika, terapija i savetovanje. Individualni pristup i savremene metode. Zakazivanje: 063 8703545',
  keywords: 'logoped Kragujevac, logopedski kabinet Kragujevac, Ana Novakovic logoped, govorno-jezičke poteškoće, terapija govora, logopedija Kragujevac, logopedski tretman, govorno-jezički razvoj, logoped za decu Kragujevac, logopedska terapija Kragujevac, priprema za školu, fonološka svesnost, grafomotorika',
  authors: [{ name: 'Ana Novakovic', url: 'https://logonova.rs' }],
  creator: 'Ana Novakovic',
  publisher: 'LOGONOVA',
  openGraph: {
    title: 'Logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master Logoped',
    description: 'Profesionalni logopedski kabinet u Kragujevcu. Profesionalna logopedska usluga za decu - dijagnostika, terapija i savetovanje. Individualni pristup i savremene metode.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs',
    images: [
      {
        url: '/IMG_8035.JPG',
        width: 1200,
        height: 630,
        alt: 'Logopedski kabinet LOGONOVA Kragujevac - Profesionalna logopedska usluga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logopedski kabinet LOGONOVA Kragujevac',
    description: 'Profesionalna logopedska usluga za decu u Kragujevcu. Individualni pristup i savremene metode.',
    images: ['/IMG_8035.JPG'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <head>
        <meta name="geo.region" content="RS" />
        <meta name="geo.placename" content="Kragujevac" />
        <meta name="geo.position" content="44.0165;20.9202" />
        <meta name="ICBM" content="44.0165, 20.9202" />
      </head>
      <body>{children}</body>
    </html>
  )
} 