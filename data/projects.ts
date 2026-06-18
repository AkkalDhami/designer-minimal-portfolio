export type FilterKey =
  | "All Projects"
  | "Fintech"
  | "E-commerce"
  | "Branding"
  | "Web App"

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  filters: FilterKey[]
  href: string
}

export const FILTERS: FilterKey[] = [
  "All Projects",
  "Fintech",
  "E-commerce",
  "Branding",
  "Web App",
]

export const PROJECTS: Project[] = [
  {
    id: "fjpay",
    title: "FJpay — Remittance App Redesign",
    image: "/projects/p1.png",
    description:
      "Led the end-to-end redesign of a cross-border remittance app, focusing on simplifying user flows and building trust to increase conversion for Nepali migrants in Japan.",
    tags: ["UX/UI", "Mobile App", "Design System"],
    filters: ["Fintech", "E-commerce"],
    href: "/case-studies/fjpay-remittance-app-redesign",
  },
  {
    id: "lodbod",
    title: "LODBOD — Transport Management System",
    image: "/projects/p1.png",
    description:
      "In-depth case study of the LODBOD transportation management system. Discover the UX/UI process, design system, and impact of digitizing logistics for shippers, vehicle owners, and drivers.",
    tags: ["Logistics", "Web + Mobile", "Enterprise UX"],
    filters: ["Web App", "Branding", "E-commerce"],
    href: "#",
  },
  {
    id: "eremit",
    title: "Eremit Website — Send Money Globally",
    image: "/projects/p1.png",
    description:
      "End-to-end UX/UI redesign for a Malaysia-based remittance platform, enabling Nepali migrants to send money home quickly, transparently, and with confidence.",
    tags: ["Logistics", "Web App", "Enterprise UX"],
    filters: ["Fintech", "Web App", "Branding"],
    href: "#",
  },
  {
    id: "dhikijato",
    title: "Dhikijato — Brand Identity & Logo Design",
    image: "/projects/p1.png",
    description:
      "Developed a modern and meaningful brand identity for Dhikijato, focusing on cultural essence and visual storytelling.",
    tags: ["Logo Design", "Brand Identity", "Visual Design"],
    filters: ["Fintech", "Web App", "Branding"],
    href: "#",
  },
]
