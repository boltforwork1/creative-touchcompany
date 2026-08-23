import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18n from "@/i18n/config"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "projects", to: "/projects" },
  { key: "contact", to: "/contact" },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()
  const isArabic = i18n.language === "ar"

  const toggleLanguage = () => {
    void i18n.changeLanguage(isArabic ? "en" : "ar")
  }

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
                  "relative text-[15px] font-semibold leading-relaxed transition-colors duration-200",
                  isArabic
                    ? "tracking-normal"
                    : "tracking-widest uppercase",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8A96E] after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? "text-[#C8A96E] after:w-full"
                    : "text-[#1A1820] hover:text-[#C8A96E]"
                )
              }
            >
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        {/* Right: Language switcher and CTA */}
        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("lang.label")}
            className="rounded-full border border-black/[0.08] px-4 py-2 text-sm font-bold transition-all duration-300 hover:border-[#C8A96E] hover:bg-[#C8A96E]/5 hover:text-[#C8A96E]"
          >
            {t("lang.switch")}
          </button>
          <NavLink
            to="/contact"
            className="rounded-full bg-[#C8A96E] px-6 py-2.5 text-sm font-semibold text-[#1A1820] transition-all duration-200 hover:scale-105 hover:bg-[#C8A96E]/90"
          >
            {t("nav.cta")}
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
                    "text-[15px] font-semibold leading-relaxed transition-colors duration-200",
                    isArabic ? "tracking-normal" : "tracking-widest uppercase",
                    isActive ? "text-[#C8A96E]" : "text-[#1A1820] hover:text-[#C8A96E]"
                  )
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-full border border-black/[0.08] px-4 py-2 text-left text-sm font-bold transition-all duration-300 hover:border-[#C8A96E] hover:bg-[#C8A96E]/5 hover:text-[#C8A96E]"
            >
              {t("lang.switch")}
            </button>
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-[#C8A96E] px-6 py-2.5 text-center text-sm font-semibold text-[#1A1820] transition-all duration-200 hover:bg-[#C8A96E]/90"
            >
              {t("nav.cta")}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
