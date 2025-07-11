import { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "../components/navbar"
import { motion } from "framer-motion"

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true'
    }
    return false
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Alper Sandal | Bilişim Sistemleri Öğrencisi & Yazılım Geliştirici</title>
        <meta name="description" content="Okan Üniversitesi Bilişim Sistemleri öğrencisi. C#, Java, MSSQL ve web teknolojileri ile projeler geliştiriyorum. Yeni fırsatlar arıyorum." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Bilişim Sistemleri, C#, Java, MSSQL, Web Developer, Yazılım Geliştirici, Alper Sandal, Part Time" />
        <meta property="og:title" content="Alper Sandal | Bilişim Sistemleri Öğrencisi" />
        <meta property="og:description" content="Okan Üniversitesi öğrencisi. Yazılım geliştirme alanında kendimi geliştirmek istiyorum." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://alpersandal.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <main className="max-w-4xl mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20 py-16"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl -z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-200 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-500"></div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative px-6 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">👋 Merhaba, ben</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
            >
              Alper Sandal
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Bilişim Sistemleri Öğrencisi
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Okan Üniversitesi 4. sınıf öğrencisiyim. <span className="font-semibold text-blue-600 dark:text-blue-400">C#, Java ve MSSQL</span> ile projeler geliştiriyorum.
                <br />
                <span className="text-base text-gray-500 dark:text-gray-400">Kendimi geliştirebileceğim full-time iş fırsatları arıyorum.</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
              <a 
                href="mailto:alpersandal@gmail.com" 
                className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <i className="fas fa-envelope mr-2"></i>
                İletişime Geç
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <i className="fas fa-code mr-2"></i>
                Projelerimi Gör
              </a>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a 
                href="https://github.com/Alpefoz" 
                target="_blank" 
                className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <i className="fab fa-github fa-xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://www.linkedin.com/in/alper-sandal-310864322/" 
                target="_blank" 
                className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <i className="fab fa-linkedin fa-xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:alpersandal@gmail.com" 
                className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <i className="fas fa-envelope fa-xl text-gray-700 dark:text-gray-300 group-hover:text-red-600 transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Hakkımda</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Okan Üniversitesi Bilişim Sistemleri ve Teknolojileri 4. sınıf öğrencisiyim. 
                Üniversitede Java ve C# dersleri alıyorum.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Arı Bilgi Eğitim Merkezinde 6 aylık yazılım uzmanlığı eğitimi aldım. 
                Bu eğitimde C#, web programlama ve MSSQL konularında orta düzey bilgi edindim.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Kendimi geliştirebileceğim bir şirkette okul ile beraber yürütebileceğim full-time bir iş fırsatı arıyorum.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-graduation-cap fa-4x text-gray-400"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p><i className="fas fa-map-marker-alt mr-2"></i>Çekmeköy, İstanbul</p>
                <p><i className="fas fa-birthday-cake mr-2"></i>21 yaşında</p>
                <p><i className="fas fa-car mr-2"></i>B1 Ehliyet</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          id="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projelerim</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">Restoran Otomasyonu</h3>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Tamamlandı</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                C# ve MSSQL kullanarak geliştirdiğim restoran yönetim sistemi. 
                Sipariş takibi, stok yönetimi ve raporlama özellikleri içeriyor.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">C#</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">MSSQL</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Windows Forms</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Alpefoz" className="text-blue-600 hover:underline flex items-center">
                  <i className="fab fa-github mr-2"></i>
                  Kod
                </a>
                <span className="text-sm text-gray-500">Eğitim Projesi</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">Portfolyo Sitesi</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Geliştiriliyor</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern web teknolojileri ile kişisel portfolyo sitesi. 
                Responsive tasarım ve SEO optimizasyonu içeriyor.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Tailwind</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Alpefoz/portfolio" className="text-blue-600 hover:underline flex items-center">
                  <i className="fab fa-github mr-2"></i>
                  Kod
                </a>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Canlı Demo
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Yeteneklerim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Üniversite Eğitimi</h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'C#', 'Temel Web Programlama'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Özel Eğitim & Kurs</h3>
              <div className="flex flex-wrap gap-3">
                {['C# (Orta Düzey)', 'MSSQL', 'Web Programlama', 'Windows Forms'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Kişisel Gelişim</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'React', 'Tailwind CSS', 'Git'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          id="education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Eğitim</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fas fa-university text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Bilişim Sistemleri ve Teknolojileri</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Okan Üniversitesi • 2022 - Devam ediyor</p>
                <p className="text-gray-600 dark:text-gray-300">
                  4. sınıf öğrencisi. Java, C# ve temel bilgisayar bilimleri dersleri alıyorum.
                  Modern yazılım geliştirme tekniklerini öğreniyorum.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-code text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Yazılım Uzmanlığı Eğitimi</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Arı Bilgi Eğitim Merkezi • 6 ay</p>
                <p className="text-gray-600 dark:text-gray-300">
                  C#, web programlama ve MSSQL konularında orta düzey eğitim aldım. 
                  Pratik projelerle deneyim kazandım.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Lise Eğitimi</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">Çekmeköy Okyanus Koleji • 2018-2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Lise eğitimimi başarıyla tamamladım ve üniversite sınavında bilişim sistemleri ve teknolojileri alanını tercih ettim.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Full-Time İş Fırsatları</h2>
          <p className="text-lg mb-6 opacity-90">
            Kendimi geliştirebileceğim bir şirkette okul ile beraber yürütebileceğim full-time bir pozisyon arıyorum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:alpersandal@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email Gönder
            </a>
            <a 
              href="https://www.linkedin.com/in/alper-sandal-310864322/" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
            <a 
              href="tel:05331297843" 
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              <i className="fas fa-phone mr-2"></i>
              0533 129 78 43
            </a>
          </div>
        </motion.div>
      </main>
    </>
  )
}