import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Monitor,
  Palette,
  Printer,
  ShoppingBag,
  Shirt,
  Megaphone,
} from "lucide-react"
import {
  fadeInUp,
  staggerContainer,
  heroContainer,
  viewportOnce,
} from "@/lib/animations"

type Category =
  | "Website Design"
  | "Brand Identity Design"
  | "Corporate Printing"
  | "E-Commerce Stores"
  | "Apparel & Merch Printing"
  | "Digital Marketing"

const categories: ("All" | Category)[] = [
  "All",
  "Website Design",
  "Brand Identity Design",
  "Corporate Printing",
  "E-Commerce Stores",
  "Apparel & Merch Printing",
  "Digital Marketing",
]

type Project = {
  title: string
  category: Category
  icon: typeof Monitor
  image?: string
  companyName?: string
  liveLink?: string
}

const projects: Project[] = [
  { title: "Aurora Brand System", category: "Brand Identity Design", icon: Palette },
  { title: "Lumen E-Commerce", category: "E-Commerce Stores", icon: ShoppingBag },
  { title: "Vertex Print Suite", category: "Corporate Printing", icon: Printer },
  { title: "Bloom Social Campaign", category: "Digital Marketing", icon: Megaphone },
  { title: "Atlas Corporate Identity", category: "Brand Identity Design", icon: Palette },
  { title: "Nova Store Launch", category: "E-Commerce Stores", icon: ShoppingBag },
  { title: "Website Project 1", category: "Website Design", icon: Monitor, image: "/web1.jpg", companyName: "Lamsat Alqsor", liveLink: "https://lamsat-alqsoor.com" },
  { title: "Website Project 2", category: "Website Design", icon: Monitor, image: "/web2.jpg", companyName: "Al Wthaq Group", liveLink: "https://alwethaqgroup.com" },
  { title: "Website Project 3", category: "Website Design", icon: Monitor, image: "/web3.jpg", companyName: "Company Name 3", liveLink: "https://example.com" },
  { title: "Website Project 4", category: "Website Design", icon: Monitor, image: "/web4.jpg", companyName: "Company Name 4", liveLink: "https://example.com" },
  { title: "Website Project 5", category: "Website Design", icon: Monitor, image: "/web5.jpg", companyName: "Company Name 5", liveLink: "https://example.com" },
  { title: "Pulse Fitness Uniforms", category: "Apparel & Merch Printing", icon: Shirt },
  { title: "Quartz Business Cards", category: "Corporate Printing", icon: Printer },
  { title: "Solstice Tees Collection", category: "Apparel & Merch Printing", icon: Shirt },
  { title: "Echo Digital Ads", category: "Digital Marketing", icon: Megaphone },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
            variants={fadeInUp}
          >
            Our Work
          </motion.span>
          <motion.h1
            className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            A Showcase of Creative Excellence
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-400"
            variants={fadeInUp}
          >
            Explore our latest projects across digital design, branding, and printing.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== 2. Filterable Gallery ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter Tabs */}
          <motion.div
            className="mb-14 flex flex-wrap items-center justify-center gap-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-500 ease-out ${
                    isActive
                      ? "bg-[#C8A96E] text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)]"
                      : "bg-transparent text-[#6B6580] hover:text-[#1A1820]"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const Icon = project.icon

                // New image-based card for Website Design projects
                if (project.image && project.companyName && project.liveLink) {
                  return (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                    >
                      {/* Image */}
                      <div className="overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.companyName}
                          className="h-52 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col p-6">
                        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96E]">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                          {project.companyName}
                        </h3>

                        <div className="mt-5">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1A1820]"
                          >
                            Open in Browser
                            <ExternalLink
                              size={16}
                              className="transition-transform duration-500 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FDFBF7] ring-1 ring-black/[0.04]"
                  >
                    {/* Placeholder */}
                    <div className="flex h-full w-full items-center justify-center text-[#C8A96E]/30 transition-transform duration-700 ease-out group-hover:scale-105">
                      <Icon size={48} strokeWidth={1} />
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
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. Global CTA Banner ===== */}
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
