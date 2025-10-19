import { getAllPosts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="space-y-4">
        {posts.map((post: any) => (
          <PostCard title={post.title} description={post.description} date={post.date} key={post.slug} {...post} />
        ))}
      </div>
    </main>
  )
}
