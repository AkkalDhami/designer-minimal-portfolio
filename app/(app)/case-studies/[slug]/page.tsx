import { notFound } from "next/navigation"
import { CustomMDX } from "@/components/docs/mdx"
import { formatDate, getCaseStudy, getCaseStudySlugs } from "@/utils/docs"
import { Metadata } from "next"
import Image from "next/image"
import { CtaSection } from "@/components/shared/cta-section"

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({
    slug,
  }))
}
type Props = {
  params: Promise<{
    slug: string
  }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    return {
      title: "Not Found",
    }
  }

  const { metadata } = caseStudy

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      images: metadata.image ? [metadata.image] : [],
    },
  }
}
export default async function CaseStudy({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params

  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const { metadata, content } = caseStudy

  if (!metadata) {
    notFound()
  }

  return (
    <section className="space-y-8 [font-variant-ligatures:none]">
      <div className="space-y-3 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {metadata.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {metadata.summary}
        </p>
      </div>

      <div className="relative aspect-video rounded-xl">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          className="rounded-lg object-contain"
          priority
        />
      </div>

      <div className="grid gap-8 border-y py-8 md:grid-cols-3">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">Role</p>
          <p className="font-medium">{metadata.role}</p>
        </div>

        <div>
          <p className="mb-2 text-sm text-muted-foreground">Duration</p>
          <p className="font-medium">{metadata.duration}</p>
        </div>

        <div>
          <p className="mb-2 text-sm text-muted-foreground">Published</p>
          <p className="font-medium">{formatDate(metadata.publishedAt)}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b pb-6">
        {metadata.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-foreground px-4 py-1 text-sm font-medium text-accent"
          >
            {tool}
          </span>
        ))}
      </div>

      <article className="prose prose-neutral dark:prose-invert">
        <CustomMDX source={content} />
      </article>

      <CtaSection />
    </section>
  )
}
