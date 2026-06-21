import { motion } from "motion/react"
import { IconArrowUpRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  description: string
  icon: React.ElementType
  className?: string
  delay?: number
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}: Props) {
  return (
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
        delay,
        duration: 0.5,
      }}
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card p-4",
        className
      )}
    >
      <div className="relative flex flex-col justify-between">
        <motion.div className="w-fit rounded-lg border bg-muted p-4">
          <Icon size={30} />
        </motion.div>

        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>

            <motion.div
              variants={{
                hover: {
                  rotate: 45,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="flex size-10 items-center justify-center rounded-full border bg-card p-2 text-muted-foreground duration-300 ease-in-out group-hover:bg-foreground group-hover:text-accent"
            >
              <IconArrowUpRight size={20} />
            </motion.div>
          </div>

          <motion.p
            variants={{
              hover: {
                y: -2,
              },
            }}
            className="max-w-sm text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
