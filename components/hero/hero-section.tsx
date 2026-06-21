"use client"

import { motion } from "motion/react"
import { Section } from "@/components/ui/section"
import { AnimatedText } from "@/components/ui/animated-text"
import { SocialLinks } from "@/components/shared/social-link"
import { FULL_NAME } from "@/lib/constants"
import Image from "next/image"
import { Designation } from "@/components/shared/designation"
import { Cta } from "@/components/shared/cta"
import { ContactsInfo } from "@/components/shared/contact-info"
import { BlurText } from "@/components/ui/blur-text"

export function HeroSection() {
  const text =
    "Design Engineer and Product Designer with 10+ years of experience creating intuitive interfaces, scalable design systems, and user-centered digital products. I combine design thinking with frontend expertise to build experiences that are both beautiful and effective."

  return (
    <Section>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex flex-wrap items-center gap-6 sm:justify-start"
        >
          <Image
            width={220}
            height={220}
            src="/profile.jpg"
            alt="Profile"
            className="hidden size-40 rounded-full object-cover object-bottom-right grayscale-0 duration-200 hover:grayscale-0 sm:block"
          />
          <div className="flex flex-col gap-2">
            <BlurText
              text={FULL_NAME}
              delay={40}
              animateBy="letters"
              direction="top"
              className="font-heading text-2xl font-medium sm:text-4xl"
            />
            <Designation
              type="flip"
              className="font-heading text-lg text-muted-primary"
            />
            <SocialLinks className="mt-2 gap-4 py-0" />
          </div>
        </motion.div>
        <AnimatedText
          delay={0.05}
          text={text}
          className="text-muted-foreground sm:text-lg"
        />

        <Cta />
        <ContactsInfo className="py-0" />
      </motion.div>
    </Section>
  )
}
