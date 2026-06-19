/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Image, { ImageProps } from "next/image"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import React, { AnchorHTMLAttributes } from "react"
import { Result } from "./result"
import { Compare } from "@/components/ui/compare"
import { ProcessTimeline } from "@/components/docs/process-timeline"

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function CustomLink({ href = "", children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

function RoundedImage(props: ImageProps) {
  return (
    <Image
      className="rounded-lg"
      width={props.width}
      height={props.height}
      {...props}
    />
  )
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="my-4 text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
    </h1>
  ),

  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="my-3 text-3xl font-semibold tracking-tight">{children}</h2>
  ),

  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="my-3 text-2xl font-medium tracking-tight">{children}</h3>
  ),

  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="mt-8 mb-3 text-xl font-medium">{children}</h4>
  ),

  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="mt-6 mb-2 text-lg font-medium">{children}</h5>
  ),

  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="mt-6 mb-2 text-base font-medium text-muted-foreground">
      {children}
    </h6>
  ),

  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-6 text-lg leading-8 text-muted-foreground">{children}</p>
  ),

  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="animate-fade-in-blur list-disc space-y-2.5 pl-8 text-muted-foreground">
      {children}
    </ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="animate-fade-in-blur list-decimal space-y-2.5 pl-8 text-muted-foreground">
      {children}
    </ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li className="animate-fade-in-blur">{children}</li>
  ),

  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-8 border-l-4 border-neutral-700 pl-6 text-muted-foreground italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-6 border" />,

  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),

  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),

  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border-b px-4 py-3 text-left font-medium">{children}</th>
  ),

  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border-b px-4 py-3 text-muted-foreground">{children}</td>
  ),

  img: RoundedImage,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Result: Result,
  Compare: Compare,
  ProcessTimeline: ProcessTimeline,
}

interface CustomMDXProps extends MDXRemoteProps {
  components?: Record<string, React.ComponentType<unknown>>
}

export function CustomMDX({
  components: customComponents,
  ...props
}: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...components,
        ...(customComponents || {}),
      }}
    />
  )
}
