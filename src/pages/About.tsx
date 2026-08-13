import { Link } from "react-router-dom"
import { motion } from "framer-motion"
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
  Image as ImageIcon,
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

const trustPillars = [
  {
    icon: Target,
    title: "Proven Working Process",
    description: "A streamlined, strategic approach to deliver excellence.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert designers and marketers committed to your brand.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Always here to ensure your campaigns run smoothly.",
  },
] as const

const coreValues = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "That inspires.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "That endures.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "That builds trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "That drives progress.",
  },
  {
    icon: HeartHandshake,
    title: "Commitment",
    description: "That ensures success.",
  },
] as const

export function About() {
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
            About Us
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            CREATIVE TOUCH
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-400"
            variants={fadeInUp}
          >
            Transforming creativity into results that inspire trust and build lasting impact.
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
                  key={pillar.title}
                  variants={staggerItem}
                  className="group flex flex-col items-center rounded-2xl border border-black/[0.04] bg-[#FDFBF7] p-10 text-center transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1820]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-[#6B6580]">
                    {pillar.description}
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
              <div className="flex aspect-[5/4] w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="flex flex-col items-center gap-4 text-[#C8A96E]/40">
                  <ImageIcon size={56} strokeWidth={1} />
                  <span className="text-xs font-medium uppercase tracking-widest text-[#6B6580]/50">
                    Brand Promise
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="flex flex-col"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]">
              Our Promise
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1A1820] sm:text-4xl">
              We partner with ambitious brands to build identities that last.
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-[#6B6580]">
              From the first sketch to the final print, we help businesses grow, stand out, and
              connect with their audience. By combining innovative ideas with strong visuals,
              we transform your vision into measurable results that drive your business forward.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1"
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
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              Our Direction
            </motion.span>
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl"
              variants={fadeInUp}
            >
              Vision & Mission
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
              <h3 className="text-2xl font-bold tracking-tight text-[#1A1820]">Our Vision</h3>
              <p className="mt-4 text-lg font-normal leading-relaxed text-[#6B6580]">
                To be a leading creative agency that transforms ideas into inspiring and lasting
                brands recognized for innovation and impact.
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
              <h3 className="text-2xl font-bold tracking-tight text-[#1A1820]">Our Mission</h3>
              <p className="mt-4 text-lg font-normal leading-relaxed text-[#6B6580]">
                To deliver creative, high-quality marketing and design solutions that empower
                businesses to grow, connect, and stand out in a competitive world.
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
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
              variants={fadeInUp}
            >
              Our Values
            </motion.span>
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-[#1A1820] sm:text-4xl lg:text-5xl"
              variants={fadeInUp}
            >
              What Drives Us
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
                  key={value.title}
                  variants={staggerItem}
                  className="group flex flex-col items-center rounded-2xl border border-black/[0.04] bg-white p-8 text-center transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#1A1820]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-[#6B6580]">
                    {value.description}
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
