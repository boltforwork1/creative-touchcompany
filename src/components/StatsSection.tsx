import { useEffect, useRef, useState } from "react"

type Stat = {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
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

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, active)

  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-5xl font-extrabold tracking-tight text-[#C8A96E] sm:text-6xl">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F2F0FF]/80 sm:text-base">
        {stat.label}
      </span>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

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
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
