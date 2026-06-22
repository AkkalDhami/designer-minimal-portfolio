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
  gallery?: string[]
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
    id: "northline",
    title: "Northline — Money Transfer App",
    image: "/projects/p1.png",
    gallery: [
      "/projects/p1.png",
      "/projects/p2.png",
      "/projects/p3.png",
      "/projects/p4.png",
    ],
    description:
      "Crafted a calm, trustworthy transfer experience with clearer flows, stronger hierarchy, and a cleaner path to completion.",
    tags: ["UX/UI", "Mobile App", "Design System"],
    filters: ["Fintech", "E-commerce"],
    href: "/case-studies/fjpay-remittance-app-redesign",
  },
  {
    id: "lodbod",
    title: "Gridline — Logistics Control Dashboard",
    gallery: [
      "/projects/p1.png",
      "/projects/p2.png",
      "/projects/p3.png",
      "/projects/p4.png",
    ],
    image: "/projects/p4.png",
    description:
      "Designed a dashboard concept for logistics teams with sharper navigation, clearer data grouping, and a more usable workflow.",
    tags: ["Logistics", "Web + Mobile", "Enterprise UX"],
    filters: ["Web App", "Branding", "E-commerce"],
    href: "#",
  },
  {
    id: "eremit",
    title: "Aster — Global Transfer Website",
    image: "/projects/p2.png",
    gallery: [
      "/projects/p1.png",
      "/projects/p2.png",
      "/projects/p3.png",
      "/projects/p4.png",
    ],
    description:
      "Shaped a polished landing experience for a remittance brand, balancing conversion goals with a premium visual language.",
    tags: ["Logistics", "Web App", "Enterprise UX"],
    filters: ["Fintech", "Web App", "Branding"],
    href: "#",
  },
  {
    id: "dhikijato",
    title: "Solace — Brand Identity System",
    image: "/projects/p3.png",
    gallery: [
      "/projects/p1.png",
      "/projects/p2.png",
      "/projects/p3.png",
      "/projects/p4.png",
    ],
    description:
      "Developed a modern identity system with a distinctive mark, refined type direction, and a flexible visual toolkit.",
    tags: ["Logo Design", "Brand Identity", "Visual Design"],
    filters: ["Fintech", "Web App", "Branding"],
    href: "#",
  },
]
