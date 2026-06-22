export type ExperienceItemType = {
  id: string
  companyName: string
  role: string
  period: string
  designation: string
  responsibilities: string[]
  tags?: string[]
}

export const EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Studio North",
    role: "Sr. UX/UI Designer",
    period: "Jan 2019 - Present",
    designation: "Senior UX/UI Designer in FINTECH Products",
    responsibilities: [
      "Demonstrated product design concepts, showcasing innovative and user-centered solutions.",
      "Implemented an effective design process to create and iterate on new features, ensuring a seamless user experience.",
      "Collaborated closely with clients to gather requirements, understanding their goals and translating them into impactful design solutions.",
      "Conducted thorough market research to identify user needs, industry trends, and competitor analysis, informing design decisions and driving product improvements.",
      "Utilized design tools such as Figma, Photoshop, and Sketch app to create visual assets and effectively communicate design ideas through storyboards, process flows, wireframes, and information architecture.",
      "Developed design flows and screens, ensuring consistency and usability throughout the FINTECH products.",
    ],
    tags: ["Figma", "Photoshop", "Wireframing", "Prototyping"],
  },
  {
    id: "1.1",
    companyName: "Studio North",
    role: "Lead Product Designer",
    period: "Apr 2022 - Present",
    designation: "Lead Product Designer for premium digital products",
    responsibilities: [
      "Led concept direction for design systems, dashboards, and onboarding flows across core product experiences.",
      "Partnered with product and engineering teams to define interaction patterns that improved clarity and reduced friction.",
      "Refined visual language across web and mobile surfaces to create a more consistent, elevated brand experience.",
      "Created high-fidelity prototypes and presentation-ready design narratives for client and stakeholder reviews.",
    ],
    tags: ["Design Systems", "Product Strategy", "Figma", "Prototyping"],
  },
  {
    id: "1.2",
    companyName: "Studio North",
    role: "Visual Designer",
    period: "Jan 2021 - Mar 2022",
    designation: "Visual Designer focused on interfaces and brand expression",
    responsibilities: [
      "Designed polished interface layouts that aligned user needs with a clean, minimal aesthetic.",
      "Explored typography, spacing, and color systems to strengthen hierarchy and readability.",
      "Produced landing pages, product screens, and campaign visuals that felt cohesive across touchpoints.",
      "Supported design reviews by turning rough ideas into clear, well-structured visual concepts.",
    ],
    tags: ["Visual Design", "UI Systems", "Typography", "Branding"],
  },
  {
    id: "2",
    companyName: "Form & Flow",
    role: "Sr. UX/UI Designer",
    period: "Jun 2018 - Jan 2019",
    designation: "Senior UX/UI Designer",
    responsibilities: [
      "Sole designer responsible for UX and creative design for a Fleet management app.",
      "Applied value proposition research to guide the development of UX artifacts, including information architecture, prototyping, wire-framing, and user testing methodologies.",
      "Conducted user research to understand user needs and preferences.",
      "Developed intuitive information architecture for improved app navigation.",
      "Created interactive prototypes and wireframes to visualize design concepts.",
      "Conducted user testing sessions to gather feedback and refine designs.",
      "Stayed updated with industry trends and best practices in UX/UI design.",
    ],
    tags: ["UI Design", "Wireframing", "Prototyping", "Figma"],
  },
  {
    id: "3",
    companyName: "Pixel Harbor",
    role: "Sr. UI/UX Designer",
    period: "May 2017 - May 2018",
    designation: "Front End and UX/UI Designer | Web Designer",
    responsibilities: [
      "Created visually appealing PSD designs for mobile and web apps.",
      "Converted PSD designs to responsive HTML code for optimal display on all devices.",
      "Collaborated with the development team to ensure seamless integration of design elements.",
      "Emphasized user-centered design principles for enhanced usability.",
      "Stayed updated with the latest design trends and best practices.",
    ],
    tags: ["Web Design", "UI Design", "Wireframing", "Prototyping"],
  },
  {
    id: "3.1",
    companyName: "Pixel Harbor",
    role: "Jr. UI/UX Designer",
    period: "Sep 2016 - May 2017",
    designation: "Front End and UX/UI Designer | Web Designer",
    responsibilities: [
      "Created visually appealing PSD designs for mobile and web apps.",
      "Converted PSD designs to responsive HTML code for optimal display on all devices.",
      "Collaborated with the development team to ensure seamless integration of design elements.",
      "Emphasized user-centered design principles for enhanced usability.",
      "Stayed updated with the latest design trends and best practices.",
    ],
    tags: ["Web Design", "UI Design", "Wireframing", "Prototyping"],
  },

  {
    id: "4",

    companyName: "Lumen Craft",
    role: "Web Designer",
    period: "Sep 2013 - Nov 2016",
    designation: "Front End and UX/UI Designer | Web Designer",
    responsibilities: [
      "Designed and optimized user experience flows for job portal pages and various applications, enhancing usability and user satisfaction.",
      "Created visually appealing and user-friendly PSD designs for mobile and web applications.",
      "Translated PSD designs into responsive HTML code, ensuring compatibility and optimal display across all devices.",
      "Collaborated with the development team, providing valuable guidance in CSS and HTML structure to enhance the application's design and functionality.",
    ],
    tags: ["Web Design", "UI Design", "Wireframing", "Prototyping"],
  },
  {
    id: "5",
    companyName: "Mossline Studio",
    role: "Graphic and Web Designer-Intern",
    period: "Jan 2010 - Dec 2012",
    designation: "Graphic Designer | Junior",
    responsibilities: [
      "Designed website banners to enhance visual appeal.",
      "Created impactful logo designs.",
      "Developed icons and other graphical elements.",
      "Collaborated with clients and team members.",
      "Utilized various design software and tools.",
    ],
    tags: ["Web Design", "UI Design", "Wireframing", "Prototyping"],
  },
  {
    id: "5.1",
    companyName: "Mossline Studio",
    role: "Junior Brand Designer",
    period: "Jan 2013 - Dec 2014",
    designation: "Brand and visual designer for early-stage identity work",
    responsibilities: [
      "Created logo variations and simple identity assets for startup and small-business clients.",
      "Designed supporting marketing visuals that helped unify brand presence across digital touchpoints.",
      "Prepared clean presentation boards for concept reviews and client feedback sessions.",
      "Explored color, layout, and typography combinations to establish stronger visual direction.",
    ],
    tags: ["Brand Identity", "Logo Design", "Typography", "Visual Design"],
  },
  {
    id: "5.2",
    companyName: "Mossline Studio",
    role: "Creative Design Intern",
    period: "Jun 2012 - Dec 2012",
    designation: "Intern supporting brand and digital design tasks",
    responsibilities: [
      "Assisted with social media graphics, web banners, and small marketing visuals for client deliverables.",
      "Prepared design files, exports, and presentation materials to support the senior design team.",
      "Helped refine layout details and visual consistency across a range of brand touchpoints.",
    ],
    tags: ["Graphic Design", "Brand Assets", "Layout", "Visual Support"],
  },
  {
    id: "5.3",
    companyName: "Mossline Studio",
    role: "Graphic Design Assistant",
    period: "Jan 2010 - May 2012",
    designation: "Assistant designer focusing on print and web support work",
    responsibilities: [
      "Produced banner concepts, icon sets, and small layout systems for web and promotional use.",
      "Worked on foundational brand assets that helped maintain consistency across client materials.",
      "Supported production tasks and design revisions while developing stronger visual craft.",
    ],
    tags: ["Graphic Design", "Production", "Branding", "Web Assets"],
  },
]
