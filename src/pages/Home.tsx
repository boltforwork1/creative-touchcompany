import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ExternalLink,
  Maximize2,
  X,
  Palette,
  Printer,
  ShoppingBag,
  Megaphone,
  Layers,
  Monitor,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import i18n from "@/i18n/config"
import { StatsSection } from "@/components/StatsSection"
import { HeroSlider } from "@/components/HeroSlider"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations"

const serviceKeys = [
  { icon: Monitor, key: "web" },
  { icon: Palette, key: "brand" },
  { icon: Printer, key: "print" },
  { icon: ShoppingBag, key: "ecommerce" },
  { icon: Layers, key: "identity" },
  { icon: Megaphone, key: "marketing" },
] as const

type FeaturedProject = {
  categoryKey: string
  nameKey: string
  image: string
  liveLink?: string
}

const featuredProjects: FeaturedProject[] = [
  { categoryKey: "projects.categories.web", nameKey: "Al Wthaq Group", image: "/web1.jpg", liveLink: "https://alwethaqgroup.com" },
  { categoryKey: "projects.categories.web", nameKey: "Lamsat Alqsor", image: "/web2.jpg", liveLink: "https://lamsat-alqsoor.com" },
  { categoryKey: "projects.categories.brand", nameKey: "Brand Company 1", image: "/logos1.jpg" },
  { categoryKey: "projects.categories.print", nameKey: "Corporate Client 1", image: "/print1.jpg" },
  { categoryKey: "projects.categories.ecommerce", nameKey: "Store Name 1", image: "/store1.jpg", liveLink: "https://halalifeed.com" },
  { categoryKey: "projects.categories.apparel", nameKey: "EMES Decoration", image: "/bag1.jpg" },
]

export function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { t } = useTranslation()

  return (
    <main className="bg-white">
      {/* ===== 1. Hero Slider ===== */}
      <HeroSlider />

      {/* ===== 2. About Us Section ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Image placeholder */}
          <motion.div
            className="relative order-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="group overflow-hidden rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]">
              <img
                src="/our-promise.jpg"
                alt={t("about.title")}
                className="aspect-[5/4] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="order-2 flex flex-col"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal rtl:text-2xl rtl:font-bold">
              {t("about.eyebrow")}
            </span>
            <h2 className={`text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl ${i18n.language === 'ar' ? 'text-4xl md:text-5xl lg:text-7xl font-black leading-tight' : ''}`}>
              {t("about.title")}
            </h2>
            <p className="mt-6 text-lg font-normal leading-loose text-[#6B6580]">
              {t("about.body")}
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E] hover:text-[#1A1820] active:scale-[0.98] rtl:text-xl rtl:px-8 rtl:py-3"
              >
                {t("about.cta")}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 2.5 Stats & Metrics Section ===== */}
      <StatsSection />

      {/* ===== 3. Services Overview Section ===== */}
      <section className="bg-[#F8F7FA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Intro */}
          <motion.div
            className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal rtl:text-2xl rtl:font-bold"
              variants={fadeInUp}
            >
              {t("services.eyebrow")}
            </motion.span>
            <motion.h2
              className={`text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl ${i18n.language === 'ar' ? 'text-4xl md:text-5xl lg:text-7xl font-black leading-tight' : ''}`}
              variants={fadeInUp}
            >
              {t("services.title")}
            </motion.h2>
            <motion.p
              className="mt-6 text-lg font-normal leading-loose text-[#6B6580]"
              variants={fadeInUp}
            >
              {t("services.body")}
            </motion.p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {serviceKeys.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.key}
                  variants={staggerItem}
                  className="group rounded-2xl border border-black/[0.04] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  {/* Icon placeholder */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDFBF7] text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#C8A96E] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Section CTA */}
          <motion.div
            className="mt-14 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
            >
              {t("services.cta")}
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. Portfolio / Projects Highlight Section ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            className="mb-16 flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal rtl:text-2xl rtl:font-bold"
              variants={fadeInUp}
            >
              {t("projects.eyebrow")}
            </motion.span>
            <motion.h2
              className={`text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl ${i18n.language === 'ar' ? 'text-4xl md:text-5xl lg:text-7xl font-black leading-tight' : ''}`}
              variants={fadeInUp}
            >
              {t("projects.title")}
            </motion.h2>
          </motion.div>

          {/* Grid 3x2 */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.nameKey}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
              >
                {/* Image */}
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.nameKey}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96E] rtl:tracking-normal">
                    {t(project.categoryKey)}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                    {project.nameKey}
                  </h3>

                  <div className="mt-5">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1A1820]"
                      >
                        {t("projects.openBrowser")}
                        <ExternalLink
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 rtl:group-hover/link:-translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedImage(project.image)}
                        className="group/link inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1A1820]"
                      >
                        {t("projects.viewFullScreen")}
                        <Maximize2
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover/link:scale-110"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section CTA */}
          <motion.div
            className="mt-14 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E] hover:text-[#1A1820] active:scale-[0.98]"
            >
              {t("projects.cta")}
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== Full-Screen Image Lightbox ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1A1820] rtl:right-auto rtl:left-6"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Full screen preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== 5. CTA Banner ===== */}
      <section className="bg-[#1A1820] py-20">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            className={`text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${i18n.language === 'ar' ? 'text-4xl md:text-5xl lg:text-7xl font-black leading-tight' : ''}`}
            variants={fadeInUp}
          >
            {t("cta.title")}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98] rtl:normal-case rtl:tracking-normal"
            >
              {t("cta.button")}
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
