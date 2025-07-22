import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaGraduationCap, FaCertificate, FaHeart, FaUsers } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Naš tim - Ana Novaković & Marijana Mrmošanin',
  description: 'Upoznajte naš stručni tim privatnog logopedskog kabineta LOGONOVA. Ana Novaković, privatni logoped i Marijana Mrmošanin, privatni defektolog-logoped, reedukator psihomotorike. Privatna praksa sa individualnim pristupom.',
  keywords: 'privatni logoped Ana Novaković, privatni defektolog Marijana Mrmošanin, privatni master defektologije logoped Kragujevac, privatna psihomotorika, privatni defektolog logoped, privatni stručni tim logopedija, privatni reedukator psihomotorike, privatni tim logoped Kragujevac',
  openGraph: {
    title: 'Naš tim - Ana Novaković & Marijana Mrmošanin | LOGONOVA',
    description: 'Upoznajte naš stručni tim privatnog logopedskog kabineta LOGONOVA. Ana Novaković, privatni logoped i Marijana Mrmošanin, privatni defektolog-logoped.',
    type: 'website',
    url: 'https://logonova.rs/nas-tim',
  },
  alternates: {
    canonical: 'https://logonova.rs/nas-tim',
  },
}

export default function NasTim() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-100">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
          <span className="ml-2 text-accent font-bold text-xl md:text-2xl">&#9829;</span>
        </Link>
        <Link href="/" className="flex items-center text-primary hover:text-accent transition">
          <FaArrowLeft className="mr-2" />
          Početna
        </Link>
      </nav>

      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Naš tim</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Upoznajte stručni tim koji stoji iza kvalitetne logopedske i defektološke usluge u Kragujevcu
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Ana Novaković Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/ana-novakovic.jpg"
                    alt="Ana Novaković - Master Logoped"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    quality={85}
                  />
                </div>
              </div>
              
              {/* Info */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Ana Novaković</h2>
                <h3 className="text-xl text-accent font-semibold mb-4">Master defektologije logoped</h3>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Diplomirala 2013. godine na Fakultetu za specijalnu edukaciju i rehabilitaciju u Beogradu nakon čega stiče zvanje dipl.defektolog-logoped (potvrda o izjednačavanju sa akademskim nazivom Master drugog stepena studija; od 2014.god.)
                </p>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Pripravnički staž započinje 2013.god. u razvojnom savetovalištvu Doma zdravlja u Kragujevcu, u trajanju od godinu dana nakon čega polaže državni ispit u Ministarstvu zdravlja Republike Srbije.
                </p>
                                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                     2018.god. upisuje dvosemestralnu edukaciju na Institutu za mentalno zdravlje u Beogradu i stiče sertifikat za primenu Opšte i specifične reedukacije psihomotorike sa opštom defektološkom dijagnostikom i relaksacijom, čime upotpunjuje postojeća znanja i poboljšava kvalitet usluga.
                 </p>
                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                     2018.god. Osniva logopedski kabinet LOGONOVA u Kragujevcu.
                 </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Specijalizacija</h4>
                      <p className="text-gray-700">Reedukacija psihomotorike (2018)</p>
                      <p className="text-gray-600 text-sm">Institut za mentalno zdravlje, Beograd</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaUsers className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Iskustvo</h4>
                      <p className="text-gray-700">Dugogodišnje iskustvo</p>
                      <p className="text-gray-600 text-sm">Rad u privatnoj praksi</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Licenciran stručnjak</h4>
                      <p className="text-gray-700">Državni ispit</p>
                      <p className="text-gray-600 text-sm">Ministarstvo zdravlja Republike Srbije</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marijana Mrmošanin Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/marijana-mrmosanin.jpg"
                    alt="Marijana Mrmošanin - Dipl. defektolog-logoped, reedukator psihomotorike"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    quality={85}
                  />
                </div>
              </div>
              
              {/* Info */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Marijana Mrmošanin</h2>
                <h3 className="text-xl text-accent font-semibold mb-4">Dipl. defektolog-logoped, reedukator psihomotorike</h3>
                
                <div className="text-gray-700 text-lg mb-6 leading-relaxed space-y-3">
                  <p>
                    Diplomirala 2006.god. na Fakultetu za specijalnu edukaciju i rehabilitaciju u Beogradu nakon čega stiče zvanje dipl.defektolog-logoped (potvrda o izjednačavanju sa akademskim nazivom Master drugog stepena studija; 42/330 od 2014.god.)
                  </p>
                  <p>
                    Pripravnički staž započinje 2006.god. u KC Kragujevac (Klinika za ORL i klinika za psihijatriju) u trajanju od godinu dana nakon čega polaže državni ispit u Ministarstvu zdravlja Republike Srbije.
                  </p>
                  <p>
                    Od 2008.god. radi u Klinici za psihijatriju UKC Kragujevac kao defektolog-logoped gde pruža defektološko-logopedske usluge dijagnostike i tretmana deci, u okviru Kabineta za razvojno doba, na polju kasnog progovaranja, mentalne ometenosti, poremećaja iz spektra autizma, disleksije, disgrafije, disfazije, mucanja, tikova.
                  </p>
                  <p>
                    Aktivno učestvuje na skupovima vezanim za struku.
                  </p>
                  <p>
                    2018.god. upisuje dvosemestralnu edukaciju na Institutu za mentalno zdravlje u Beogradu i stiče sertifikat za primenu Opšte i specifične reedukacije psihomotorike sa opštom defektološkom dijagnostikom i relaksacijom, čime upotpunjuje postojeća znanja i poboljšava kvalitet usluga.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Specijalizacija</h4>
                      <p className="text-gray-700">Reedukacija psihomotorike (2018)</p>
                      <p className="text-gray-600 text-sm">Institut za mentalno zdravlje, Beograd</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaUsers className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Iskustvo</h4>
                      <p className="text-gray-700">15+ godina kliničkog rada</p>
                      <p className="text-gray-600 text-sm">UKC Kragujevac, Klinika za psihijatriju</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Licenciran stručnjak</h4>
                      <p className="text-gray-700">Državni ispit (2007)</p>
                      <p className="text-gray-600 text-sm">Ministarstvo zdravlja Republike Srbije</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Philosophy */}
          <div className="bg-primary text-white rounded-lg p-8 mb-12">
            <div className="text-center">
              <FaHeart className="text-accent text-4xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Naša misija</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                "Svako dete je jedinstveno i zaslužuje individualan pristup. Naš cilj je da kroz stručnost, 
                strpljenje i empatiju pomognemo svakom detetu da dostigne svoj puni govorno-jezički i razvojni potencijal. 
                Kombinujući logopediju, defektologiju i psihologiju, verujemo da je uspeh moguć kada se 
                profesionalnost kombinuje sa iskrenom brigom za dete i njegovu porodicu."
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-accent font-semibold text-lg">- Tim LOGONOVA</p>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Zakažite konsultaciju</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Kontaktirajte nas za detaljnije informacije o našim uslugama ili za zakazivanje prvog pregleda
            </p>
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