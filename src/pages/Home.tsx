import { Link } from "react-router-dom"
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
          <div className="flex flex-col justify-center">
            <span className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]">
              Digital Marketing
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1820] sm:text-5xl lg:text-6xl">
              Where creativity meets purpose.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#6B6580]">
              From digital design to full brand identity and marketing solutions — Creative
              Touch brings your vision to life with creativity, precision, and purpose.
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] transition-all duration-200 hover:scale-105 hover:bg-[#C8A96E]/90"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="relative">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]">
              <div className="flex flex-col items-center gap-4 text-[#C8A96E]/40">
                <Sparkles size={64} strokeWidth={1} />
                <span className="text-xs font-medium uppercase tracking-widest text-[#6B6580]/50">
                  Hero Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. About Us Section ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Image placeholder */}
          <div className="relative order-1">
            <div className="flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]">
              <div className="flex flex-col items-center gap-4 text-[#C8A96E]/40">
                <Layers size={56} strokeWidth={1} />
                <span className="text-xs font-medium uppercase tracking-widest text-[#6B6580]/50">
                  About Image
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-2 flex flex-col">
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
                className="group inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-200 hover:bg-[#C8A96E] hover:text-[#1A1820]"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2.5 Stats & Metrics Section ===== */}
      <StatsSection />

      {/* ===== 3. Services Overview Section ===== */}
      <section className="bg-[#F8F7FA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Intro */}
          <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]">
              Our Services
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl">
              At Creative Touch
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-[#6B6580]">
              We offer a comprehensive range of creative services designed to support brands at
              every stage — from initial concept to full-scale execution across digital and print.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-black/[0.04] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(26,24,32,0.12)]"
                >
                  {/* Icon placeholder */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDFBF7] text-[#C8A96E] transition-colors duration-300 group-hover:bg-[#C8A96E] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Section CTA */}
          <div className="mt-14 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] transition-all duration-200 hover:scale-105 hover:bg-[#C8A96E]/90"
            >
              View All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 4. Portfolio / Projects Highlight Section ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]">
              Recent
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl">
              Our Projects
            </h2>
          </div>

          {/* Grid 3x2 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]"
              >
                {/* Placeholder icon */}
                <div className="flex h-full w-full items-center justify-center text-[#C8A96E]/30">
                  <PenTool size={48} strokeWidth={1} />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1A1820]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-14 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-200 hover:bg-[#C8A96E] hover:text-[#1A1820]"
            >
              View All Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 5. CTA Banner ===== */}
      <section className="bg-[#1A1820] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1820] transition-all duration-200 hover:scale-105 hover:bg-white"
          >
            Start Now
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
