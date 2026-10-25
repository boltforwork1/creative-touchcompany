import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const navKeys = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "projects", to: "/projects" },
  { key: "contact", to: "/contact" },
] as const

export function Footer() {
  const { t } = useTranslation()

  const contactItems = [
    {
      icon: MapPin,
      text: t("footer.address"),
      href: undefined,
      ltr: false,
    },
    {
      icon: Phone,
      text: t("footer.phone"),
      href: "tel:+971565873939",
      ltr: true,
    },
    {
      icon: Mail,
      text: t("footer.email"),
      href: "mailto:info@creative-touchfze.com",
      ltr: true,
    },
    {
      icon: Clock,
      text: t("footer.hours"),
      href: undefined,
      ltr: false,
    },
  ] as const

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
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

            <p className="max-w-xs text-sm leading-loose text-slate-600 rtl:leading-[1.9]">
              {t("footer.description")}
            </p>

            {/* Gold accent line */}
            <div className="h-px w-12 bg-amber-500" />
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.25em] text-amber-500 uppercase rtl:tracking-normal">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-3">
              {navKeys.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-normal tracking-wide transition-colors duration-200 ${
                      isActive ? "text-amber-600" : "text-slate-900 hover:text-amber-500"
                    }`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.25em] text-amber-500 uppercase rtl:tracking-normal">
              {t("footer.contactInfo")}
            </h4>
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href, ltr }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm leading-snug text-slate-900 transition-colors duration-200 hover:text-amber-500"
                    >
                      {ltr ? <span dir="ltr">{text}</span> : text}
                    </a>
                  ) : (
                    <span className="text-sm leading-snug text-slate-900">
                      {ltr ? <span dir="ltr">{text}</span> : text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-slate-600">
            <span dir="ltr">{t("footer.rights")}</span>{" "}
            {t("footer.poweredBy")}{" "}
            <span className="text-amber-600" dir="ltr">{t("footer.brand")}</span>
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent sm:hidden" />
        </div>
      </div>
    </footer>
  )
}
