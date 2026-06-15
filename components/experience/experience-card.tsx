"use client"

import { cn } from "@/lib/utils"

import {
  ChevronsUpDownIcon,
  ChevronsUpDownIconHandle,
} from "@/components/ui/chevrons-up-down-icon"
import { motion } from "motion/react"

import { useEffect, useRef, useState } from "react"
import { ExperienceItemType } from "@/data/experience"
import { IconBuilding } from "@tabler/icons-react"

export function ExperienceCard({
  item,
  className,
}: {
  item: ExperienceItemType
  className?: string
}) {
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
    <motion.article
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
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "relative w-auto space-y-2 rounded-lg border border-neutral-500/10 bg-card p-4",
        className
      )}
    >
      <motion.button
        data-open={open}
        onClick={() => setOpen((open) => !open)}
        className={cn(
          "group relative flex w-full cursor-pointer flex-wrap items-center justify-between gap-2"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-semibold text-foreground sm:text-lg">
            <IconBuilding className="size-8 rounded-md border bg-muted p-1.5 text-muted-foreground primary-ring" />
            {/* <CompanyLogo
              companyName={item.companyName}
              companyLogo={item.companyLogo}
            /> */}
            {item.companyName}
          </div>
          <span className="hidden sm:inline">-</span>
          <div className="hidden items-center gap-2 font-medium text-foreground sm:flex sm:text-lg">
            {item.role}
          </div>
        </div>
        <ChevronsUpDownIcon
          ref={chevronsUpDownIconRef}
          duration={0.2}
          className="size-5 text-muted-foreground duration-150 group-hover:text-foreground"
        />
      </motion.button>
      <motion.div
        animate={{
          height: open ? "auto" : 100,
        }}
        className={cn(
          "flex flex-col gap-2 sm:pl-10",
          !open && "mask-b-from-30%"
        )}
      >
        <div className="flex items-center gap-2 font-medium text-foreground sm:hidden sm:text-lg">
          {item.role}
        </div>
        <p className="font-medium text-muted-foreground">
          {item.period} ({item.duration})
        </p>
        <p className="font-medium text-muted-foreground">{item.designation}</p>
        <ul className="flex flex-col gap-2 pl-4">
          {item.responsibilities.map((responsibility) => (
            <motion.li
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
                  0.2 + item.responsibilities.indexOf(responsibility) * 0.1,
                ease: "easeInOut",
              }}
              key={responsibility}
              className="list-disc font-normal text-muted-primary"
            >
              {responsibility}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  )
}
