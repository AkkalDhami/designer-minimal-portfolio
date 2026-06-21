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
    companyName: "Vanilla Tech",
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
    id: "2",
    companyName: "Wolfmatrix",
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
    companyName: "JauntI2",
    role: "UI/UX & Frontend Designer",
    period: "Sep 2016 - May 2018",
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
    companyName: "Exolutus Pvt. Ltd",
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
    companyName: "Green Hub Private Limited",
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
]
