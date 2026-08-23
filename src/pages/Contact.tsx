import { useState } from "react"
import { motion } from "framer-motion"
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

const contactBlocks = [
  {
    icon: MapPin,
    title: "Our Location",
    text: "Ajman Free Zone, UAE",
  },
  {
    icon: Phone,
    title: "Phone Number",
    text: "+971 56 587 3939",
  },
  {
    icon: Mail,
    title: "Email Address",
    text: "info@creative-touchfze.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon–Fri 09:00–23:00, Sun 09:00–16:00",
  },
] as const

const serviceOptions = [
  "Website Design",
  "Branding",
  "Printing",
  "Digital Marketing",
]

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

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
            Get In Touch
          </motion.span>
          <motion.h1
            className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            Let&rsquo;s Build Something Extraordinary
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl font-normal leading-loose text-gray-400"
            variants={fadeInUp}
          >
            Have a project in mind or need more information? We&rsquo;d love to hear from you.
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
              <span className="mb-5 text-lg font-bold uppercase tracking-[0.25em] text-[#C8A96E]">
                Contact Details
              </span>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1A1820] md:text-5xl lg:text-6xl">
                We&rsquo;re here to help your brand grow.
              </h2>
              <p className="mt-6 text-lg font-normal leading-loose text-[#6B6580]">
                Reach out to us directly or fill out the form. Our team is ready to bring your
                vision to life with creativity and precision.
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
                      key={block.title}
                      variants={staggerItem}
                      className="group flex flex-col gap-3 rounded-2xl border border-black/[0.04] bg-[#FDFBF7] p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.15)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-[#C8A96E] group-hover:text-white">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-[#1A1820]">
                        {block.title}
                      </h3>
                      <p className="text-sm font-normal leading-relaxed text-[#6B6580]">
                        {block.text}
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
              <div className="rounded-2xl border border-black/[0.04] bg-[#FDFBF7] p-8 shadow-[0_10px_50px_-20px_rgba(26,24,32,0.08)] sm:p-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1820]"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-[#1A1820] placeholder:text-[#6B6580]/50 transition-all duration-300 focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1820]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-[#1A1820] placeholder:text-[#6B6580]/50 transition-all duration-300 focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1820]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+971 56 587 3939"
                      className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-[#1A1820] placeholder:text-[#6B6580]/50 transition-all duration-300 focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] focus:outline-none"
                    />
                  </div>

                  {/* Interested Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1820]">
                      Interested Service
                    </label>
                    <Select
                      value={form.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-[#1A1820] transition-all duration-300 focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] data-[placeholder]:text-[#6B6580]/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-gray-200 bg-white">
                        {serviceOptions.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="text-base text-[#1A1820] focus:bg-[#C8A96E]/10 focus:text-[#C8A96E]"
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
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1820]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-[#1A1820] placeholder:text-[#6B6580]/50 transition-all duration-300 focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] focus:outline-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A96E] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1820] shadow-[0_10px_30px_-12px_rgba(200,169,110,0.5)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#C8A96E]/90 hover:shadow-[0_20px_50px_-12px_rgba(200,169,110,0.5)] active:scale-[0.98]"
                  >
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform duration-500 ease-out group-hover:translate-x-1"
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
