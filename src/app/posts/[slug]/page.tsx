import { getPostBySlug, getAllPosts } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { content, metadata } = getPostBySlug(params.slug)

  return (
    <main className="max-w-3xl mx-auto p-6 prose prose-lg">
      <h1>{metadata.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{metadata.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  )
}
