import { NavLink } from "react-router-dom"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

const contactItems = [
  {
    icon: MapPin,
    text: "Ajman Free Zone, UAE",
    href: undefined,
  },
  {
    icon: Phone,
    text: "+971 56 587 3939",
    href: "tel:+971565873939",
  },
  {
    icon: Mail,
    text: "info@creative-touchfze.com",
    href: "mailto:info@creative-touchfze.com",
  },
  {
    icon: Clock,
    text: "Mon–Fri 09:00–23:00 · Sun 09:00–16:00",
    href: undefined,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <NavLink to="/" className="group inline-flex items-center" aria-label="Creative Touch home">
              <img
                src="/logo.png"
                alt="Creative Touch Logo"
                className="h-20 w-auto max-w-[320px] object-contain"
              />
            </NavLink>

            <p className="max-w-xs text-sm leading-relaxed text-[#6B6580]">
              From digital design to full brand identity and marketing solutions — we shape brands that leave a lasting impression.
            </p>

            {/* Gold accent line */}
            <div className="h-px w-12 bg-[#C8A96E]" />
          </div>

          {/* Navigation column */}
          <div>
            <h4
              className="mb-6 text-xs font-semibold tracking-[0.25em] text-[#C8A96E] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors duration-200 ${
                      isActive ? "text-[#C8A96E]" : "text-[#1A1820] hover:text-[#C8A96E]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="mb-6 text-xs font-semibold tracking-[0.25em] text-[#C8A96E] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#C8A96E]"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm leading-snug text-[#1A1820] transition-colors duration-200 hover:text-[#C8A96E]"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm leading-snug text-[#1A1820]">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.08] pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-[#6B6580]">
            © 2026. All rights reserved. Powered By{" "}
            <span className="text-[#C8A96E]">Creative Touch</span>
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent sm:hidden" />
        </div>
      </div>
    </footer>
  )
}
