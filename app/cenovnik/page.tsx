import Link from 'next/link'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cenovnik - Privatni logoped i defektolog Kragujevac',
  description: 'Cenovnik privatnog logopedskog kabineta LOGONOVA u Kragujevcu. Privatni logoped, defektolog, pregledi, tretmani i savetovanje. Transparentne cene za privatnu logopedsku i defektološku uslugu.',
  keywords: 'privatni logoped cenovnik Kragujevac, privatni defektolog cena, privatna logopedska usluga cena, privatni tretman govora cena, privatna logopedska terapija cena, privatno savetovanje logoped, privatni psiholog cena Kragujevac, privatna dijagnostika govora',
  openGraph: {
    title: 'Cenovnik - Privatni logoped i defektolog Kragujevac | LOGONOVA',
    description: 'Cenovnik privatnog logopedskog kabineta u Kragujevcu. Transparentne cene za privatnu logopedsku i defektološku uslugu.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs/cenovnik',
  },
  alternates: {
    canonical: 'https://logonova.rs/cenovnik',
  },
}

export default function Cenovnik() {
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Cenovnik</h1>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Prvi pregled */}
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-accent p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Prvi pregled</h3>
                <div className="text-4xl font-bold text-accent mb-4">3.500</div>
                <div className="text-gray-600 mb-6">dinara</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Detaljna procena govorno-jezičkih sposobnosti</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Izdavanje izveštaja i plan tretmana</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kontrolni pregled */}
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-primary p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Kontrolni pregled</h3>
                <div className="text-4xl font-bold text-accent mb-4">2.000</div>
                <div className="text-gray-600 mb-6">dinara</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Praćenje napretka</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Prilagođavanje tretmana</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Dodatne preporuke</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pregled sa psihologom */}
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-accent p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Pregled sa psihologom</h3>
                <div className="text-4xl font-bold text-accent mb-4">5.000</div>
                <div className="text-gray-600 mb-6">dinara</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Zajednička procena logopeda i psihologa</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Tretmani */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Tretmani</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Tretman 30min */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Tretman 30 minuta</h3>
                <div className="text-3xl font-bold text-accent mb-2">1.300</div>
                <div className="text-gray-600">dinara</div>
              </div>

              {/* Tretman 45min */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Tretman 45 minuta</h3>
                <div className="text-3xl font-bold text-accent mb-2">1.500</div>
                <div className="text-gray-600">dinara</div>
              </div>

              {/* Tretman 1 sat */}
              <div className="bg-gray-50 rounded-lg p-8 text-center border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Tretman 1 sat</h3>
                <div className="text-3xl font-bold text-accent mb-2">1.700</div>
                <div className="text-gray-600">dinara</div>
              </div>

              {/* Logopedsko-defektološki tretman 30min */}
              <div className="bg-white rounded-lg p-8 text-center border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Logopedsko-defektološki tretman 30 minuta</h3>
                <div className="text-3xl font-bold text-accent mb-2">1.600</div>
                <div className="text-gray-600">dinara</div>
              </div>

              {/* Logopedsko-defektološki tretman 45min */}
              <div className="bg-white rounded-lg p-8 text-center border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Logopedsko-defektološki tretman 45 minuta</h3>
                <div className="text-3xl font-bold text-accent mb-2">1.900</div>
                <div className="text-gray-600">dinara</div>
              </div>

            </div>
          </div>

          {/* Savetovanje */}
          <div className="bg-primary text-white rounded-lg p-8 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Savetovanje</h2>
            <div className="text-4xl font-bold text-accent mb-4">2.000</div>
            <div className="text-xl mb-6">dinara</div>
            <p className="text-lg">Stručno savetovanje za roditelje i porodicu</p>
          </div>

          {/* Potvrda za polazak u prvi razred */}
          <div className="bg-gray-50 rounded-lg p-8 text-center mb-16 border">
            <h2 className="text-3xl font-bold text-primary mb-4">Potvrda za polazak u prvi razred</h2>
            <div className="text-4xl font-bold text-accent mb-4">2.000</div>
            <div className="text-xl text-gray-600 mb-6">dinara</div>
            <div className="max-w-md mx-auto">
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Procena školske zrelosti</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Izdavanje potvrde</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dodatne informacije */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Važne informacije</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-4">Način plaćanja</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gotovina</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-4">Otkazivanje</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Otkazivanje najmanje 24h unapred</li>
                  <li>• Promena termina bez dodatne naplate</li>
                  <li>• Fleksibilni pristup roditeljima</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Zakažite svoj termin</h3>
            <p className="text-gray-700 mb-6">Kontaktirajte nas za detaljnije informacije ili zakazivanje termina</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#kontakt" className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors">
                Kontaktirajte nas
              </Link>
              <a href="tel:+381638703545" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors">
                063 8703545
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