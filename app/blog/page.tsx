import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Saveti za govorno-jezički razvoj dece',
  description: 'Korisni saveti i informacije o govorno-jezičkom razvoju dece. Stručni tekstovi logopeda iz Kragujevca o pripremi za prvi razred, terapiji govora i jezičkom razvoju.',
  keywords: 'blog logoped, saveti za govor, jezički razvoj, priprema za prvi razred, logopedski saveti, govorno-jezičke veštine, fonološka svesnost, Kragujevac',
  openGraph: {
    title: 'Blog - Saveti za govorno-jezički razvoj dece | LOGONOVA',
    description: 'Korisni saveti i informacije o govorno-jezičkom razvoju dece. Stručni tekstovi logopeda iz Kragujevca.',
    type: 'website',
    url: 'https://logonova.rs/blog',
  },
  alternates: {
    canonical: 'https://logonova.rs/blog',
  },
}

export default function Blog() {
  const blogPosts = [
    {
      id: 'priprema-deteta-za-prvi-razred',
      title: 'Šta bi bilo poželjno da dete zna pre polaska u prvi razred?',
      excerpt: 'Polazak u prvi razred predstavlja važan korak u životu svakog deteta. Kako bismo dete što bolje pripremili za ovu veliku promenu, poželjno je da pre polaska u prvi razred savlada određene veštine...',
      date: '2. jul 2025',
      author: 'Ana Novaković',
      readTime: '8 min čitanja',
      image: '/blog-priprema-za-prvi-razred.png'
    }
  ]

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
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      priority
                      style={{ backgroundColor: '#f7edd9' }}
                    />
                  </div>
                )}
                <div className="p-8">
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
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
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