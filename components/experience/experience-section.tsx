"use client"

import { Section } from "@/components/ui/section"
import { SubHeading } from "@/components/ui/sub-heading"
import { Heading } from "@/components/ui/heading"
import { AnimatedText } from "@/components/ui/animated-text"

import { EXPERIENCE } from "@/data/experience"
import { ExperienceCard } from "./experience-card"
import { Experience } from "./test"

export function ExperienceSection({ home = false }: { home?: boolean }) {
  return (
    <Section id="experience" className="space-y-1">
      <Heading>
        <AnimatedText text={"Work Experience"} delay={0.05} />
      </Heading>
      <SubHeading as="div">
        <AnimatedText
          text={
            "Years of hands-on experience crafting digital products, designing user-centered interfaces, and collaborating with teams to build meaningful web and mobile experiences."
          }
        />
      </SubHeading>

      {home ? (
        <Experience />
      ) : (
        <div className="mt-4 grid space-y-4">
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </Section>
  )
}
