'use client'

interface SocialShareProps {
  url: string
  title: string
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
        .then(() => {
          // Optional: Show a toast or feedback
          console.log('Link copied to clipboard')
        })
        .catch(err => {
          console.error('Failed to copy: ', err)
        })
    }
  }

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <h3 className="text-lg font-bold text-primary mb-4">📢 Podelite ovaj članak</h3>
      <div className="flex gap-4 flex-wrap">
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
         Facebook
        </a>
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          X
        </a>
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>
        <button 
          onClick={handleCopyLink}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          🔗 Kopiraj link
        </button>
      </div>
    </div>
  )
} 