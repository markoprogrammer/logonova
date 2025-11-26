import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { FaArrowLeft, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Saveti za govorno-jezički razvoj dece',
  description: 'Stručni blog logopeda iz Kragujevca. Saveti o razvoju govora, dislaliji, pripremi za prvi razred, školskoj zrelosti i logopedskoj terapiji. Kategorije: Razvoj govora, Školska zrelost.',
  keywords: 'blog logoped Kragujevac, razvoj govora deca, dislalija saveti, priprema za prvi razred, školska zrelost, fonološka svesnost, logopedska terapija, razvojne norme, govorno-jezičke veštine, grafomotorika, privatni logoped blog, defektolog saveti, govorna terapija deca',
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
    title: 'Blog - Saveti za govorno-jezički razvoj dece | LOGONOVA',
    description: 'Stručni blog logopeda iz Kragujevca. Kategorije: Razvoj govora, Školska zrelost. Saveti o dislaliji, pripremi za prvi razred i logopedskoj terapiji.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'LOGONOVA',
    url: 'https://logonova.rs/blog',
    images: [
      {
        url: 'https://logonova.rs/blog-post-razvoj-govora.webp',
        width: 1200,
        height: 630,
        alt: 'LOGONOVA Blog - Saveti za govorno-jezički razvoj dece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - LOGONOVA Kragujevac',
    description: 'Stručni blog logopeda iz Kragujevca sa savetima o razvoju govora.',
    images: ['https://logonova.rs/blog-post-razvoj-govora.webp'],
  },
  alternates: {
    canonical: 'https://logonova.rs/blog',
  },
}

export default function Blog() {
  const blogPosts = [
    {
      id: 'razvoj-govora-i-glasovi',
      title: 'Razvoj govora i pravilno izgovaranje glasova kod dece',
      excerpt: 'Za posetu logopedu nikada nije prerano, jer je govor složen proces koji se razvija od rođenja. Sveobuhvatan vodič kroz uzroke dislalije, razvojne norme i faktore koji utiču na uspešnost terapije...',
      date: '27. jul 2025',
      author: 'Ana Novaković',
      readTime: '12 min čitanja',
      category: 'Razvoj govora',
      tags: ['dislalija', 'razvojne norme', 'logopedska terapija'],
      image: '/blog-post-razvoj-govora.webp'
    },
    {
      id: 'priprema-deteta-za-prvi-razred',
      title: 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred?',
      excerpt: 'Polazak u prvi razred predstavlja važan korak u životu svakog deteta. Kako bismo dete što bolje pripremili za ovu veliku promenu, poželjno je da pre polaska u prvi razred savlada određene veštine...',
      date: '2. jul 2025',
      author: 'Ana Novaković',
      readTime: '8 min čitanja',
      category: 'Školska zrelost',
      tags: ['prvi razred', 'priprema za školu', 'grafomotorika'],
      image: '/blog-priprema-za-prvi-razred.webp'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Blog Structured Data */}
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "LOGONOVA Blog - Saveti za govorno-jezički razvoj",
            "description": "Stručni blog logopeda iz Kragujevca sa savetima o razvoju govora, dislaliji, pripremi za prvi razred i logopedskoj terapiji.",
            "url": "https://logonova.rs/blog",
            "publisher": {
              "@type": "Organization",
              "name": "LOGONOVA",
              "logo": {
                "@type": "ImageObject",
                "url": "https://logonova.rs/favicon.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://logonova.rs/blog/${post.id}`,
              "datePublished": post.date === '27. jul 2025' ? '2025-07-27' : '2025-07-02',
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "image": `https://logonova.rs${post.image}`,
              "articleSection": post.category,
              "keywords": post.tags.join(', ')
            }))
          })
        }}
      />

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

      {/* Blog Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Korisni saveti i informacije o govorno-jezičkom razvoju dece</p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
                {post.image && (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      quality={80}
                      style={{ backgroundColor: post.id === 'razvoj-govora-i-glasovi' ? '#fbf2e7' : '#f7edd9' }}
                    />
                  </div>
                )}
                <div className="p-8">
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
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center bg-accent text-primary px-6 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors"
                  >
                    Pročitaj više
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state if no posts */}
          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Uskoro novi blog postovi</h3>
              <p className="text-gray-500">Pratite nas za najnovije savete o govorno-jezičkom razvoju</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">Budite u toku sa najnovijim savetima</h3>
          <p className="text-gray-600 mb-6">Pretplatite se na naš newsletter za korisne savete o govorno-jezičkom razvoju</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#kontakt" className="bg-accent text-primary px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition-colors">
              Kontaktirajte nas
            </Link>
            <a href="tel:+381638703545" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition-colors">
              063 8703545
            </a>
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