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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex flex-1 items-center justify-start">
          <NavLink to="/" className="group flex items-center" aria-label="Creative Touch home">
            <img
              src="/logo.png"
              alt="Creative Touch Logo"
              className="h-[80px] w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden flex-none items-center justify-center gap-8 md:flex">
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

        {/* Right: CTA Button */}
        <div className="hidden flex-1 items-center justify-end md:flex">
          <NavLink
            to="/contact"
            className="rounded-full bg-[#C8A96E] px-6 py-2.5 text-sm font-semibold text-[#1A1820] transition-all duration-200 hover:scale-105 hover:bg-[#C8A96E]/90"
          >
            Get in Touch
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
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
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-[#C8A96E] px-6 py-2.5 text-center text-sm font-semibold text-[#1A1820] transition-all duration-200 hover:bg-[#C8A96E]/90"
            >
              Get in Touch
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
