import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata = {
  title: "Markdown Blog",
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mein Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.slug} className="border-b pb-2">
            <Link href={`/posts/${post.slug}`} className="text-xl text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
