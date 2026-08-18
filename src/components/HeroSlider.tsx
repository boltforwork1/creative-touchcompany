import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  eyebrow: string
  headline: string
  subheadline: string
  cta: string
  href: string
  image: string
}

const slides: Slide[] = [
  {
    eyebrow: "Who We Are",
    headline: "About Creative Touch",
    subheadline:
      "Transforming creativity into results that inspire trust and build lasting impact.",
    cta: "Discover Our Story",
    href: "/about",
    image: "/hero-about.jpg",
  },
  {
    eyebrow: "What We Do",
    headline: "Our Core Services",
    subheadline:
      "Comprehensive design, printing, and digital marketing solutions tailored for your brand.",
    cta: "Explore Services",
    href: "/services",
    image: "/hero-services.jpg",
  },
  {
    eyebrow: "Our Work",
    headline: "A Showcase of Excellence",
    subheadline:
      "Explore our latest projects and see how we bring ambitious visions to life.",
    cta: "View Portfolio",
    href: "/projects",
    image: "/hero-projects.jpg",
  },
  {
    eyebrow: "Start Your Journey",
    headline: "Let\u2019s Build Together",
    subheadline:
      "Have a project in mind? We\u2019d love to hear from you and start crafting your success.",
    cta: "Get in Touch",
    href: "/contact",
    image: "/hero-contact.jpg",
  },
]

const AUTOPLAY_MS = 6000
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const

const textVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: CINEMATIC_EASE },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: { duration: 0.5, ease: CINEMATIC_EASE },
  },
}

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + slides.length) % slides.length)
  }, [])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [nextSlide, index])

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-[#1A1820] sm:min-h-[80vh] lg:h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-7rem)]">
      {/* Slides */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          custom={direction}
          initial={{ opacity: 0, scale: 1.15, borderRadius: "100px" }}
          animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
          exit={{ opacity: 0, scale: 1.05, borderRadius: "0px" }}
          transition={{
            opacity: { duration: 0.8, ease: CINEMATIC_EASE },
            scale: { duration: 1.2, ease: CINEMATIC_EASE },
            borderRadius: { duration: 1.2, ease: CINEMATIC_EASE },
          }}
        >
          {/* Ken Burns image layer */}
          <motion.div
            className="absolute inset-0 bg-[#1A1820]"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <img
              src={slides[index].image}
              alt={slides[index].headline}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center pb-24 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.6 },
                },
                exit: {},
              }}
            >
              <motion.span
                className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96E]"
                variants={textVariants}
              >
                {slides[index].eyebrow}
              </motion.span>
              <motion.h1
                className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                variants={textVariants}
              >
                {slides[index].headline}
              </motion.h1>
              <motion.p
                className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-gray-200"
                variants={textVariants}
              >
                {slides[index].subheadline}
              </motion.p>
              <motion.div className="mt-10" variants={textVariants}>
                <Link
                  to={slides[index].href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C8A96E] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
                >
                  {slides[index].cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute bottom-24 left-4 top-auto z-20 flex h-11 w-11 translate-y-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 hover:border-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1A1820] sm:left-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute bottom-24 right-4 top-auto z-20 flex h-11 w-11 translate-y-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 hover:border-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1A1820] sm:right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Progress bar + dots */}
      <div className="absolute bottom-0 left-0 z-20 w-full">
        {/* Gold progress bar */}
        <div className="h-1 w-full bg-white/10">
          <motion.div
            key={index}
            className="h-full bg-[#C8A96E]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 py-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-[#C8A96E]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
