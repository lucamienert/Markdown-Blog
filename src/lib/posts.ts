import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "")
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return { slug, ...data }
  })

  return posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return { slug, metadata: data, content }
}
