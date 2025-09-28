import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Nie znaleziono strony</h2>
        <p className="text-gray-300 mb-6">Przepraszamy, ale strona której szukasz nie istnieje.</p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-ampli-green hover:bg-ampli-darkgreen text-white font-medium rounded-lg transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  )
}
