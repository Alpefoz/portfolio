import Link from 'next/link'

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 sm:px-6 lg:px-8 shadow sticky top-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:text-white z-50 transition-all duration-300">
      <Link href="/" className="text-2xl font-bold">Alper Sandal</Link>
      <div className="flex items-center space-x-4">
        <Link href="/projects" className="hover:underline">Projeler</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>
      </div>
    </nav>
  )
}
