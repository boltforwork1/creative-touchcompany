import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="group flex items-center" aria-label="Creative Touch home">
          <img
            src="/logo.png"
            alt="Creative Touch Logo"
            className="h-10 w-auto max-w-[220px] object-contain"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium tracking-widest uppercase transition-colors duration-200",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8A96E] after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? "text-[#C8A96E] after:w-full"
                    : "text-[#1A1820] hover:text-[#C8A96E]"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex items-center justify-center text-[#1A1820] transition-colors hover:text-[#C8A96E] md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/[0.06] bg-[#FAFAFA] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium tracking-widest uppercase transition-colors duration-200",
                    isActive ? "text-[#C8A96E]" : "text-[#1A1820] hover:text-[#C8A96E]"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
