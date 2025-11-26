import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaGraduationCap, FaCertificate, FaHeart, FaUsers } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Naš tim - Ana Novaković, Marijana Mrmošanin, Gorjana Milosavljević',
  description: 'Upoznajte naš stručni tim privatnog logopedskog kabineta LOGONOVA. Ana Novaković master defektologije logoped, Marijana Mrmošanin defektolog-logoped reedukator psihomotorike, Gorjana Milosavljević specijalista defektolog-oligofrenolog. Privatna praksa sa individualnim pristupom.',
  keywords: 'privatni logoped Ana Novaković, privatni defektolog Marijana Mrmošanin, Gorjana Milosavljević defektolog oligofrenolog Kragujevac, privatni master defektologije logoped Kragujevac, privatna psihomotorika, privatni defektolog logoped, privatni stručni tim logopedija, privatni reedukator psihomotorike, privatni tim logoped Kragujevac, specijalista defektolog Kragujevac, oligofrenolog Kragujevac, rana intervencija detinjstvo Kragujevac, Montessori metod Kragujevac, inkluzivno obrazovanje, senzorna integracija deca',
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
    title: 'Naš tim - Ana Novaković, Marijana Mrmošanin, Gorjana Milosavljević | LOGONOVA',
    description: 'Upoznajte naš stručni tim privatnog logopedskog kabineta LOGONOVA. Ana Novaković master defektologije logoped, Marijana Mrmošanin defektolog-logoped, Gorjana Milosavljević specijalista defektolog-oligofrenolog.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs/nas-tim',
    images: [
      {
        url: 'https://logonova.rs/IMG_8035.webp',
        width: 1200,
        height: 630,
        alt: 'LOGONOVA tim - Ana Novaković, Marijana Mrmošanin, Gorjana Milosavljević',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naš tim - LOGONOVA Kragujevac',
    description: 'Upoznajte naš stručni tim privatnog logopedskog kabineta LOGONOVA.',
    images: ['https://logonova.rs/IMG_8035.webp'],
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Naš tim</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Upoznajte stručni tim koji stoji iza kvalitetne logopedske, defektološke i psihološke usluge u Kragujevcu
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
                    src="/ana-novakovic.webp"
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
                    Pripravnički staž započinje 2013.god. u Razvojnom savetovalištvu Doma zdravlja u Kragujevcu, u trajanju od godinu dana nakon čega polaže državni ispit u Ministarstvu zdravlja Republike Srbije.
                </p>
                                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                     2018.god. upisuje dvosemestralnu edukaciju na Institutu za mentalno zdravlje u Beogradu i stiče sertifikat za primenu Opšte i specifične reedukacije psihomotorike sa opštom defektološkom dijagnostikom i relaksacijom, čime upotpunjuje postojeća znanja i poboljšava kvalitet usluga.
                 </p>
                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                     2018.god. Osniva logopedski kabinet LOGONOVA u Kragujevcu.
                 </p>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Udata je i majka dvoje dece. Iskustvo roditeljstva dodatno obogaćuje njen profesionalni pristup i razumevanje potreba kako dece tako i njihovih roditelja.
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
                    src="/marijana-mrmosanin.webp"
                    alt="Marijana Mrmošanin privatni defektolog logoped Kragujevac"
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

          {/* Gorjana Milosavljević Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/gorjana-milosavljevic.webp"
                    alt="Gorjana Milosavljević specijalista defektolog oligofrenolog Kragujevac, rana intervencija detinjstvo, Montessori metod, inkluzivno obrazovanje"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
              
              {/* Info */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Gorjana Milosavljević</h2>
                <h3 className="text-xl text-accent font-semibold mb-4">Specijalista defektolog-oligofrenolog</h3>
                
                <div className="text-gray-700 text-lg mb-6 leading-relaxed space-y-3">
                  <p><strong>RADNA BIOGRAFIJA</strong></p>
                  <p>Gorjana Milosavljević - specijalista defektolog-oligofrenolog</p>
                  <p>-diplomirala u aprilu 2009.god na FASPER-u</p>
                                     <p>-Završene Specijalističke akademske studije rane intervencije u detinjstvu (jun 2022.) na fakultetu medicinskih nauka Univerziteta u Novom Sadu, odsek za specijalnu edukaciju i rehabilitaciju, gde je stekla zvanje specijalista defektolog</p>
                  <p>-od januara 2010.do decembra 2018.god zaposlena u Školi za osnovno i srednje obrazovanje „Milan Petrović" u Novom Sadu</p>
                  <p>-od decembra 2018.pa do sada zaposlena u Školi za osnovno i srednje obrazovanje „Vukašin Marković" u Kragujevcu</p>
                  <p>-od februara 2020.rad u privatnom logopedskom kabinetu</p>
                  
                  <p><strong>Takođe poseduje:</strong></p>
                                     <p>-Potvrdu o izjednačenoj diplomi sa master drugog stepena studija (izdatu na FASPER-u 10.12.2013.god)</p>
                  <p>-Položen državni ispit i licencu za rad u prosveti (izdatu 05.06.2014.godine,Pokrajinski sekretarijat za obrazovanje AP Vojvodine, N. Sad)</p>
                                     <p>-Edukaciju u trajanju od godinu dana iz opšte i specifične reedukacije psihomotorike (2013./14., Palmotićeva, Beograd), stekla zvanje reedukator psihomotorike</p>
                  <p>-iskustva sa decom iz spektra autizma (pervazivnih razvojnih poremećaja) i višestrukih smetnji</p>
                  
                  <p><strong>Od dodatnih edukacija izdvojila bi:</strong></p>
                  <p>-Dve sa Instituta za Mentalno zdravlje (Palmotićeva,Beograd), u trajanju od po godinu dana (dva semestra):</p>
                  <p>1.Mentalna higijena razvojnog doba –zaštita i unapređenje mentalnog zdravlja dece i mladih i mentalni poremećaji i poremećaji ponašanja u detinjstvu i mladosti (2010./2011.Palmotićeva,Beograd)</p>
                  <p>2.Opšta reedukacija psihomotrike i relaksacija, i specifična reedukacija psihomotrike sa opštom defektološkom dijagnostikom (2013./2014.,Palmotićeva,Beograd)</p>
                  
                  <p>-Akreditovanih seminara poseduje preko 20, od kojih bi izdvojila sledeće, u trajanju po 2 dana:</p>
                  <p>1.Pedagški metod Marije Montesori i njegova primena u vaspitno-obrazovnom radu (novembar 2010.,N. Sad)</p>
                  <p>2.Inkluzivno obrazovanje-planiranje i izrada IOP-a (novembar 2011., N. Sad)</p>
                                     <p>3.MENSA NTC sistem učenja –razvoj kreativnog i funkcionalnog razmišljanja i efikasnog učenja (decembar 2010.i februar 2011.,N. Sad)</p>
                  <p>4.Podsticanje senzorne integracije kod dece (novembar 2013.,N.Sad)</p>
                  
                  <p>-U trajanju po jedan dan,takođe akreditovani programi:</p>
                  <p>1.Vizuelne strategije za razvoj socijalizacije i komunikacije kod dece iz spektra autizma (decembar 2012.,N.Sad)</p>
                  <p>2.Primena aplikacija kod učenika sa komunikacijskim teškoćama i problemima u učenju (jun 2019.,Kragujevac)</p>
                  <p>3.Augmentativna i alternativna komunikacija-izrada sredstava i primena u praksi(oktobar 2020.,Kragujevac)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Specijalizacija</h4>
                      <p className="text-gray-700">Specijalista defektolog-oligofrenolog</p>
                      <p className="text-gray-600 text-sm">Rana intervencija u detinjstvu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaUsers className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Iskustvo</h4>
                      <p className="text-gray-700">14+ godina rada u obrazovanju</p>
                      <p className="text-gray-600 text-sm">Škole specijalne edukacije + privatna praksa</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Licenciran stručnjak</h4>
                      <p className="text-gray-700">Državni ispit (2014)</p>
                      <p className="text-gray-600 text-sm">Pokrajinski sekretarijat za obrazovanje AP Vojvodine</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaCertificate className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Dodatne edukacije</h4>
                      <p className="text-gray-700">20+ akreditovanih seminara</p>
                      <p className="text-gray-600 text-sm">Montessori, inkluzivno obrazovanje, senzorna integracija</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ljubica Milosavljević Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/ljubica.webp"
                    alt="Ljubica Milosavljević psiholog Kragujevac"
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
                <h2 className="text-3xl font-bold text-primary mb-2">Ljubica Milosavljević</h2>
                <h3 className="text-xl text-accent font-semibold mb-4">Dipl. psiholog, porodični psihoterapeut</h3>
                
                <div className="text-gray-700 text-lg mb-6 leading-relaxed space-y-3">
                  <p>
                    Diplomirala je 2011. godine na Filozofskom fakultetu, odeljenje za Psihologiju, u Beogradu, nakon čega je stekla zvanje dipl. psihologa.
                  </p>
                  <p>
                    Na odeljenju za Psihologiju, u Kragujevcu je 2 godine kao stručni saradnik držala studentima vežbe na predmetima Razvojna psihopatologija i Psihologija porodice.
                  </p>
                  <p>
                    Od 2014. godine radila je kao asistent deteta sa autizmom i kao nastavnik psihologije u muzičkoj školi "Dr Miloje Milojević" i Drugoj tehničkoj školi u Kragujevcu. Godine 2016. otišla je za Ameriku na praksu u Anderson centar za autizam i tamo je stekla sertifikate i znanja potrebna za RBT (registrovanog bihejvioralnog tehničara).
                  </p>
                  <p>
                    Po povratku iz Amerike odlučila je da započne svoju privatnu praksu. U oktobru 2017. godine otvorila je edukativni centar koji je namenjen deci kojoj je potrebna podrška u razvoju, učenju, ponašanju i emocionalnom reagovanju.
                  </p>
                  <p>
                    2018. godine upisala je četvorogodišnju edukaciju iz Sistemske porodične terapije na Institutu za mentalno zdravlje u Beogradu i stekla sertifikat porodičnog terapeuta, čime je upotpunila postojeća znanja, poboljšala kvalitet postojećih usluga i proširila svoje područje rada i na odrasle.
                  </p>
                  <p>
                    Osim toga, aktivno učestvuje na skupovima vezanim za struku. U organizaciji Centra za primenjenu psihologiju 2020. godine završila je uvodni kurs: "Dijagnostika neurorazvojnih problema kod dece" čiji je osnovni cilj unapređenje kompetencija stručnjaka za rano prepoznavanje, dijagnostiku, tretman i praćenje dece sa neurorazvojnim problemima.
                  </p>
                  <p>
                    Takođe od 2017. godine aktivno učestvuje u programima za podršku ženama, žrtvama porodičnog nasilja.
                  </p>
                </div>

                {/* Call to Action for Ljubica's Website */}
                <div className="mt-8 mb-6 text-center">
                  <div className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                    <p className="text-gray-600 mb-4 text-sm">Saznajte više o mojim uslugama</p>
                    <a 
                      href="https://www.psihologijam.rs/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-gradient-to-r from-accent to-yellow-300 text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                      <span className="mr-2">🌐</span>
                      Saznajte više
                      <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Obrazovanje i sertifikati */}
                <div className="mt-8 mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-6 text-center">Obrazovanje i sertifikati</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-1 bg-accent mr-4 mt-1 h-16 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Diplomski studije</h4>
                      <p className="text-gray-700">Filozofski fakultet, Psihologija</p>
                      <p className="text-gray-600 text-sm">Beograd, 2011</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-1 bg-accent mr-4 mt-1 h-16 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Sistemska porodična terapija</h4>
                      <p className="text-gray-700">Institut za mentalno zdravlje</p>
                      <p className="text-gray-600 text-sm">Beograd, 2018</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-1 bg-accent mr-4 mt-1 h-16 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">RBT sertifikat</h4>
                      <p className="text-gray-700">Anderson centar za autizam</p>
                      <p className="text-gray-600 text-sm">Amerika, 2016</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-1 bg-accent mr-4 mt-1 h-16 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Dijagnostika neurorazvojnih problema</h4>
                      <p className="text-gray-700">Centar za primenjenu psihologiju</p>
                      <p className="text-gray-600 text-sm">2020</p>
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