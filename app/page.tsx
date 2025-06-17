import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data for Local Business */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Logopedski kabinet LOGONOVA Kragujevac",
            "image": "https://logonova.rs/455379179.png",
            "description": "Profesionalna logopedska usluga u Kragujevcu. Individualni pristup, dijagnostika i terapija govorno-jezičkih poteškoća za decu.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Andre Marinković 30",
              "addressLocality": "Kragujevac",
              "postalCode": "34000",
              "addressCountry": "RS"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.0165",
              "longitude": "20.9202"
            },
            "url": "https://logonova.rs",
            "telephone": "+381638703545",
            "email": "ana.novakovic@logonova.rs",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "areaServed": {
              "@type": "City",
              "name": "Kragujevac"
            },
            "medicalSpecialty": "Speech Therapy",
            "sameAs": [
              "https://www.facebook.com/logonova",
              "https://www.instagram.com/logonova"
            ]
          })
        }}
      />

      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
          <span className="ml-2 text-accent font-bold text-xl md:text-2xl">&#9829;</span>
        </div>
        <ul className="flex flex-wrap space-x-4 md:space-x-8 text-primary font-semibold text-base md:text-lg mt-2 md:mt-0">
          <li><a href="#pocetna" className="hover:text-accent transition">Početna</a></li>
          <li><a href="#onama" className="hover:text-accent transition">O nama</a></li>
          <li><a href="#usluge" className="hover:text-accent transition">Usluge</a></li>
          <li><a href="#kontakt" className="hover:text-accent transition">Kontakt</a></li>
        </ul>
      </nav>

      {/* Hero Section - fully responsive, vibrant colors */}
      <section id="pocetna" className="w-full bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 gap-8">
          {/* Text content */}
          <div className="flex-1 max-w-xl flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight">Logopedski kabinet LOGONOVA</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-4">Ana Novaković, master logoped</h2>
            <p className="text-secondary text-base sm:text-lg md:text-xl font-medium mb-6">Stručna logopedska podrška za decu u Kragujevcu.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors text-lg md:text-xl">Zakažite termin</a>
              <a href="tel:+381638703545" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors text-lg md:text-xl">063 8703545</a>
            </div>
          </div>
          {/* Image on the right (or above on mobile) */}
          <div className="flex-1 flex justify-center md:justify-end w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/455379179.png"
                alt="Logopedski kabinet LOGONOVA Kragujevac - Profesionalna logopedska usluga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section id="onama" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">O nama</h2>
          <p className="text-gray-700 text-lg text-center mb-6">Pomažemo deci da razviju svoje govorne i jezičke veštine kroz individualni pristup i savremene metode. Vaše poverenje nam je važno, a napredak svakog klijenta naš je najveći uspeh.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Naša misija</h3>
              <p className="text-gray-700">Pružamo kvalitetnu logopedsku uslugu u Kragujevcu, fokusirajući se na individualne potrebe svakog deteta i njegove porodice. Naš cilj je da svako dete dostigne svoj puni govorno-jezički potencijal.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Naš pristup</h3>
              <p className="text-gray-700">Kombinujemo tradicionalne i savremene metode terapije, prilagođavajući se specifičnim potrebama svakog klijenta. Svaka terapija je jedinstvena i prilagođena individualnim potrebama deteta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section id="usluge" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">Usluge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">Dijagnostika</h3>
              <p className="text-secondary font-medium">Detaljna procena govorno-jezičkih sposobnosti</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">Terapija</h3>
              <p className="text-secondary font-medium">Individualni tretmani za decu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">Savetovanje</h3>
              <p className="text-secondary font-medium">Podrška i smernice za roditelje i porodicu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Kontaktirajte nas</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary text-xl mr-4" />
              <div>
                <p className="font-semibold">Adresa:</p>
                <p>Andre Marinković 30, Kragujevac 34000</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-primary text-xl mr-4" />
              <div>
                <p className="font-semibold">Telefon:</p>
                <p><a href="tel:+381638703545" className="hover:text-accent">063 8703545</a></p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-primary text-xl mr-4" />
              <div>
                <p className="font-semibold">Email:</p>
                <p><a href="mailto:ana.novakovic@logonova.rs" className="hover:text-accent">ana.novakovic@logonova.rs</a></p>
              </div>
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