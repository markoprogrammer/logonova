import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaCalendar, FaUser } from 'react-icons/fa'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const blogPosts = {
  'priprema-deteta-za-prvi-razred': {
    title: 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred?',
    date: '2. jul 2025',
    author: 'Ana Novaković',
    readTime: '8 min čitanja',
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
    keywords: 'priprema za prvi razred, govorno-jezički razvoj, logoped Kragujevac, školska zrelost, fonološka svesnost, grafomotorika, matematičke veštine, koncentracija, prostorni odnosi',
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.intro,
      type: 'article',
      publishedTime: '2025-07-02',
      authors: [post.author],
      url: `https://logonova.rs/blog/${params.slug}`,
      images: [
        {
          url: '/blog-priprema-za-prvi-razred.png',
          width: 1200,
          height: 630,
          alt: 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred - ilustracija sa decom i školom',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.intro,
      images: ['/blog-priprema-za-prvi-razred.png'],
    },
    alternates: {
      canonical: `https://logonova.rs/blog/${params.slug}`,
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
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.intro,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://logonova.rs"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LOGONOVA",
              "logo": {
                "@type": "ImageObject",
                "url": "https://logonova.rs/favicon.png"
              }
            },
            "datePublished": "2025-07-02",
            "dateModified": "2025-07-02",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://logonova.rs/blog/${params.slug}`
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://logonova.rs/blog-priprema-za-prvi-razred.png",
              "width": 1200,
              "height": 630
            },
            "articleSection": "Govorno-jezički razvoj",
            "keywords": "priprema za prvi razred, govorno-jezički razvoj, logoped, školska zrelost, fonološka svesnost",
            "inLanguage": "sr"
          })
        }}
      />
      
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-white shadow-sm sticky top-0 z-100">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">LOGONOVA</span>
          <span className="ml-2 text-accent font-bold text-xl md:text-2xl">&#9829;</span>
        </Link>
        <Link href="/blog" className="flex items-center text-primary hover:text-accent transition">
          <FaArrowLeft className="mr-2" />
          Nazad na blog
        </Link>
      </nav>

      {/* Blog Post */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/blog-priprema-za-prvi-razred.png"
              alt="Šta bi bilo poželjno da dete zna pre polaska u prvi razred - ilustracija sa decom i školom"
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Post Header */}
          <header className="mb-12">
            <div className="flex items-center gap-6 text-gray-500 mb-4">
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
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.intro}
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-t-4 border-accent mb-12"></div>

            {post.content.map((section, index) => (
              <div key={index}>
                <section className="mb-12">
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
        </div>
      </footer>
    </main>
  )
} 