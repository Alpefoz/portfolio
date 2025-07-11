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
        <title>Alper Sandal | Full Stack Developer & Web Geliştirici</title>
        <meta name="description" content="Full Stack Developer olarak Next.js, Node.js ve modern web teknolojileri ile performanslı projeler geliştiriyorum. Portfolyo ve projelerim." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Full Stack Developer, Next.js, Node.js, React, JavaScript, Web Developer, Alper Sandal" />
        <meta property="og:title" content="Alper Sandal | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer olarak modern web teknolojileri ile projeler geliştiriyorum." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://alpersandal.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Merhaba, ben Alper Sandal 👋</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Full Stack Developer olarak Next.js ve Node.js ile yalnızca web siteleri değil, ne gerekirse onu yaparım.
            Projeler geliştirmeyi, yeni teknolojileri keşfetmeyi ve sınırları zorlamayı seviyorum.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Alpefoz" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/alper-sandal-310864322/" target="_blank" className="hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:alpersandal@gmail.com" className="hover:text-red-600 transition-colors">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
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
                3+ yıldır modern web teknolojileri ile projeler geliştiriyorum. Kullanıcı deneyimi odaklı, 
                performanslı ve ölçeklenebilir çözümler üretmeyi seviyorum.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Sürekli öğrenmeye odaklanıyorum ve yeni teknolojileri projelerime entegre etmekten keyif alıyorum.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-user fa-4x text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
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
                <h3 className="text-xl font-semibold">Portfolyo & Blog</h3>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Aktif</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern tasarım ile kişisel portfolyo ve blog sitesi. SEO optimizasyonu ve mobil uyumlu tasarım.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Tailwind</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Markdown</span>
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

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">API Tracker</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Tamamlandı</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Node.js ve PostgreSQL ile geliştirilmiş REST API örneği. Veri takibi ve analiz özellikleri.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Knex</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">PostgreSQL</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Alpefoz/tracker-knex" target="_blank" className="text-blue-600 hover:underline flex items-center">
                  <i className="fab fa-github mr-2"></i>
                  Kod
                </a>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Demo
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
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'Node.js', 'React', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'Git', 'REST API'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Deneyim</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fas fa-code text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Freelance • 2021 - Devam ediyor</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Modern web teknolojileri ile özel projeler geliştiriyorum. Next.js, Node.js ve PostgreSQL 
                  kullanarak performanslı ve ölçeklenebilir çözümler üretiyorum.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Sürekli Öğrenme</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Kişisel Gelişim • 2020 - Devam ediyor</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Yeni teknolojileri takip ediyor, açık kaynak projelere katkıda bulunuyor ve 
                  modern web geliştirme pratiklerini öğreniyorum.
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
          <h2 className="text-3xl font-bold mb-4">Birlikte Çalışalım</h2>
          <p className="text-lg mb-6 opacity-90">
            Projeniz için modern ve etkili çözümler arıyorsanız, benimle iletişime geçin.
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
          </div>
        </motion.div>
      </main>
    </>
  )
}