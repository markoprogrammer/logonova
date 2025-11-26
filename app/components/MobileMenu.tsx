'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-primary text-2xl"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

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
          <li><a href="/nas-tim" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Naš tim</a></li>
          <li><a href="/nova-reynell-skala" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Reynell skala</a></li>
          <li><a href="#usluge" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Usluge</a></li>
          <li><a href="/cenovnik" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Cenovnik</a></li>
          <li><a href="/blog" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
          <li><a href="#kontakt" className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 hover:text-accent transition" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a></li>
        </ul>
      </div>
    </>
  )
} 