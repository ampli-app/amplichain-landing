import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rhythm-950">
      <div className="text-center px-6">
        <h2 className="text-2xl font-display text-white mb-4">Nie znaleziono strony</h2>
        <p className="text-white/65 mb-6">Przepraszamy, ale strona której szukasz nie istnieje.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-action hover:bg-action-hover text-white font-medium font-body rounded-xl transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  )
}
