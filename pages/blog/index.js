import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Yazılarım</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-2 text-gray-600">{post.date}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Yazıyı Oku →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('data', 'posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('data', 'posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      slug: filename.replace('.md', '')
    }
  })

  return {
    props: {
      posts
    }
  }
}
