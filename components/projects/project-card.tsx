import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"
import { IconArrowUpRight } from "@tabler/icons-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-lg bg-card text-left transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative h-52 w-full overflow-hidden text-left outline-none"
        aria-label={`Open ${project.title} gallery`}
      >
        <motion.div
          layoutId={`project-preview-${project.id}`}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            height={200}
            width={400}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

        <p
          aria-hidden="true"
          className="pointer-events-none absolute right-4 bottom-4 flex size-10 translate-y-2 scale-90 items-center justify-center rounded-full bg-foreground text-accent opacity-0 shadow-lg shadow-black/30 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
        >
          <IconArrowUpRight size={18} strokeWidth={2.4} />
        </p>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg leading-snug font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>
          })}
        </div>

        {project.href && project.href !== "#" ? (
          <Link
            href={project.href}
            onClick={(event) => event.stopPropagation()}
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            View Case Study
            <IconArrowUpRight size={16} />
          </Link>
        ) : null}
      </div>
    </motion.article>
  )
}

export const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        "inline-flex border items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}