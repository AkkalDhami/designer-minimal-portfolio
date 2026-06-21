"use client"

import { Section } from "@/components/ui/section"
import { SubHeading } from "@/components/ui/sub-heading"
import { Heading } from "@/components/ui/heading"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FilterKey, FILTERS, PROJECTS } from "@/data/projects"
import { ProjectCard } from "./project-card"
import { ProjectGalleryModal } from "./project-gallery-modal"

export function ProjectsSection() {
  const [active, setActive] = useState<FilterKey>("All Projects")
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  )

  const [move, setMove] = useState<number | null>(null)

  const visibleProjects = PROJECTS.filter(
    (p) => active === "All Projects" || p.filters.includes(active)
  )

  const selectedProject =
    PROJECTS.find((project) => project.id === selectedProjectId) ?? null

  return (
    <Section id="projects" className="relative space-y-1">
      <Heading>
        <AnimatedText text={"Featured Projects"} delay={0.05} />
      </Heading>
      <SubHeading as="div">
        <AnimatedText
          text={
            "A collection of thoughtfully crafted digital experiences that blend aesthetics, usability, and strategic design to solve real-world problems."
          }
        />
      </SubHeading>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter, i) => {
          const isActive = filter === active
          const isMoving = (move ?? (isActive ? i : -1)) === i
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              onMouseEnter={() => setMove(i)}
              onMouseLeave={() => setMove(null)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none"
            >
              {isMoving && (
                <motion.div
                  layoutId="nav-active"
                  initial={false}
                  className="group absolute inset-0 rounded-full bg-foreground"
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.5,
                  }}
                />
              )}

              <span
                className={cn(
                  "relative z-10 font-medium transition-colors",
                  isMoving
                    ? "text-accent"
                    : "text-muted-primary hover:text-primary"
                )}
              >
                {filter}
              </span>
            </button>
          )
        })}
      </motion.div>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelectedProjectId(project.id)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectGalleryModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </Section>
  )
}
