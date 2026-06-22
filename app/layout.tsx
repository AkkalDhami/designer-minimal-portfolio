import { Geist_Mono, Manrope, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Metadata } from "next"
import { APP_URL } from "@/lib/constants"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
})

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Arjun Ghimire — Product Designer & UX Specialist",
    template: `%s | Arjun Ghimire — Product Designer & UX Specialist`,
  },
  description:
    "Portfolio of Arjun Ghimire, a product designer specializing in UX/UI for fintech and web applications. Explore case studies on remittance apps, SaaS platforms, and e-commerce solutions.",
  keywords: [
    "UI Designer",
    "UX Designer",
    "Product Designer",
    "Design Systems",
    "User Experience",
    "User Interface",
    "Interaction Design",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Fintech Design",
    "SaaS Design",
    "Portfolio",
  ],
  authors: [{ name: "Arjun Ghimire" }],
  creator: "Arjun Ghimire",
  openGraph: {
    title: "Arjun Ghimire — Senior UI/UX Designer",
    description:
      "Crafting user-centered digital products through research, strategy, and thoughtful design.",
    url: APP_URL,
    siteName: "Arjun Ghimire",
    images: [
      {
        url: `${APP_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Arjun Ghimire — Senior UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Ghimire — Senior UI/UX Designer",
    description:
      "Portfolio showcasing UI/UX design, product strategy, design systems, and case studies.",
    images: [`${APP_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        manrope.variable,
        oxaniumHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
