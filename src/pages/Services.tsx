import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Monitor,
  PenTool,
  Printer,
  ShoppingBag,
  Shirt,
  Megaphone,
  Search,
  Lightbulb,
  Palette,
  Rocket,
} from "lucide-react"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  heroContainer,
  viewportOnce,
} from "@/lib/animations"

type Service = {
  icon: typeof Monitor
  title: string
  description: string
  deliverables: string[]
  image: string
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Modern, responsive websites designed for a seamless user experience.",
    deliverables: ["UI/UX Design", "Responsive Development", "SEO Optimization"],
    image: "/service1.jpg",
  },
  {
    icon: PenTool,
    title: "Brand Identity Design",
    description: "Unique visual identities that tell your brand's story with elegance.",
    deliverables: ["Logo Design", "Brand Guidelines", "Typography Systems"],
    image: "/service2.jpg",
  },
  {
    icon: Printer,
    title: "Corporate Printing",
    description: "High-quality printing for all corporate stationery and collateral.",
    deliverables: ["Business Cards", "Letterheads", "Premium Stationery"],
    image: "/service3.jpg",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description: "Fully functional online stores built to increase engagement and drive sales.",
    deliverables: ["Custom Storefronts", "Payment Integration", "Product Management"],
    image: "/service4.jpg",
  },
  {
    icon: Shirt,
    title: "Apparel & Merch Printing",
    description: "Premium T-shirt, uniform, and promotional material printing.",
    deliverables: ["Custom Uniforms", "Branded Merch", "Large-format Print"],
    image: "/service5.jpg",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns and content that boost visibility and drive success.",
    deliverables: ["Social Media Strategy", "Paid Ads", "Content Creation"],
    image: "/service6.jpg",
  },
]

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to understand what matters most.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description: "We craft a clear, actionable plan that aligns creativity with your business objectives.",
  },
  {
    icon: Palette,
    step: "03",
    title: "Design",
    description: "We bring ideas to life with meticulous design and refined visual execution.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Delivery",
    description: "We launch, measure, and refine to ensure your project creates lasting impact.",
  },
] as const

export function Services() {
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
            className="mb-6 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E]"
            variants={fadeInUp}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            Creative Solutions for Ambitious Brands
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl font-normal leading-loose text-gray-400"
            variants={fadeInUp}
          >
            We deliver comprehensive design, printing, and digital marketing solutions crafted
            to create real value and lasting impact.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== 2. Core Services Grid ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              What We Offer
            </motion.span>
            <motion.h2
              className="text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              Services Built for Growth
            </motion.h2>
            <motion.p
              className="mt-6 text-lg font-normal leading-loose text-[#6B6580]"
              variants={fadeInUp}
            >
              Every service is crafted to support your brand at every stage — from first concept
              to full-scale execution across digital and print.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
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
                  className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.04] bg-[#FDFBF7] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  {/* Cover image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Floating icon overlapping image and content */}
                  <div className="relative z-10 -mt-8 px-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#C8A96E] shadow-[0_10px_30px_-12px_rgba(26,24,32,0.25)] ring-1 ring-black/[0.04] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#C8A96E] group-hover:text-white">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-8 pb-8 pt-4">
                    <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                      {service.description}
                    </p>

                    <div className="my-6 h-px w-full bg-black/[0.06]" />

                    <ul className="flex flex-col gap-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm font-medium text-[#1A1820]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96E]" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-2">
                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C8A96E] transition-colors duration-300 hover:text-[#1A1820]"
                      >
                        Request Quote
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== 3. Our Process ===== */}
      <section className="bg-[#F8F7FA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              How We Work
            </motion.span>
            <motion.h2
              className="text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              From Concept to Execution
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  variants={staggerItem}
                  className="group relative flex flex-col items-start rounded-2xl border border-black/[0.04] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  <div className="mb-6 flex w-full items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDFBF7] text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#C8A96E] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-extrabold tracking-tight text-black/[0.06] transition-colors duration-500 group-hover:text-[#C8A96E]/20">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#1A1820]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== 4. Global CTA Banner ===== */}
      <section className="bg-[#1A1820] py-20">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
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
