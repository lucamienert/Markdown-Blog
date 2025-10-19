import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { metadata, content } = getPostBySlug(params.slug)

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm" className="flex items-center gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </Button>
      </div>

      <h1>{metadata.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{metadata.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
