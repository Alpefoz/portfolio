import { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "../components/navbar"
import { motion } from "framer-motion"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <>
      <Head>
        <title>Alper Sandal | Full Stack Developer</title>
        <meta name="description" content="Next.js ve Node.js ile yalnızca web siteleri değil, ne gerekirse yaparım." />
      </Head>

      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Merhaba, ben Alper Sandal 👋</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Full Stack Developer olarak Next.js ve Node.js ile yalnızca web siteleri değil, ne gerekirse onu yaparım.
            Projeler geliştirmeyi, yeni teknolojileri keşfetmeyi ve sınırları zorlamayı seviyorum.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Alpefoz" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/alper-sandal-310864322/" target="_blank" className="hover:text-blue-700">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:alpersandal@gmail.com" className="hover:text-red-600">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Projelerim</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border p-4 rounded-lg shadow hover:shadow-xl transition dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">Portfolyo & Blog</h3>
              <p className="mb-2">Next.js + Tailwind + Markdown blog.</p>
              <a href="https://github.com/Alpefoz/portfolio" className="text-blue-600 hover:underline">Projeyi Gör →</a>
            </div>
            
            <div className="border p-4 rounded-lg shadow hover:shadow-xl transition dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">API Tracker</h3>
              <p className="mb-2">Node.js + Knex + PostgreSQL REST API örneği.</p>
              <a href="https://github.com/Alpefoz/tracker-knex" target="_blank" className="text-blue-600 hover:underline">Github →</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">Benimle iletişime geç</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Mail: alpersandal@gmail.com</p>
          <p className="text-gray-600 dark:text-gray-300">LinkedIn: linkedin.com/in/alper-sandal-310864322/</p>
        </motion.div>
      </main>
    </>
  )
}
