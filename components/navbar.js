import Link from 'next/link'
import { useState } from 'react'

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                Alper Sandal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#projects" 
              className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-full transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-rocket mr-2 text-sm"></i>
                Projeler
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="#education" 
              className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-full transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-graduation-cap mr-2 text-sm"></i>
                Eğitim
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* CTA Button */}
            <a 
              href="tel:05331297843"
              className="group relative ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-phone mr-2 text-sm"></i>
                Ara: 0533 129 78 43
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Theme Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="group relative ml-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <div className="relative">
                <i className={`fas ${darkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-blue-600'} text-lg transition-all duration-300 ${darkMode ? 'rotate-0' : 'rotate-180'}`}></i>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <i className={`fas ${darkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-blue-600'} text-lg`}></i>
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-2 border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
            <Link 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <i className="fas fa-rocket mr-3 text-sm"></i>
              Projeler
            </Link>
            <Link 
              href="#education" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <i className="fas fa-graduation-cap mr-3 text-sm"></i>
              Eğitim
            </Link>
            <a 
              href="tel:05331297843"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-6 py-3 mx-4 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-phone mr-3 text-sm"></i>
              Ara: 0533 129 78 43
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}