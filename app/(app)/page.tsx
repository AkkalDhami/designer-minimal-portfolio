import { ExperienceSection } from "@/components/experience/experience-section"
import { HeroSection } from "@/components/hero/hero-section"
import { Container } from "@/components/ui/container"

export default function page() {
  return (
    <Container className="z-10 overflow-hidden px-8 sm:px-4">
      <HeroSection />
      <ExperienceSection />
    </Container>
  )
}
