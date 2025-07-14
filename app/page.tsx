'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaGoogle, FaExternalLinkAlt } from 'react-icons/fa'
import Script from 'next/script'
import { useState } from 'react'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
            "image": "https://logonova.rs/IMG_8035.webp",
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
              "https://www.instagram.com/logonova",
              "https://share.google/YPEa08P7419vvdXNk"
            ]
          })
        }}
      />

      {/* Sitelinks Navigation Structure */}
      <Script
        id="sitelinks-searchbox"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://logonova.rs",
            "name": "Logopedski kabinet LOGONOVA Kragujevac",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://logonova.rs/blog?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <Script
        id="breadcrumb-navigation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Početna",
                "item": "https://logonova.rs"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Cenovnik",
                "item": "https://logonova.rs/cenovnik"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Blog",
                "item": "https://logonova.rs/blog"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Kontakt",
                "item": "https://logonova.rs#kontakt"
              }
            ]
          })
        }}
      />

      {/* Organization structured data for sitelinks */}
      <Script
        id="organization-structure"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Logopedski kabinet LOGONOVA",
            "alternateName": "LOGONOVA Kragujevac",
            "url": "https://logonova.rs",
            "logo": "https://logonova.rs/favicon.png",
            "image": "https://logonova.rs/IMG_8035.webp",
            "description": "Profesionalni logopedski kabinet u Kragujevcu. Ana Novaković, master logoped.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Andre Marinković 30",
              "addressLocality": "Kragujevac",
              "postalCode": "34000",
              "addressCountry": "RS"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+381638703545",
                "contactType": "customer service",
                "areaServed": "RS",
                "availableLanguage": ["Serbian"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/logonova",
              "https://www.instagram.com/logonova",
              "https://share.google/YPEa08P7419vvdXNk"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Logopedske usluge",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logopedska dijagnostika",
                    "description": "Detaljna procena govorno-jezičkih sposobnosti"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Individualni tretmani",
                    "description": "Terapija govorno-jezičkih poteškoća"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Savetovanje roditelja",
                    "description": "Podrška i smernice za roditelje"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Navigation */}
      <nav className="px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
            <span className="ml-2 text-accent font-bold text-xl md:text-2xl">&#9829;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-3 lg:space-x-8 text-primary font-semibold text-sm lg:text-lg">
            <li><a href="#pocetna" className="hover:text-accent transition">Početna</a></li>
            <li><a href="#onama" className="hover:text-accent transition">O nama</a></li>
            <li><a href="#usluge" className="hover:text-accent transition">Usluge</a></li>
            <li><a href="/cenovnik" className="hover:text-accent transition">Cenovnik</a></li>
            <li><a href="/blog" className="hover:text-accent transition">Blog</a></li>
            <li><a href="#kontakt" className="hover:text-accent transition">Kontakt</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary text-2xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <ul className="py-4">
            <li><a href="#pocetna" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Početna</a></li>
            <li><a href="#onama" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>O nama</a></li>
            <li><a href="#usluge" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Usluge</a></li>
            <li><a href="/cenovnik" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Cenovnik</a></li>
            <li><a href="/blog" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
            <li><a href="#kontakt" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="pocetna" className="w-full bg-gray-100 md:py-6">
        {/* Mobile layout - optimized image with overlay */}
        <div className="md:hidden relative w-full h-[89vh] overflow-hidden">
          <Image
            src="/IMG_8035.webp"
            alt="Logopedski kabinet LOGONOVA Kragujevac"
            fill
            sizes="100vw"
            priority
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center pt-72">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">Logopedski kabinet LOGONOVA</h1>
            <h2 className="text-lg sm:text-xl text-white font-semibold mb-4">Ana Novaković, master logoped</h2>
            <p className="text-white text-base sm:text-lg font-medium mb-6">Stručna logopedska podrška za decu u Kragujevcu.</p>
            <div className="flex flex-col gap-4">
              <a href="#kontakt" className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors text-sm md:text-lg">Zakažite termin</a>
              <a href="tel:+381638703545" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors text-sm md:text-lg">063 8703545</a>
            </div>
          </div>
        </div>

        {/* Desktop layout - original side by side */}
        <div className="hidden md:flex container mx-auto flex-row items-center justify-between px-4 md:px-8 gap-8">
          {/* Text content */}
          <div className="flex-1 max-w-xl flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 leading-tight">Logopedski kabinet LOGONOVA</h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">Ana Novaković, master logoped</h2>
            <p className="text-secondary text-lg md:text-xl font-medium mb-6">Stručna logopedska podrška za decu u Kragujevcu.</p>
            <div className="flex flex-row gap-4">
              <a href="#kontakt" className="bg-accent text-primary px-4 py-1 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors text-xs md:text-sm lg:text-xl">Zakažite termin</a>
              <a href="tel:+381638703545" className="bg-primary text-white px-4 py-1 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors text-xs md:text-sm lg:text-xl">063 8703545</a>
            </div>
          </div>
                    {/* Image on the right */}
          <div className="flex-1 flex justify-end w-full max-w-md lg:max-w-xl">
            <div className="relative w-full">
              <Image
                src="/IMG_8035.webp"
                alt="Logopedski kabinet LOGONOVA Kragujevac - Profesionalna logopedska usluga"
                width={600}
                height={400}
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 50vw, 45vw"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px'
                }}
                priority
                quality={85}
                className="shadow-lg"
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
              <div className="flex-1">
                <p className="font-semibold">Adresa:</p>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://maps.google.com/?q=Andre+Marinković+30,+Kragujevac+34000" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent cursor-pointer"
                  >
                    Andre Marinković 30, Kragujevac 34000
                  </a>
                  <a 
                    href="https://share.google/YPEa08P7419vvdXNk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-accent transition-colors"
                    title="Pogledajte na Google Maps"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
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
            <div className="flex items-center">
              <FaGoogle className="text-primary text-xl mr-4" />
              <div>
                <p className="font-semibold">Google profil:</p>
                <p><a href="https://share.google/YPEa08P7419vvdXNk" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Pogledajte naš Google profil</a></p>
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