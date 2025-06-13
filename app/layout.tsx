import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logopedski kabinet LOGONOVA - Ana Novakovic',
  description: 'Profesionalna logopedska usluga za sve uzraste u Kragujevcu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
} 