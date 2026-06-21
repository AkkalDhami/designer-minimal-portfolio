import {
  IconSearch,
  IconGitBranch,
  IconLayoutGrid,
  IconSparkles,
  IconCode,
  IconBulb,
  IconDeviceMobile,
  IconUsers,
} from "@tabler/icons-react"

interface ProcessTimelineProps {
  steps: string
}

const icons = [
  IconSearch, // 0
  IconGitBranch, // 1
  IconLayoutGrid, // 2
  IconSparkles, // 3
  IconCode, // 4
  IconBulb, // 5
  IconDeviceMobile, // 6
  IconUsers, // 7
]

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const stepsArray = steps
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <div className="my-6 overflow-x-auto">
      <div className="relative flex min-w-max items-center justify-between gap-6">
        <div className="absolute top-8 right-4 left-8 hidden h-[3px] bg-foreground/10 sm:block" />
        {stepsArray.map((step, index) => {
          const Icon = icons[index] ?? IconSearch

          return (
            <div key={step} className="relative flex items-center">
              <div className="z-30 flex flex-col items-center gap-4 overflow-hidden">
                <div className="relative flex size-10 items-center justify-center rounded-full border bg-card shadow-sm sm:size-14">
                  <Icon className="text-accent-foreground" stroke={1.8} />
                </div>

                <span className="text-sm font-medium sm:text-lg">{step}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
