import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaCalendar, FaUser } from 'react-icons/fa'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SocialShare from '../components/SocialShare'

const blogPosts = {
  'razvoj-govora-i-glasovi': {
    title: 'Razvoj govora i pravilno izgovaranje glasova kod dece',
    date: '27. jul 2025',
    author: 'Ana Novaković',
    readTime: '12 min čitanja',
    category: 'Razvoj govora',
    tags: ['dislalija', 'razvojne norme', 'logopedska terapija', 'razvoj deteta'],
    intro: 'Za posetu logopedu nikada nije prerano, jer je govor složen proces koji se razvija od rođenja. Ukoliko roditelji imaju pitanja i nedoumice, treba da potražuju pomoć stručnjaka. Ovo je sveobuhvatan vodič kroz razvoj govora i izgovaranje glasova kod dece.',
    content: [
      {
        title: 'Kada je potrebna logopedska pomoć?',
        emoji: '🩺',
        items: [
          'Za posetu logopedu nikada nije prerano - govor se razvija od rođenja.',
          'Jedan od najčešćih razloga za traženje stručne pomoći je nepravilan izgovor glasova (dislalija).',
          'Uzrok nastanka poremećaja izgovora glasova nije uvek lako utvrditi.',
          'Važno je pravovremeno reagovati na uočene poteškoće u razvoju govora.'
        ]
      },
      {
        title: 'Uzroci poremećaja izgovora glasova',
        emoji: '🔍',
        items: [
          'Uzroci mogu biti organski ili funkcionalni.',
          '',
          '📍 ORGANSKI UZROCI:',
          '• Rascep usne i/ili nepca',
          '• Visoko nepce',
          '• Protruzija donje vilice',
          '• Kratka podjezična veza (srcoliki izgled jezika)',
          '• Nedovoljna pokretljivost jezika',
          '• Oštećenje sluha',
          '',
          '📍 FUNKCIONALNI UZROCI:',
          '• Loš govorni uzor',
          '• Infantilni govor',
          '• Bilingvizam',
          '• Roditeljski perfekcionizam',
          '• Nedovoljna stimulacija deteta'
        ]
      },
      {
        title: 'Tipovi nepravilnog izgovora glasova',
        emoji: '🗣️',
        items: [
          '🔄 SUPSTITUCIJA - zamena jednog glasa ili više glasova drugim glasom',
          '❌ OMISIJA - izostavljanje jednog ili više glasova',
          '🔀 DISTORZIJA - iskrivljen, nepravilan izgovor jednog glasa ili više glasova'
        ]
      },
      {
        title: 'Razvojni red glasova - kada očekivati pravilan izgovor',
        emoji: '📅',
        items: [
          'Pri pojavljivanju glasova vlada određeni razvojni red.',
          'Važno je poznavati razvojne norme jer je to bitno kod utvrđivanja odstupanja.',
          '',
          '🎯 UZRAST 3-3,5 GODINA:',
          '• A, E, I, O, U, P, B, M, N, K, G, T, D, V, F, H, J i L',
          '',
          '🎯 UZRAST 4-4,5 GODINA:',
          '• S, Z, C, LJ, NJ i R',
          '',
          '🎯 UZRAST 5-5,5 GODINA:',
          '• Š, Ž, Dž, Č, Đ i Ć',
          '',
          '⚠️ VAŽNO: Na uzrastu od 5,5 godina dete mora da izgovara pravilno sve glasove maternjeg jezika!'
        ],
        note: 'Razvojne norme se razlikuju od autora do autora, ali se svi slažu da na uzrastu od 5,5 godina dete mora da izgovara pravilno sve glasove našeg maternjeg jezika.'
      },
      {
        title: 'Faktori koji utiču na uspešnost logopedske terapije',
        emoji: '⚡',
        items: [
          'Razvoj izgovora glasova kod svakog deteta je individualan i postupan.',
          'Uspešnost i dužina trajanja logopedske terapije zavisi od više faktora:',
          '',
          '• Težina i broj oštećenih ili nepostojećih glasova',
          '• Da li je uzrok organske ili funkcionalne prirode',
          '• Saradnja logopeda sa roditeljima i detetom',
          '• Motivisanost deteta',
          '• Uzrast deteta',
          '• Učestalost logopedskih tretmana'
        ],
        note: 'Ukoliko primetite da vaše dete ne izgovara određene glasove, zamenjuje nepostojeće glasove sa drugim glasovima ili ih izgovara drugačije od svojih vršnjaka - potražite pomoć logopeda.'
      },
      {
        title: 'Razvojne norme govora po uzrastu',
        emoji: '👶',
        items: [
          '🍼 OD ROĐENJA DO 3 MESECA:',
          '• Beba sluša glasove i druge zvukove',
          '• Raspoloženje izražava plakanjem, glasanjem i smejanjem',
          '',
          '👶 OD 3 DO 9 MESECI:',
          '• Igra se govornim organima i stvara mnoštvo glasova',
          '• Na prijatne glasove odgovara osmehom, na neugodne plakanjem',
          '• Posle 6 meseci počinje da imitira glasove odraslih',
          '• Usložnjava slogove: ma ma ma, ta ta ta, ba ba ba',
          '',
          '🚼 OD 9 DO 15 MESECI:',
          '• Razume gest i izraz lica, promenu u visini glasa',
          '• Razume značenje više jednostavnih reči',
          '• Javlja se prva reč sa značenjem',
          '• Razume jednostavne naredbe: idemo, daj, uzmi',
          '• Traži imenovani predmet pogledom',
          '• Odmahuje glavom kada nešto ne želi',
          '• Reaguje na svoje ime',
          '',
          '🧒 OD 15 DO 18 MESECI:',
          '• Ima oko deset reči u rečniku',
          '• Ponavlja kratke fraze: mama daj, beba pa pa',
          '• Odgovara na pitanje "Šta je to?"',
          '• Traži "Daj još"',
          '• Zna da pokaže nekoliko delova tela',
          '• Zna da pokaže nekoliko stvari na slikama',
          '',
          '👦 OD 18 MESECI DO 2 GODINE:',
          '• Koristi oko 50 reči',
          '• Oponaša životinje i imenuje ih',
          '• Rečenica se sastoji od dve reči',
          '• Počinje da koristi glagole i prideve',
          '• Koristi zamenice: moje, ja, tvoje',
          '• Razume pitanja: gde, šta, ko?',
          '',
          '🧑 OD 2 DO 3 GODINE:',
          '• Postavlja jednostavna pitanja',
          '• Imenuje predmete iz svakodnevne upotrebe',
          '• Rečenica se sastoji od par reči',
          '• Koristi prošlo i buduće vreme',
          '• Razlikuje boje',
          '• Sluša kratke priče',
          '• Razume tri predloga: u, na, pored',
          '',
          '👧 OD 3 DO 4 GODINE:',
          '• Rečenica se sastoji od 3-4 reči',
          '• Stalno postavlja pitanja kako i zašto',
          '• Zna svoje ime i prezime i pol',
          '• Priča kratke priče i koristi zamenice',
          '• Sluša priče od 10 minuta',
          '',
          '🧒 OD 4 DO 5 GODINA:',
          '• Može da definiše jednostavne reči',
          '• Govori gramatički ispravno',
          '• Izvršava tri naloga',
          '• Izgovara pravilno sve glasove',
          '• Ima rečnik od preko 2.000 reči',
          '• Može da precrta po modelu krug, trougao i kvadrat',
          '',
          '👦 OD 5 DO 7 GODINA:',
          '• Pravilno izgovara sve glasove maternjeg jezika',
          '• Ima razvijenu analizu i sintezu glasova',
          '• Razume i upotrebljava predloge: u, na, pored, ispod, iznad',
          '• Može da broji do 20 i unazad od 10',
          '• Počinje da se interesuje za slova',
          '• Rečenice su složenije',
          '• Prepričava priče sa bogatijim sadržajem',
          '• Imenuje dane u nedelji, godišnja doba'
        ]
      }
    ]
  },
  'priprema-deteta-za-prvi-razred': {
    title: 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred?',
    date: '2. jul 2025',
    author: 'Ana Novaković',
    readTime: '8 min čitanja',
    category: 'Školska zrelost',
    tags: ['prvi razred', 'priprema za školu', 'školska zrelost', 'grafomotorika', 'fonološka svesnost'],
    intro: 'Polazak u prvi razred predstavlja važan korak u životu svakog deteta. Kako bismo dete što bolje pripremili za ovu veliku promenu, poželjno je da pre polaska u prvi razred savlada određene veštine i znanja iz različitih oblasti:',
    content: [
      {
        title: 'Govor i jezik',
        emoji: '🗣',
        items: [
          'Pravilno izgovara sve glasove maternjeg jezika.',
          'Pravilno se gramatički izražava (koristi jedninu, množinu, rod, broj i padež).',
          'Razume značenje reči i može da ih objasni.',
          'Ume da ispriča događaj u pravilnom redosledu (početak, sredina, kraj).',
          'Uočava i razlaže reči na glasove (ima razvijenu sintezu i analizu), prepoznaje razliku u dužini reči (npr. "olovka" je duža od "voz").',
          'Koristi reči suprotnog značenja.',
          'Zna da reprodukuje pesmice i prepriča omiljenu priču.'
        ],
        note: 'Fonološka svesnost se kod dece predškolskog uzrasta ne razvija uvek spontano, zato je važno podsticati njen razvoj kroz igru i svakodnevne aktivnosti (npr. igra slovo na slovo).'
      },
      {
        title: 'Matematičke veštine',
        emoji: '📐',
        items: [
          'Broji do 20 unapred i unazad, broji sa prekidima.',
          'Snalazi se u pojmovima više, manje.',
          'Razume pojam skupa (šta pripada nekom skupu prema obliku, veličini, boji…).',
          'Upoređuje skupove (gde ima više ili manje elemenata).',
          'Razume sabiranje i oduzimanje uz pokazivanje i igru.',
          'Povezuje broj sa količinom (npr. 9=9 elemenata).',
          'Razlikuje veličine (duži/kraći, veći/manji…).'
        ]
      },
      {
        title: 'Grafomotorika',
        emoji: '✍️',
        items: [
          'Poseduje fleksibilnost šake i prstiju.',
          'Pravilno drži olovku, linija je jasna, ima dobar stisak olovke po papiru.',
          'Povezuje tačke, crta kružne i talasaste linije.',
          'Crta i precrtava osnovne oblike: krug, kvadrat, trougao, romb.',
          'Piše svoje ime velikim štampanim slovima.'
        ]
      },
      {
        title: 'Prostorni odnosi',
        emoji: '🧭',
        items: [
          'Razume odnose: gore, dole, ispred, iza, levo, desno…',
          'Usvojio je orijentaciju na:',
          '• Telu (leva/desna ruka, levo/desno oko)',
          '• Papiru (levo/desno od tačke)',
          '• U prostoru (šta je ispred, iza, levo/desno…)'
        ]
      },
      {
        title: 'Vremenski odnosi',
        emoji: '🕒',
        items: [
          'Razume pojmove: pre, posle, jutro, podne, večeras…',
          'Razlikuje pojmove: juče–danas–sutra, dan–noć.'
        ]
      },
      {
        title: 'Predčitalačke veštine',
        emoji: '📖',
        items: [
          'Rastavlja reči na slogove.',
          'Prepoznaje početni i završni glas u reči.',
          'Imenuje glasove po redosledu ("na slovo na slovo").',
          'Sastavlja jednostavne reči od glasova (npr. M-A-M-A).',
          'Prepoznaje simbole slova i brojeva.'
        ]
      },
      {
        title: 'Koncentracija',
        emoji: '🧠',
        items: [
          'Može da ostane fokusirano na zadatak 15–20 minuta.',
          'Tokom igre, koncentracija može trajati i do 60 minuta sa manjim prekidima.'
        ]
      },
      {
        title: 'Opšti pojmovi o sebi i drugima',
        emoji: '👤',
        items: [
          'Zna svoje ime, prezime, adresu, mesto stanovanja.',
          'Zna imena članova porodice, svoju starost, zanimanja roditelja.',
          'Prepoznaje boje, oblike, ukuse (slatko, kiselo…), poznaje pojmove: vruće/hladno, mekano/tvrdo…'
        ]
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Blog post not found',
    }
  }

  return {
    title: post.title,
    description: post.intro,
    keywords: params.slug === 'razvoj-govora-i-glasovi' 
      ? 'razvoj govora, dislalija, razvojne norme, logoped Kragujevac, izgovor glasova, govorna terapija, funkcionalni uzroci, organski uzroci, supstitucija, omisija, distorzija, Ana Novaković'
      : 'priprema za prvi razred, govorno-jezički razvoj, logoped Kragujevac, školska zrelost, fonološka svesnost, grafomotorika, matematičke veštine, koncentracija, prostorni odnosi',
    authors: [{ name: post.author }],
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
      title: post.title,
      description: post.intro,
      type: 'article',
      locale: 'sr_RS',
      siteName: 'LOGONOVA',
      publishedTime: params.slug === 'razvoj-govora-i-glasovi' ? '2025-07-27' : '2025-07-02',
      authors: [post.author],
      url: `https://www.logonova.rs/blog/${params.slug}`,
      images: [
        {
          url: params.slug === 'razvoj-govora-i-glasovi' ? 'https://www.logonova.rs/blog-post-razvoj-govora.webp' : 'https://www.logonova.rs/blog-priprema-za-prvi-razred.webp',
          width: 1200,
          height: 630,
          alt: params.slug === 'razvoj-govora-i-glasovi' 
              ? 'Razvoj govora i pravilno izgovaranje glasova kod dece - blog post ilustracija'
              : 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred - ilustracija sa decom i školom',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.intro,
      images: [params.slug === 'razvoj-govora-i-glasovi' ? 'https://www.logonova.rs/blog-post-razvoj-govora.webp' : 'https://www.logonova.rs/blog-priprema-za-prvi-razred.webp'],
    },
    alternates: {
      canonical: `https://www.logonova.rs/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Structured Data */}
      <script
        id="enhanced-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Article Schema
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.intro,
              "author": {
                "@type": "Person",
                "name": post.author,
                "url": "https://www.logonova.rs/nas-tim",
                "jobTitle": params.slug === 'razvoj-govora-i-glasovi' ? "Master defektologije logoped" : "Master defektologije logoped",
                "worksFor": {
                  "@type": "Organization",
                  "name": "LOGONOVA",
                  "url": "https://www.logonova.rs"
                },
                "image": "https://www.logonova.rs/ana-novakovic.webp"
              },
              "publisher": {
                "@type": "Organization",
                "name": "LOGONOVA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.logonova.rs/favicon.png"
                },
                "url": "https://www.logonova.rs"
              },
              "datePublished": params.slug === 'razvoj-govora-i-glasovi' ? "2025-07-27" : "2025-07-02",
              "dateModified": params.slug === 'razvoj-govora-i-glasovi' ? "2025-07-27" : "2025-07-02",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.logonova.rs/blog/${params.slug}`
              },
              "image": {
                "@type": "ImageObject",
                "url": params.slug === 'razvoj-govora-i-glasovi' ? "https://www.logonova.rs/blog-post-razvoj-govora.webp" : "https://www.logonova.rs/blog-priprema-za-prvi-razred.webp",
                "width": 1200,
                "height": 630
              },
              "articleSection": "Govorno-jezički razvoj",
              "keywords": params.slug === 'razvoj-govora-i-glasovi' 
                ? "razvoj govora, dislalija, razvojne norme, logoped, izgovor glasova, govorna terapija, funkcionalni uzroci, organski uzroci"
                : "priprema za prvi razred, govorno-jezički razvoj, logoped, školska zrelost, fonološka svesnost",
              "inLanguage": "sr",
              "wordCount": params.slug === 'razvoj-govora-i-glasovi' ? 2500 : 1800,
              "about": {
                "@type": "Thing",
                "name": params.slug === 'razvoj-govora-i-glasovi' ? "Razvoj govora kod dece" : "Priprema za prvi razred",
                "description": params.slug === 'razvoj-govora-i-glasovi' ? "Informacije o razvoju govora, dislaliji i logopedskoj terapiji" : "Veštine potrebne za uspešan početak školovanja"
              }
            },
            // Breadcrumb Schema
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Početna",
                  "item": "https://www.logonova.rs"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://www.logonova.rs/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": `https://www.logonova.rs/blog/${params.slug}`
                }
              ]
            },
            // FAQ Schema for developmental milestones
            ...(params.slug === 'razvoj-govora-i-glasovi' ? [{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kada dete treba da počne da govori?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prva reč sa značenjem se javlja između 9-15 meseci. Do 2 godine dete treba da koristi oko 50 reči, a do 3 godine da se rečenica sastoji od 3-4 reči."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Kada su svi glasovi pravilno usvojeni?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Na uzrastu od 5,5 godina dete mora da izgovara pravilno sve glasove maternjeg jezika. Glasovi se usvajaju postepeno: A,E,I,O,U,P,B,M,N,K,G,T,D,V,F,H,J do 3,5 godina; S,Z,C,LJ,NJ,R do 4,5 godina; Š,Ž,Dž,Č,Đ,Ć do 5,5 godina."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kada treba posety logopedu?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Za posetu logopedu nikada nije prerano. Treba potražiti pomoć ako dete ne izgovara određene glasove za svoj uzrast, zamenjuje glasove drugima ili se govori drugačije od vršnjaka."
                  }
                }
              ]
            }] : [])
          ])
        }}
      />
      
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-100">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
          <span className="ml-2 text-accent font-bold text-3xl md:text-3xl">&#9829;</span>
        </Link>
        <Link href="/blog" className="flex items-center text-primary hover:text-accent transition">
          <FaArrowLeft className="mr-2" />
          Nazad na blog
        </Link>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition">Početna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Blog Post */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={params.slug === 'razvoj-govora-i-glasovi' ? '/blog-post-razvoj-govora.webp' : '/blog-priprema-za-prvi-razred.webp'}
              alt={params.slug === 'razvoj-govora-i-glasovi' 
                ? 'Razvoj govora i pravilno izgovaranje glasova kod dece - blog post ilustracija'
                : 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred - ilustracija sa decom i školom'}
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
              quality={80}
            />
          </div>

          {/* Post Header */}
          <header className="mb-12">
            <div className="flex items-center gap-6 text-gray-500 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="text-sm">
                {post.readTime}
              </div>
              <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.intro}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">📚 Sadržaj članka</h2>
            <nav className="space-y-2">
              {post.content.map((section, index) => (
                <a 
                  key={index}
                  href={`#section-${index}`}
                  className="block text-gray-700 hover:text-primary transition py-1 border-l-2 border-transparent hover:border-primary pl-3"
                >
                  <span className="mr-2">{section.emoji}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-t-4 border-accent mb-12"></div>

            {post.content.map((section, index) => (
              <div key={index}>
                <section className="mb-12" id={`section-${index}`}>
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <span className="mr-3">{section.emoji}</span>
                    {section.title}
                  </h2>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={item.startsWith('•') ? 'ml-6' : ''}>
                        {item.startsWith('•') ? item : `• ${item}`}
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <div className="bg-yellow-50 border-l-4 border-accent p-4 rounded-r-lg">
                      <p className="font-semibold text-primary">Važno:</p>
                      <p className="text-gray-700">{section.note}</p>
                    </div>
                  )}
                </section>
                {index < post.content.length - 1 && (
                  <div className="border-t border-gray-200 mb-12"></div>
                )}
              </div>
            ))}

            <div className="border-t-4 border-accent mt-12"></div>
          </div>

          {/* Social Sharing */}
          <SocialShare 
            url={`https://www.logonova.rs/blog/${params.slug}`}
            title={post.title}
          />

          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">📚 Preporučeni članci</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, relatedPost]) => (
                  <Link key={slug} href={`/blog/${slug}`} className="block group">
                    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{relatedPost.category}</div>
                        <h4 className="font-bold text-lg text-primary group-hover:text-accent transition mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {relatedPost.intro}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedPost.author}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Potrebna vam je stručna pomoć?</h3>
            <p className="text-gray-700 mb-6">Ako primetite da vaše dete nije savladalo neke od ovih veština, kontaktirajte nas za procenu i savet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#kontakt" className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors">
                Zakažite konsultaciju
              </Link>
              <a href="tel:+381638703545" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors">
                063 8703545
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-accent transition font-semibold">
              <FaArrowLeft className="mr-2" />
              Nazad na sve blog postove
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-primary text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Logopedski kabinet LOGONOVA Kragujevac. Sva prava zadržana.</p>
          <p className="mt-2 text-sm opacity-80">
            <a href="https://markomanojlovic.rs/izrada-sajta-kragujevac/" target="_blank" rel="noopener" className="underline underline-offset-4 hover:opacity-100">Izrada sajta</a>: <a href="https://markomanojlovic.rs/" target="_blank" rel="noopener" className="underline underline-offset-4 hover:opacity-100">Marko Manojlović</a>
          </p>
        </div>
      </footer>
    </main>
  )
} 