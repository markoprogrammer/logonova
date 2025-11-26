import Link from 'next/link'
import { FaArrowLeft, FaCertificate, FaCheckCircle, FaBook, FaUserGraduate } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nova Reynell razvojna jezička skala - Ana Novaković | LOGONOVA',
  description: 'Ana Novaković je sertifikovana za primenu Nove Reynell razvojne jezičke skale (NRJS), standardizovanog testa za procenu razvoja jezika kod dece. Profesionalna dijagnostika govorno-jezičkih sposobnosti u Kragujevcu.',
  keywords: 'Nova Reynell razvojna jezička skala, NRJS test, Reynell test, procena razvoja jezika, logopedska dijagnostika Kragujevac, Ana Novaković sertifikat, test razvoja jezika za decu, standardizovani test jezika, dijagnostika govorno-jezičkih sposobnosti',
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
  openGraph: {
    title: 'Nova Reynell razvojna jezička skala - Ana Novaković | LOGONOVA',
    description: 'Ana Novaković je sertifikovana za primenu Nove Reynell razvojne jezičke skale, standardizovanog testa za procenu razvoja jezika kod dece.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs/nova-reynell-skala',
    images: [
      {
        url: 'https://logonova.rs/IMG_8035.webp',
        width: 1200,
        height: 630,
        alt: 'Nova Reynell razvojna jezička skala - LOGONOVA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Reynell razvojna jezička skala - LOGONOVA',
    description: 'Ana Novaković je sertifikovana za primenu Nove Reynell razvojne jezičke skale.',
    images: ['https://logonova.rs/IMG_8035.webp'],
  },
  alternates: {
    canonical: 'https://logonova.rs/nova-reynell-skala',
  },
}

export default function NovaReynellSkala() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-100">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
          <span className="ml-2 text-accent font-bold text-3xl md:text-3xl">&#9829;</span>
        </Link>
        <Link href="/" className="flex items-center text-primary hover:text-accent transition">
          <FaArrowLeft className="mr-2" />
          Početna
        </Link>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white p-4 rounded-full mb-6 shadow-lg">
            <FaCertificate className="text-4xl text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nova Reynell razvojna jezička skala</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Standardizovani test za procenu razvoja jezika kod dece
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <FaCheckCircle className="text-accent" />
            <span>Ana Novaković je sertifikovana za primenu ovog testa</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* About the Test */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <FaBook className="text-2xl text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Šta je Nova Reynell razvojna jezička skala?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Nova Reynell razvojna jezička skala (NRJS) je standardizovani test koji se koristi za procenu razvoja jezika kod dece. 
                  Ovaj test je posebno važan za identifikaciju dece koja mogu imati teškoće u razvoju jezika i komunikacije.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Test procenjuje različite aspekte jezičkog razvoja uključujući razumevanje jezika, produkciju jezika, 
                  kao i sposobnost komunikacije u različitim situacijama.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nova Reynell skala je široko priznata u stručnoj zajednici i koristi se za dijagnostiku i planiranje 
                  terapijskih intervencija kod dece sa govorno-jezičkim teškoćama.
                </p>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-lg mr-4">
                <FaUserGraduate className="text-2xl text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Sertifikacija Ana Novaković</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong className="text-primary">Ana Novaković</strong>, master defektologije logoped i osnivač kabineta LOGONOVA, 
                  je sertifikovana za primenu <strong className="text-primary">Nove Reynell razvojne jezičke skale</strong>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Ova sertifikacija omogućava Ani da koristi ovaj standardizovani test u profesionalnoj praksi za:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                  <li>Preciznu dijagnostiku nivoa jezičkog razvoja kod dece</li>
                  <li>Identifikaciju dece sa potencijalnim teškoćama u razvoju jezika</li>
                  <li>Planiranje individualnih terapijskih programa</li>
                  <li>Praćenje napretka tokom terapije</li>
                  <li>Pružanje objektivnih informacija roditeljima o jezičkom razvoju deteta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Zašto je važan?</h3>
              <p className="text-gray-700 leading-relaxed">
                Standardizovani testovi poput Nove Reynell skale pružaju objektivnu i pouzdanu procenu jezičkog razvoja, 
                što je ključno za rano prepoznavanje potencijalnih problema i pravovremenu intervenciju.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-3">Kada se koristi?</h3>
              <p className="text-gray-700 leading-relaxed">
                Test se koristi kod dece koja pokazuju znake kašnjenja u razvoju jezika, imaju teškoće u komunikaciji, 
                ili kada je potrebna detaljna procena jezičkih sposobnosti za planiranje terapije.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Potrebna vam je procena razvoja jezika?</h2>
            <p className="text-lg mb-6 opacity-90">
              Kontaktirajte nas da zakažete termin za dijagnostiku koristeći Nova Reynell razvojnu jezičku skalu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#kontakt" 
                className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition-colors inline-block"
              >
                Kontaktirajte nas
              </a>
              <a 
                href="/nas-tim" 
                className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Saznajte više o Ani
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Logopedski kabinet LOGONOVA Kragujevac. Sva prava zadržana.</p>
        </div>
      </footer>
    </main>
  )
}

