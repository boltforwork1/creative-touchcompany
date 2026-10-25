import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  heroContainer,
  viewportOnce,
} from "@/lib/animations"

export function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const contactBlocks = [
    { icon: MapPin, label: t("contact.info.address.label"), value: t("contact.info.address.value"), ltr: false },
    { icon: Phone, label: t("contact.info.phone.label"), value: t("contact.info.phone.value"), ltr: true },
    { icon: Mail, label: t("contact.info.email.label"), value: t("contact.info.email.value"), ltr: true },
    { icon: Clock, label: t("contact.info.hours.label"), value: t("contact.info.hours.value"), ltr: false },
  ] as const

  const serviceOptions = [
    "Website Design",
    "Branding",
    "Printing",
    "Digital Marketing",
  ]

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main className="bg-white">
      {/* ===== 1. Page Hero ===== */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-slate-900">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-20 text-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="mb-6 text-lg font-bold uppercase tracking-[0.25em] text-amber-400 rtl:tracking-normal"
            variants={fadeInUp}
          >
            {t("contact.hero.eyebrow")}
          </motion.span>
          <motion.h1
            className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            {t("contact.hero.title")}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl font-normal leading-loose text-slate-300 rtl:leading-[1.9]"
            variants={fadeInUp}
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* ===== 2. Contact Section (Split Layout) ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column: Contact Details */}
            <motion.div
              className="flex flex-col"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-amber-500 rtl:tracking-normal">
                {t("contact.info.eyebrow")}
              </span>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {t("contact.info.title")}
              </h2>
              <p className="mt-6 text-lg font-normal leading-loose text-slate-600 rtl:leading-[1.9]">
                {t("contact.info.body")}
              </p>

              <motion.div
                className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {contactBlocks.map((block) => {
                  const Icon = block.icon
                  return (
                    <motion.div
                      key={block.label}
                      variants={staggerItem}
                      className="group flex flex-col gap-3 rounded-2xl border border-slate-200/60 bg-amber-50/40 p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-500 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-slate-900">
                        {block.label}
                      </h3>
                      <p className="text-sm font-normal leading-relaxed text-slate-600">
                        {block.ltr ? (
                          <span dir="ltr" className="block text-start">{block.value}</span>
                        ) : (
                          block.value
                        )}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              className="flex flex-col"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-8 shadow-[0_10px_50px_-20px_rgba(15,23,42,0.08)] sm:p-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 rtl:tracking-normal"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder={t("contact.form.namePlaceholder")}
                      className="h-12 w-full rounded-lg border border-slate-200 bg-white ps-4 pe-4 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 rtl:tracking-normal"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="h-12 w-full rounded-lg border border-slate-200 bg-white ps-4 pe-4 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 rtl:tracking-normal"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder={t("contact.form.phonePlaceholder")}
                      dir="ltr"
                      className="h-12 w-full rounded-lg border border-slate-200 bg-white ps-4 pe-4 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none rtl:text-right"
                    />
                  </div>

                  {/* Interested Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 rtl:tracking-normal">
                      {t("contact.form.service")}
                    </label>
                    <Select
                      value={form.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger className="h-12 w-full rounded-lg border border-slate-200 bg-white ps-4 pe-4 text-base text-slate-900 transition-all duration-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 data-[placeholder]:text-slate-400">
                        <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-slate-200 bg-white">
                        {serviceOptions.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="text-base text-slate-900 focus:bg-amber-50 focus:text-amber-600"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 rtl:tracking-normal"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t("contact.form.messagePlaceholder")}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-white ps-4 pe-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_-12px_rgba(236,72,153,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-pink-600 hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.5)] active:scale-[0.98] rtl:normal-case rtl:tracking-normal"
                  >
                    {t("contact.form.submit")}
                    <Send
                      size={18}
                      className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
