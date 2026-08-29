import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import i18n from "@/i18n/config"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

type Stat = {
  value: number
  suffix: string
  labelKey: string
}

const stats: Stat[] = [
  { value: 500, suffix: "+", labelKey: "stats.items.projects" },
  { value: 150, suffix: "+", labelKey: "stats.items.clients" },
  { value: 10, suffix: "+", labelKey: "stats.items.years" },
  { value: 99, suffix: "%", labelKey: "stats.items.satisfaction" },
]

const DURATION = 2000

function useCountUp(target: number, active: boolean, duration = DURATION) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active, label }: { stat: Stat; active: boolean; label: string }) {
  const count = useCountUp(stat.value, active)

  return (
    <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
      <span className="text-5xl font-extrabold tracking-tight text-[#C8A96E] sm:text-6xl">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F2F0FF]/80 sm:text-base rtl:tracking-normal rtl:normal-case">
        {label}
      </span>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#1A1820] py-20">
      <motion.div
        className="mx-auto max-w-7xl px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          className="mb-14 flex flex-col items-center text-center"
          variants={fadeInUp}
        >
          <span className="text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E] rtl:tracking-normal rtl:text-2xl rtl:font-bold">
            {t("stats.eyebrow")}
          </span>
          <h2 className={`mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${i18n.language === 'ar' ? 'text-4xl md:text-5xl lg:text-7xl font-black leading-tight' : ''}`}>
            {t("stats.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.labelKey}
              stat={stat}
              active={active}
              label={t(stat.labelKey)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
