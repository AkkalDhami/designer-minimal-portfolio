"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { IconBriefcase, IconDiamondsFilled } from "@tabler/icons-react"
import { EXPERIENCE, ExperienceItemType } from "@/data/experience"
import {
  ChevronsUpDownIcon,
  ChevronsUpDownIconHandle,
} from "@/components/ui/chevrons-up-down-icon"
import { Tag } from "@/components/projects/project-card"

export function Experience() {
  const grouped = Object.values(
    EXPERIENCE.reduce<Record<string, ExperienceItemType[]>>((acc, item) => {
      if (!acc[item.companyName]) {
        acc[item.companyName] = []
      }

      acc[item.companyName].push(item)

      return acc
    }, {})
  )

  return (
    <div className="pl-1">
      {grouped.map((companyItems) => (
        <CompanySection
          key={companyItems[0].companyName}
          companyName={companyItems[0].companyName}
          items={companyItems}
        />
      ))}
    </div>
  )
}

type CompanySectionProps = {
  companyName: string
  items: ExperienceItemType[]
}

function CompanySection({ companyName, items }: CompanySectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="border-b py-4 last:border-b-0"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="rounded-lg border border-neutral-500/20 bg-card p-2 primary-ring">
          <IconBriefcase size={18} />
        </div>

        <h2 className="text-xl font-semibold">{companyName}</h2>
      </div>

      <div className="space-y-10">
        {items.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

function ExperienceCard({ item }: { item: ExperienceItemType }) {
  const [open, setOpen] = useState(false)
  const chevronsUpDownIconRef = useRef<ChevronsUpDownIconHandle>(null)

  useEffect(() => {
    const controls = chevronsUpDownIconRef.current
    if (!controls) return

    if (open) {
      controls.startAnimation()
    } else {
      controls.stopAnimation()
    }
  }, [open])

  return (
    <div className="group relative pl-2">
      <div className="absolute top-7 left-4.5 h-[calc(100%-1.2rem)] w-[1.1px] bg-neutral-500/20" />

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between"
      >
        <div className="flex gap-4">
          <IconDiamondsFilled className="mt-1 size-5 text-muted-foreground/60" />
          <div className="flex flex-col place-items-start gap-2">
            <h3 className="text-xl font-medium text-muted-primary group-hover:text-foreground">
              {item.role}
            </h3>

            <p className="text-xl text-muted-foreground">{item.period}</p>
          </div>
        </div>

        <ChevronsUpDownIcon
          ref={chevronsUpDownIconRef}
          duration={0.2}
          className="size-5 text-muted-foreground duration-150 group-hover:text-foreground"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              className="pt-6 pl-11"
            >
              <ul className="list-inside list-disc space-y-3 text-muted-foreground marker:text-muted-foreground">
                {item.responsibilities.map((responsibility) => (
                  <motion.li
                    key={responsibility}
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration:
                        0.2 +
                        item.responsibilities.indexOf(responsibility) * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>

              {item.tags && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
