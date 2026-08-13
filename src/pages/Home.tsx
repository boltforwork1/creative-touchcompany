import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  PenTool,
  Printer,
  ShoppingBag,
  Megaphone,
  Layers,
  Sparkles,
  Monitor,
} from "lucide-react"
import { StatsSection } from "@/components/StatsSection"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  heroContainer,
  viewportOnce,
} from "@/lib/animations"

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Beautiful, responsive websites that engage visitors and drive results.",
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Logos, color systems, and visual languages that define who you are.",
  },
  {
    icon: Printer,
    title: "Comprehensive Printing Services",
    description: "Premium print materials — from business cards to large-format signage.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description: "Powerful online stores built to convert visitors into loyal customers.",
  },
  {
    icon: Layers,
    title: "Full Identity Printing",
    description: "Complete brand collateral that brings your identity to life in print.",
  },
  {
    icon: Megaphone,
    title: "Social Media & Digital Marketing",
    description: "Strategic campaigns that grow your audience and amplify your message.",
  },
] as const

const projects = [
  { title: "Aurora Brand System", category: "Branding" },
  { title: "Lumen E-Commerce", category: "Web Design" },
  { title: "Vertex Print Suite", category: "Print" },
  { title: "Bloom Social Campaign", category: "Marketing" },
  { title: "Atlas Corporate Identity", category: "Branding" },
  { title: "Nova Store Launch", category: "E-Commerce" },
]

export function Home() {
  return (
    <main className="bg-white">
      {/* ===== 1. Hero Section ===== */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-black/[0.04] bg-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Text */}
          <motion.div
            className="flex flex-col justify-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              Digital Marketing
            </motion.span>
            <motion.h1
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1820] sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              Where creativity meets purpose.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#6B6580]"
              variants={fadeInUp}
            >
              From digital design to full brand identity and marketing solutions — Creative
              Touch brings your vision to life with creativity, precision, and purpose.
            </motion.p>
            <motion.div className="mt-10" variants={fadeInUp}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]">
              <div className="flex flex-col items-center gap-4 text-[#C8A96E]/40">
                <Sparkles size={64} strokeWidth={1} />
                <span className="text-xs font-medium uppercase tracking-widest text-[#6B6580]/50">
                  Hero Image
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <div className="flex aspect-[5/4] w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="flex flex-col items-center gap-4 text-[#C8A96E]/40">
                  <Layers size={56} strokeWidth={1} />
                  <span className="text-xs font-medium uppercase tracking-widest text-[#6B6580]/50">
                    About Image
                  </span>
                </div>
              </div>
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
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]">
              About Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl">
              Creative Touch
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-[#6B6580]">
              Creative Touch is a full-service creative agency specializing in digital design,
              branding, printing, and marketing solutions. We help businesses grow, stand out,
              and connect with their audience through innovative ideas and strong visuals. Our
              mission is simple: to transform creativity into results that inspire trust and
              build lasting impact.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E] hover:text-[#1A1820] active:scale-[0.98]"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1"
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
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              Our Services
            </motion.span>
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl"
              variants={fadeInUp}
            >
              At Creative Touch
            </motion.h2>
            <motion.p
              className="mt-6 text-lg font-medium leading-relaxed text-[#6B6580]"
              variants={fadeInUp}
            >
              We offer a comprehensive range of creative services designed to support brands at
              every stage — from initial concept to full-scale execution across digital and print.
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
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  className="group rounded-2xl border border-black/[0.04] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  {/* Icon placeholder */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDFBF7] text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#C8A96E] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                    {service.description}
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
              View All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
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
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              Recent
            </motion.span>
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl"
              variants={fadeInUp}
            >
              Our Projects
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
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]"
              >
                {/* Placeholder icon */}
                <div className="flex h-full w-full items-center justify-center text-[#C8A96E]/30 transition-transform duration-700 ease-out group-hover:scale-105">
                  <PenTool size={48} strokeWidth={1} />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1A1820]/85 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                  <ArrowUpRight
                    size={28}
                    className="text-[#C8A96E]"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A96E]">
                    {project.category}
                  </span>
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
              View All Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

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
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            variants={fadeInUp}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
            >
              Start Now
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
