"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import type { Route } from "next"
import { ThemeToggle } from "@/components/shared/theme-toggle"

import { Profile } from "@/components/shared/profile"
import { isActiveLink } from "@/utils/link"
import { IconMenu2 } from "@tabler/icons-react"

interface MenuItem {
  label: string
  href: Route
}

export const menuItems: MenuItem[] = [
  {
    label: "Projects",
    href: "/projects" as Route,
  },
  {
    label: "Experience",
    href: "/experience" as Route,
  },
  {
    label: "About",
    href: "/#about" as Route,
  },
  {
    label: "Services",
    href: "/#services" as Route,
  },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const t = useTranslations("shared")

  const pathname = usePathname()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    const syncGalleryState = () => {
      setGalleryOpen(document.body.dataset.projectGalleryOpen === "true")
    }

    syncGalleryState()

    const observer = new MutationObserver(syncGalleryState)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-project-gallery-open"],
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted || galleryOpen) return null

  return (
    <>
      <header className="sticky top-0 right-0 left-0 z-30 mx-auto flex max-w-4xl justify-center overflow-hidden">
        <nav
          className={cn(
            "relative flex items-center justify-between bg-background px-4 py-2.5 transition-all duration-500",
            "w-full"
          )}
        >
          <Profile />

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="border-edge/60 hidden items-center space-x-3 pt-2 backdrop-blur-md sm:flex">
              {menuItems.map((item) => {
                const isActive = isActiveLink(
                  pathname,
                  item.href,
                  item.href === "/projects" ? ["/case-studies"] : []
                )

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative cursor-pointer pb-2 pl-1 font-heading text-xs font-medium tracking-widest uppercase transition-all duration-300",
                      isActive && "text-foreground",
                      "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeToggle className="" />
              <Sheet>
                <SheetTrigger>
                  <IconMenu2 className="text-muted-foreground hover:text-foreground sm:hidden" />
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-2 p-12">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "relative cursor-pointer pb-2 pl-1 font-heading text-base font-medium tracking-widest uppercase transition-all duration-300",
                          isActiveLink(pathname, item.href) &&
                            "text-foreground",
                          "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
