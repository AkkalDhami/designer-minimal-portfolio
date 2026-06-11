"use client"

import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"
import { IconMail, IconMapPin, IconPhone, IconUser } from "@tabler/icons-react"
import { CopyButton } from "@/components/shared/copy-button"
import { ADDRESS, FULL_NAME, PHONE_NO, RAW_EMAIL } from "@/lib/constants"
import { motion } from "motion/react"

const contactInfo = [
  {
    label: "Name",
    value: FULL_NAME,
    icon: IconUser,
  },
  {
    label: "Address",
    value: ADDRESS,
    icon: IconMapPin,
  },
  {
    label: "Phone",
    value: PHONE_NO,
    icon: IconPhone,
  },
  {
    label: "Email",
    value: RAW_EMAIL,
    icon: IconMail,
  },
]
export function ContactsInfo({ className }: { className?: string }) {
  return (
    <Section
      id="contacts"
      className={cn(className, "grid gap-4 sm:grid-cols-2")}
    >
      {contactInfo.map((item, i) => (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20
          }}

          whileInView={{
            opacity: 1,
            filter: "blur(0)",
            y: 0
          }}

          viewport={{ once: true }}

          transition={{
            duration: 0.4 + i * 0.1,
            ease: "easeInOut"
          }}

          key={item.label} className="group relative">
          <div className="flex w-full items-center gap-2">
            <div className="relative">
              <item.icon className="size-10 rounded-lg border border-neutral-500/30 bg-muted/60 primary-ring p-2 text-muted-foreground" />
            </div>
            <div className="flex flex-col text-primary">
              <span className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase">
                {item.label}
              </span>
              <p className="text-base font-normal">{item.value}</p>
              <CopyButton
                text={item.value}
                className={cn(
                  "p-1.5 text-muted-foreground opacity-0 hover:bg-muted",
                  "duration-200 ease-in-out group-hover:opacity-100"
                )}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </Section>
  )
}
