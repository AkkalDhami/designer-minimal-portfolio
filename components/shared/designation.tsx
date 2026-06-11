"use client"
import { TextLoop } from "@/components/ui/text-loop"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { FlipWords } from "../ui/flip-words"

export function Designation({
  className,
  roles,
  type,
}: {
  className?: string
  roles?: string[]
  type?: "loop" | "flip"
}) {
  const [direction, setDirection] = useState(-1)

  const allRoles = [
    "UI/UX Designer",
    "Product Designer",
    "Experience Designer",
    "Visual Designer",
    "Interface Designer",
    "UX Researcher",
    "Frontend Designer",
    ...(roles ?? []),
  ]

  return type === "loop" ? (
    <TextLoop
      className={cn("text-base font-medium text-muted-foreground", className)}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 19,
        mass: 1.2,
      }}
      interval={2.5}
      onIndexChange={(index) => {
        setDirection(index === 0 ? -1 : 1)
      }}
      variants={{
        initial: {
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: "blur(4px)",
        },
        animate: {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
        exit: {
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: "blur(4px)",
        },
      }}
    >
      {allRoles.map((role) => (
        <span key={role}>{role}</span>
      ))}
    </TextLoop>
  ) : (
    <FlipWords
      words={allRoles}
      className={cn("text-base font-semibold text-muted-foreground", className)}
    />
  )
}
