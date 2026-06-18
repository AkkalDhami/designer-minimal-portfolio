"use client"

import { Profile } from "@/components/shared/profile"
import { motion } from "motion/react"
import { menuItems } from "./navbar"
import { SocialLinks } from "@/components/shared/social-link"
import { FULL_NAME } from "@/lib/constants"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mx-auto h-auto max-w-4xl px-8 py-2.5 pb-16 sm:px-4 sm:pb-12">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Profile className="object-top-right" />
            <div className="flex flex-col gap-0.5">
              <p className="font-heading font-medium sm:text-lg">{FULL_NAME}</p>
              <p className="text-sm text-muted-foreground">UX/UI Designer </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {menuItems.map((item) => (
              <div key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground duration-100 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex flex-wrap items-center justify-between gap-4 text-muted-foreground"
        >
          <SocialLinks className="gap-3 py-0" />
          <p>
            &copy; {new Date().getFullYear()} | {FULL_NAME} | All rights
            reserved
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          <p>
            Made by{" "}
            <Link
              href={"https://www.akkal.com.np"}
              target="_blank"
              className="underline underline-offset-2"
            >
              Akkal Dhami
            </Link>
          </p>
          <span>|</span>
          <p>
            <Link
              href={"https://github.com/AkkalDhami/designer-minimal-portfolio"}
              target="_blank"
              className="underline underline-offset-2"
            >
              Source Code
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
