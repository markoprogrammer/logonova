import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master Logoped',
  description: 'Profesionalni logopedski kabinet u Kragujevcu. Profesionalna logopedska usluga za decu - dijagnostika, terapija i savetovanje. Individualni pristup i savremene metode. Zakazivanje: 063 8703545',
  keywords: 'logoped Kragujevac, logopedski kabinet Kragujevac, Ana Novakovic logoped, govorno-jezičke poteškoće, terapija govora, logopedija Kragujevac, logopedski tretman, govorno-jezički razvoj, logoped za decu Kragujevac, logopedska terapija Kragujevac',
  openGraph: {
    title: 'Logopedski kabinet LOGONOVA Kragujevac | Ana Novakovic - Master Logoped',
    description: 'Profesionalni logopedski kabinet u Kragujevcu. Profesionalna logopedska usluga za decu - dijagnostika, terapija i savetovanje. Individualni pristup i savremene metode.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    images: [
      {
        url: '/455379179.png',
        width: 1200,
        height: 630,
        alt: 'Logopedski kabinet LOGONOVA Kragujevac - Profesionalna logopedska usluga',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    icon: '/favicon.svg',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="RS" />
        <meta name="geo.placename" content="Kragujevac" />
        <meta name="geo.position" content="44.0165;20.9202" />
        <meta name="ICBM" content="44.0165, 20.9202" />
      </head>
      <body>{children}</body>
    </html>
  )
} 