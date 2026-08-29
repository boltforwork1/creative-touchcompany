import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import i18n from "@/i18n/config"
import {
  ArrowRight,
  Target,
  Users,
  Headset,
  Eye,
  Rocket,
  Sparkles,
  Award,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  heroContainer,
  viewportOnce,
} from "@/lib/animations"
import { cn } from "@/lib/utils"

const trustPillars = [
  { icon: Target, key: "process" },
  { icon: Users, key: "team" },
  { icon: Headset, key: "support" },
] as const

const coreValues = [
  { icon: Sparkles, key: "creativity" },
  { icon: Award, key: "quality" },
  { icon: ShieldCheck, key: "integrity" },
  { icon: Lightbulb, key: "innovation" },
  { icon: HeartHandshake, key: "commitment" },
] as const

export function About() {
  const { t } = useTranslation()
  const isArabic = i18n.language === "ar"

  return (
    <main className="bg-white">
      {/* ===== 1. Page Hero ===== */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#1A1820]">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-20 text-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className={cn(
              "mb-6 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal",
              isArabic && "text-xl font-bold rtl:tracking-normal"
            )}
            variants={fadeInUp}
          >
            {t("aboutPage.hero.eyebrow")}
          </motion.span>
          <motion.h1
            className={cn(
              "text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
              isArabic && "text-4xl md:text-5xl lg:text-5xl font-black leading-tight"
            )}
            variants={fadeInUp}
          >
            {t("aboutPage.hero.title")}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl font-normal leading-loose text-gray-400 rtl:leading-[1.9]"
            variants={fadeInUp}
          >
            {t("aboutPage.hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* ===== 2. Trust Pillars ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.key}
                  variants={staggerItem}
                  className="group flex flex-col items-center rounded-2xl border border-black/[0.04] bg-[#FDFBF7] p-10 text-center transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className={cn(
                    "text-xl font-bold tracking-tight text-[#1A1820]",
                    isArabic && "text-2xl font-bold"
                  )}>
                    {t(`aboutPage.pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580] rtl:leading-[1.9]">
                    {t(`aboutPage.pillars.${pillar.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== 3. Brand Promise (Split Layout) ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Image placeholder */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="group overflow-hidden rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]">
              <img
                src="/our-promise.jpg"
                alt={t("aboutPage.promise.title")}
                className="aspect-[5/4] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="flex flex-col text-start"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className={cn(
              "mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal",
              isArabic && "text-xl font-bold rtl:tracking-normal"
            )}>
              {t("aboutPage.promise.eyebrow")}
            </span>
            <h2 className={cn(
              "text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl",
              isArabic && "text-4xl md:text-5xl font-black leading-tight"
            )}>
              {t("aboutPage.promise.title")}
            </h2>
            <p className="mt-6 text-lg font-normal leading-loose text-[#6B6580] rtl:leading-[1.9]">
              {t("aboutPage.promise.body")}
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98] rtl:tracking-normal"
              >
                {t("aboutPage.promise.cta")}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. Vision & Mission ===== */}
      <section className="bg-[#FDFBF7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className={cn(
                "mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal",
                isArabic && "text-xl font-bold rtl:tracking-normal"
              )}
              variants={fadeInUp}
            >
              {t("aboutPage.direction.eyebrow")}
            </motion.span>
            <motion.h2
              className={cn(
                "text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl",
                isArabic && "text-4xl md:text-5xl font-black leading-tight"
              )}
              variants={fadeInUp}
            >
              {t("aboutPage.direction.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Vision Card */}
            <motion.div
              variants={staggerItem}
              className="group rounded-2xl border border-black/[0.04] bg-white p-10 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3 className={cn(
                "text-2xl font-bold tracking-tight text-[#1A1820]",
                isArabic && "text-3xl font-bold"
              )}>
                {t("aboutPage.vision.title")}
              </h3>
              <p className="mt-4 text-lg font-normal leading-relaxed text-[#6B6580] rtl:leading-[1.9]">
                {t("aboutPage.vision.body")}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={staggerItem}
              className="group rounded-2xl border border-black/[0.04] bg-white p-10 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                <Rocket size={28} strokeWidth={1.5} />
              </div>
              <h3 className={cn(
                "text-2xl font-bold tracking-tight text-[#1A1820]",
                isArabic && "text-3xl font-bold"
              )}>
                {t("aboutPage.mission.title")}
              </h3>
              <p className="mt-4 text-lg font-normal leading-relaxed text-[#6B6580] rtl:leading-[1.9]">
                {t("aboutPage.mission.body")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. Core Values ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-16 flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className={cn(
                "mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal",
                isArabic && "text-xl font-bold rtl:tracking-normal"
              )}
              variants={fadeInUp}
            >
              {t("aboutPage.values.eyebrow")}
            </motion.span>
            <motion.h2
              className={cn(
                "text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl",
                isArabic && "text-4xl md:text-5xl font-black leading-tight"
              )}
              variants={fadeInUp}
            >
              {t("aboutPage.values.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.key}
                  variants={staggerItem}
                  className="group flex flex-col items-center rounded-2xl border border-black/[0.04] bg-white p-8 text-center transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold tracking-tight text-[#1A1820]",
                    isArabic && "text-xl font-bold"
                  )}>
                    {t(`aboutPage.values.${value.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-[#6B6580] rtl:leading-[1.9]">
                    {t(`aboutPage.values.${value.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== 6. Global CTA Banner ===== */}
      <section className="bg-[#1A1820] py-20">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            className={cn(
              "text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl",
              isArabic && "text-4xl md:text-5xl font-black leading-tight"
            )}
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
