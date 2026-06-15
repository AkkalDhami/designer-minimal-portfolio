"use client"

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Section } from "@/components/ui/section"

import React from "react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { EMAIL_URL, LINKEDIN_URL, PHONE_NO } from "@/lib/constants"
import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react"

type CtaVariant = "dark" | "light"

interface CtaSectionProps {
  variant?: CtaVariant
}

const ctaLinks = [
  {
    label: "Let's Talk",
    value: `tel:${PHONE_NO}`,
    icon: IconPhone,
  },
  {
    label: "Send Me an Email",
    value: EMAIL_URL,
    icon: IconMail,
  },
  {
    label: "Let's Connect",
    value: LINKEDIN_URL,
    icon: IconBrandLinkedin,
  },
]

export const CtaSection = ({ variant }: CtaSectionProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const theme = (variant ??
    (mounted ? resolvedTheme : undefined) ??
    "dark") as CtaVariant
  const isLight = theme === "light"

  return (
    <>
      <Section className={cn("relative w-full pt-1 pb-12")} data-theme={theme}>
        <div className="fle relative mx-auto max-w-full flex-col items-center justify-center py-1 sm:px-4">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)] bg-size-[3rem_3rem]",
              isLight
                ? "bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(255,255,0,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)]"
            )}
            aria-hidden
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute left-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#left-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 1 12 v 65 l 28 24 v 70 " />
              </g>
              <g mask={`url(#left-mask-${theme})`}>
                <circle
                  className="leftrightline left-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#left-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`left-mask-${theme}`}>
                  <path
                    d="M 1 12 v 65 l 28 24 v 70"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`left-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`left-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute right-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#right-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 29 12 v 65 l -28 24 v 65" />
              </g>
              <g mask={`url(#right-mask-${theme})`}>
                <circle
                  className="leftrightline right-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#right-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`right-mask-${theme}`}>
                  <path
                    d="M 29 12 v 65 l -28 24 v 65"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`right-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`right-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.h2
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mt-18 max-w-4xl bg-clip-text pb-2 text-center font-heading text-3xl leading-[1.15] font-medium tracking-tighter text-balance text-transparent sm:text-5xl md:text-[4.2rem]",
              isLight
                ? "bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-700"
                : "bg-linear-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/40"
            )}
          >
            Let&apos;s create something remarkable together.
          </motion.h2>
          <motion.p
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mt-3 mb-8 max-w-sm bg-clip-text text-center text-base leading-relaxed text-balance text-transparent sm:max-w-3xl sm:text-lg",
              isLight
                ? "bg-linear-to-br from-neutral-600 via-neutral-500 to-neutral-600/90"
                : "bg-linear-to-br from-neutral-400 via-neutral-300 to-neutral-400/90"
            )}
          >
            I&lsquo;m always excited to collaborate on innovative projects,
            share ideas, and contribute to meaningful ventures. If you have
            something in mind, I&apos;d love to hear from you.
          </motion.p>
          <motion.div
            initial={{
              y: 5,
              filter: "blur(5px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4"
          >
            {ctaLinks.map((item, i) => (
              <Link
                key={item.label}
                href={item.value}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: i % 2 === 0 ? "outline" : "default",
                  }),
                  "gap-3"
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </Section>
      <style>
        {`    
.leftrightline {
  offset-anchor: 10px 0px;
  animation: leftrightline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.left-line {
  offset-path: path(
    "M 1 12 v 65 l 28 24 v 80"
  );
}
.right-line {
  offset-path: path(
    "M 29 12 v 65 l -28 24 v 80"
  );
}

@keyframes leftrightline-animation-path {
  0% {
    offset-distance: 0%;
  }
  60% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  )
}
