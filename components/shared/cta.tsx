"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedDiv } from "@/components/ui/animated-div"

export function Cta() {
  return (
    <AnimatedDiv className="flex items-center gap-4">
      <Button
        nativeButton={false}
        variant="default"
        render={
          <Link href="/projects" className="font-medium" rel="noopener noreferrer">
            View My Works
          </Link>
        }
      ></Button>
      <Button
        nativeButton={false}
        variant="outline"
        render={
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
          </Link>
        }
      ></Button>
    </AnimatedDiv>
  )
}
