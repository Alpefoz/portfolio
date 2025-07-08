import Link from 'next/link'

export default function Navbar({ toggleDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 shadow sticky top-0 bg-white dark:bg-gray-900 dark:text-white z-50 transition-colors duration-300">
      <Link href="/" className="text-2xl font-bold">Alper Sandal</Link>
      <div className="flex items-center space-x-4">
        <Link href="/projects" className="hover:underline">Projeler</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <button onClick={toggleDarkMode} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </nav>
  )
}
