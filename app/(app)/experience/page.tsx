import { ExperienceSection } from "@/components/experience/experience-section"
import { Container } from "@/components/ui/container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Years of hands-on experience crafting digital products, designing user-centered interfaces, and collaborating with teams to build meaningful web and mobile experiences.",
}

export default function page() {
  return (
    <Container>
      <ExperienceSection />
    </Container>
  )
}
