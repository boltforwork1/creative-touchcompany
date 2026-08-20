import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Maximize2,
  X,
  Monitor,
  Palette,
  Printer,
  ShoppingBag,
  Shirt,
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

const categories: ("All" | Category)[] = [
  "All",
  "Website Design",
  "Brand Identity Design",
  "Corporate Printing",
  "E-Commerce Stores",
  "Apparel & Merch Printing",
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
  { title: "Brand Project 1", category: "Brand Identity Design", icon: Palette, image: "/logos1.jpg", companyName: "Lamsat Alqsor" },
  { title: "Brand Project 2", category: "Brand Identity Design", icon: Palette, image: "/logos2.jpg", companyName: "Brand Company 2" },
  { title: "Brand Project 3", category: "Brand Identity Design", icon: Palette, image: "/logos3.jpg", companyName: "Brand Company 3" },
  { title: "Brand Project 4", category: "Brand Identity Design", icon: Palette, image: "/logos4.jpg", companyName: "Brand Company 4" },
  { title: "Brand Project 5", category: "Brand Identity Design", icon: Palette, image: "/logos5.jpg", companyName: "Brand Company 5" },
  { title: "Store Project 1", category: "E-Commerce Stores", icon: ShoppingBag, image: "/store1.jpg", companyName: "Halali for Feed", liveLink: "https://halalifeed.com" },
  { title: "Store Project 2", category: "E-Commerce Stores", icon: ShoppingBag, image: "/store2.jpg", companyName: "Bradosti General Trading", liveLink: "https://bradosti-trading.com" },
  { title: "Print Project 1", category: "Corporate Printing", icon: Printer, image: "/print1.jpg", companyName: "Lamsat Alqsor" },
  { title: "Print Project 2", category: "Corporate Printing", icon: Printer, image: "/print2.jpg", companyName: "Corporate Client 2" },
  { title: "Print Project 3", category: "Corporate Printing", icon: Printer, image: "/print3.jpg", companyName: "Corporate Client 3" },
  { title: "Print Project 4", category: "Corporate Printing", icon: Printer, image: "/print4.jpg", companyName: "Corporate Client 4" },
  { title: "Print Project 5", category: "Corporate Printing", icon: Printer, image: "/print5.jpg", companyName: "Corporate Client 5" },
  { title: "Print Project 6", category: "Corporate Printing", icon: Printer, image: "/print6.jpg", companyName: "Corporate Client 6" },
  { title: "Website Project 1", category: "Website Design", icon: Monitor, image: "/web1.jpg", companyName: "Lamsat Alqsor", liveLink: "https://lamsat-alqsoor.com" },
  { title: "Website Project 2", category: "Website Design", icon: Monitor, image: "/web2.jpg", companyName: "Al Wthaq Group", liveLink: "https://alwethaqgroup.com" },
  { title: "Website Project 3", category: "Website Design", icon: Monitor, image: "/web3.jpg", companyName: "Al Reyada Al Motaqadima", liveLink: "https://alreyada-almotaqdima.ae" },
  { title: "Website Project 4", category: "Website Design", icon: Monitor, image: "/web4.jpg", companyName: "7 Seas Decor", liveLink: "https://7seas-decor.com" },
  { title: "Website Project 5", category: "Website Design", icon: Monitor, image: "/web5.jpg", companyName: "Solaiman Hasan Technical Services", liveLink: "https://soliman-technical.com" },
  { title: "Website Project 6", category: "Website Design", icon: Monitor, image: "/web6.jpg", companyName: "MKM KARA", liveLink: "https://mkm-kara.com" },
  { title: "Website Project 7", category: "Website Design", icon: Monitor, image: "/web7.jpg", companyName: "MOCC", liveLink: "https://mocc-ksa.com" },
  { title: "Website Project 8", category: "Website Design", icon: Monitor, image: "/web8.jpg", companyName: "Wejhat Al Ebtkar", liveLink: "https://wejhatalebtkar.com" },
  { title: "Website Project 9", category: "Website Design", icon: Monitor, image: "/web9.jpg", companyName: "Mizan Al Nokhbah Accounting", liveLink: "https://mizanuae.com" },
  { title: "Website Project 10", category: "Website Design", icon: Monitor, image: "/web10.jpg", companyName: "Modern National Home", liveLink: "https://hmn-uae.com" },
  { title: "Website Project 11", category: "Website Design", icon: Monitor, image: "/web11.jpg", companyName: "Magic Mid", liveLink: "https://magic-mid.com" },
  { title: "Website Project 12", category: "Website Design", icon: Monitor, image: "/web12.jpg", companyName: "Elite Home", liveLink: "https://elitehome-uae.com" },
  { title: "Apparel Project 1", category: "Apparel & Merch Printing", icon: Shirt, image: "/bag1.jpg", companyName: "EMES Decoration" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filtered.map((project) => {
                const Icon = project.icon

                // Image-based card for Brand Identity Design projects (with lightbox)
                if (project.image && project.companyName && !project.liveLink) {
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                    >
                      {/* Image */}
                      <div className="h-52 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.companyName}
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
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
                          <button
                            type="button"
                            onClick={() => setSelectedImage(project.image!)}
                            className="group/link inline-flex items-center gap-2 rounded-full border border-[#C8A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#C8A96E] transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1A1820]"
                          >
                            View Full Screen
                            <Maximize2
                              size={16}
                              className="transition-transform duration-500 ease-out group-hover/link:scale-110"
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                }

                // Image-based card for Website Design & E-Commerce projects
                if (project.image && project.companyName && project.liveLink) {
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
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
          </div>
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
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1A1820]"
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
