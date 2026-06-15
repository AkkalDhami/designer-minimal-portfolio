import { ProjectsSection } from "@/components/projects/project-section"
import { Container } from "@/components/ui/container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "A collection of thoughtfully crafted digital experiences that blend aesthetics, usability, and strategic design to solve real-world problems.",
}

export default function page() {
  return (
    <Container>
      <ProjectsSection />
    </Container>
  )
}
