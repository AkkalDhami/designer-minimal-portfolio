import { Project } from "@/data/projects"
import { IconArrowUpRight } from "@tabler/icons-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-lg bg-card"
    >
      <Link
        href={project.href}
        className="relative h-52 w-full overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          height={200}
          width={400}
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
        />

        <p
          aria-label={`Open ${project.title} case study`}
          className="absolute right-4 bottom-4 flex size-10 translate-y-2 scale-90 items-center justify-center rounded-full bg-foreground text-accent opacity-0 shadow-lg shadow-black/30 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
        >
          <IconArrowUpRight size={18} strokeWidth={2.4} />
        </p>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg leading-snug font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}
