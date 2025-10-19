import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PostCardProps {
  slug: string
  title: string
  description: string
  date: string
}

export function PostCard({ slug, title, description, date }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <Card className="hover:shadow-md transition mt-2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
