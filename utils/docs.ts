import fs from "fs"
import matter from "gray-matter"
import path from "path"

export interface CaseStudyMetadata {
  title: string
  publishedAt: string
  summary: string
  image: string
  role: string
  duration: string
  tools: string[]
  client?: string
  category: "Mobile App" | "Website" | "Dashboard" | "Branding"
  featured?: boolean
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "app",
    "(app)",
    "case-studies",
    "posts",
    `${slug}.mdx`
  )

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")

  const { data, content } = matter(fileContent)

  return {
    metadata: data as CaseStudyMetadata,
    content,
  }
}

export function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date()

  if (!date?.includes("T")) {
    date = `${date}T00:00:00`
  }

  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()

  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()

  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate: string

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = "Today"
  }

  const fullDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate
}
