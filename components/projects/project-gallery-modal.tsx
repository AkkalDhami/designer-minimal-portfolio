"use client"

import { Project } from "@/data/projects"
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Tag } from "./project-card"

function getGallery(project: Project) {
  return project.gallery?.length ? project.gallery : [project.image]
}

export function ProjectGalleryModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const gallery = useMemo(() => (project ? getGallery(project) : []), [project])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!project) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(0)
    setDirection(0)
  }, [project?.id, project])

  useEffect(() => {
    if (!project) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
        return
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setDirection(-1)
        setCurrentIndex((current) =>
          current === 0 ? gallery.length - 1 : current - 1
        )
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        setDirection(1)
        setCurrentIndex((current) =>
          current === gallery.length - 1 ? 0 : current + 1
        )
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [gallery.length, onClose, project])

  useEffect(() => {
    if (!project) return

    const originalOverflow = document.body.style.overflow
    const originalGalleryOpen = document.body.dataset.projectGalleryOpen

    document.body.style.overflow = "hidden"
    document.body.dataset.projectGalleryOpen = "true"

    return () => {
      document.body.style.overflow = originalOverflow

      if (originalGalleryOpen === undefined) {
        delete document.body.dataset.projectGalleryOpen
        return
      }

      document.body.dataset.projectGalleryOpen = originalGalleryOpen
    }
  }, [project])

  if (!project) return null

  const currentImage = gallery[currentIndex]
  const canNavigate = gallery.length > 1

  const movePrevious = () => {
    if (!canNavigate) return
    setDirection(-1)
    setCurrentIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    )
  }

  const moveNext = () => {
    if (!canNavigate) return
    setDirection(1)
    setCurrentIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        key={project.id}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          type="button"
          aria-label="Close gallery"
          className="absolute inset-0 cursor-default bg-background/20 backdrop-blur-2xl"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <LayoutGroup id={`project-gallery-${project.id}`}>
          <motion.section
            layout
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/40"
          >
            <div className="flex items-start justify-between gap-4 border-b px-5 py-4 sm:px-6">
              <h3 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
                {project.title}
              </h3>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-foreground/20"
                aria-label="Close gallery"
              >
                <IconX size={18} />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden p-3 sm:min-h-128 sm:p-5">
                <div className="relative pb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl shadow-inner shadow-black/10">
                  <motion.div
                    layoutId={`project-preview-${project.id}`}
                    className="relative aspect-4/3 w-full overflow-hidden rounded-2xl"
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                      custom={direction}
                    >
                      <motion.div
                        key={currentImage}
                        custom={direction}
                        variants={{
                          enter: (currentDirection: number) => ({
                            x: currentDirection > 0 ? 80 : -80,
                            opacity: 0,
                            scale: 0.985,
                          }),
                          center: {
                            x: 0,
                            opacity: 1,
                            scale: 1,
                          },
                          exit: (currentDirection: number) => ({
                            x: currentDirection > 0 ? -80 : 80,
                            opacity: 0,
                            scale: 0.985,
                          }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.26, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentImage}
                          alt={`${project.title} gallery image ${currentIndex + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 64vw"
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
                    <div className="flex flex-wrap bg-card/90 border backdrop-blur-2xl rounded-full py-2 px-4 items-center gap-2">
                      {gallery.map((image, index) => {
                        const isActive = index === currentIndex

                        return (
                          <button
                            key={image}
                            type="button"
                            onClick={() => {
                              setDirection(index > currentIndex ? 1 : -1)
                              setCurrentIndex(index)
                            }}
                            aria-label={`Go to image ${index + 1}`}
                            className="relative flex size-4 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-foreground/20"
                          >
                            {isActive ? (
                              <motion.span
                                layoutId={`project-gallery-active-dot-${project.id}`}
                                className="size-4 rounded-full bg-foreground"
                                transition={{
                                  type: "spring",
                                  bounce: 0.35,
                                  duration: 0.45,
                                }}
                              />
                            ) : (
                              <span className="size-3.5 rounded-full bg-muted-foreground/30 transition-colors hover:bg-muted-foreground/60" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {canNavigate && (
                    <>
                      <button
                        type="button"
                        onClick={movePrevious}
                        aria-label="Previous image"
                        className="absolute top-1/2 left-1 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/10 backdrop-blur-sm transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-foreground/20 sm:left-4"
                      >
                        <IconChevronLeft size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={moveNext}
                        aria-label="Next image"
                        className="absolute top-1/2 right-1 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/10 backdrop-blur-sm transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-foreground/20 sm:right-4"
                      >
                        <IconChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-5 border-t px-5 py-5 sm:px-6 lg:border-t-0 lg:border-l">
                <p className="line-clamp-4 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="hidden flex-wrap gap-2 sm:flex">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t pt-5">
                  {project.href && project.href !== "#" ? (
                    <Link
                      href={project.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-foreground/90"
                    >
                      View Case Study
                      <IconArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center justify-center rounded-full border border-dashed border-border px-5 py-3 text-sm font-medium text-muted-foreground">
                      Case study coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        </LayoutGroup>
      </motion.div>
    </AnimatePresence>
  )
}
