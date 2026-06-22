"use client"

import {
  IconBrush,
  IconDeviceMobile,
  IconWorld,
  IconTopologyStar3,
  IconComponents,
  IconSketching,
} from "@tabler/icons-react"
import { ServiceCard } from "./service-card"
import { Section } from "@/components/ui/section"
import { SubHeading } from "@/components/ui/sub-heading"
import { Heading } from "@/components/ui/heading"
import { AnimatedText } from "@/components/ui/animated-text"

export const services = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually engaging digital experiences.",
    icon: IconBrush,
    className: "md:col-span-1",
  },
  {
    title: "Mobile App Design",
    description: "Designing captivating and user-friendly mobile apps.",
    icon: IconDeviceMobile,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Website Design",
    description:
      "I craft modern, responsive web designs that tell your brand's story.",
    icon: IconWorld,
    className: "md:col-span-1",
  },
  {
    title: "Logo Design",
    description:
      "Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision.",
    icon: IconSketching,
    className: "md:col-span-1",
  },
  {
    title: "Landing Page Design",
    description: "Designing captivating and user-friendly landing pages.",
    icon: IconComponents,
    className: "md:col-span-1",
  },
  {
    title: "Wireframing & Prototyping",
    description: "Test and refine digital products through wireframing and prototyping.",
    icon: IconTopologyStar3,
    className: "md:col-span-1",
  },
]

export function ServiceSection() {
  return (
    <Section id="services" className="space-y-1">
      <Heading>
        <AnimatedText text={"Services"} delay={0.05} />
      </Heading>
      <SubHeading as="div">
        <AnimatedText
          text={
            "A collection of services that I offer to help you create exceptional digital experiences."
          }
        />
      </SubHeading>

      <div className="grid auto-rows-[220px] mt-4 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} delay={index * 0.1} />
        ))}
      </div>
    </Section>
  )
}
