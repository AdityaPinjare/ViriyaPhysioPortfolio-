import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  Clock3,
  HeartPulse,
  Hospital,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserCheck,
  Waves,
  X,
  Home,
  Calendar,
  PhoneCall,
  Info,
} from "lucide-react";

const motionSettings = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const metrics = [
  { label: "Patients Treated", value: 6800, suffix: "+", icon: UserCheck },
  { label: "Recovery Success Rate", value: 96, suffix: "%", icon: BadgeCheck },
  { label: "Years of Expertise", value: 17, suffix: "+", icon: ShieldCheck },
  { label: "Specialized Therapies", value: 28, suffix: "+", icon: Sparkles },
];

const services = [
  {
    title: "Sports Rehabilitation",
    detail:
      "Performance-focused programs for athletes recovering from injury while rebuilding confidence, strength, and movement quality.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    icon: Activity,
  },
  {
    title: "Spine & Posture Therapy",
    detail:
      "Precision-driven alignment therapy designed to reduce chronic strain, improve posture patterns, and restore spinal balance.",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80",
    icon: Stethoscope,
  },
  {
    title: "Orthopedic Physiotherapy",
    detail:
      "Advanced rehabilitation plans for joints, fractures, ligament injuries, and post-operative orthopedic recovery.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
    icon: Hospital,
  },
  {
    title: "Neurological Rehabilitation",
    detail:
      "Compassionate neuro-physio interventions focused on motor restoration, neuroplasticity, and functional independence.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    icon: Brain,
  },
  {
    title: "Dry Needling",
    detail:
      "Targeted trigger-point techniques to ease muscular tightness, release myofascial pain, and accelerate recovery.",
    image:
      "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=1200&q=80",
    icon: Waves,
  },
  {
    title: "Electrotherapy",
    detail:
      "Technology-assisted rehabilitation using modern electrotherapy protocols for pain relief and tissue healing.",
    image:
      "https://images.unsplash.com/photo-1516549655669-df3230fab16c?auto=format&fit=crop&w=1200&q=80",
    icon: HeartPulse,
  },
  {
    title: "Home Physiotherapy",
    detail:
      "Premium at-home care for patients who need convenience, continuity, and personalized clinical attention.",
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=1200&q=80",
    icon: UserCheck,
  },
  {
    title: "Mobility Recovery Programs",
    detail:
      "Holistic movement restoration programs integrating therapy, guided training, and long-term lifestyle support.",
    image:
      "https://images.unsplash.com/photo-1604480133080-602261a680df?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
  },
];

const journey = [
  "Consultation",
  "Assessment",
  "Personalized Recovery Plan",
  "Therapy Sessions",
  "Progress Tracking",
  "Full Recovery",
];

const bento = [
  { title: "Personalized Treatment", icon: UserCheck },
  { title: "Evidence-Based Therapy", icon: ShieldCheck },
  { title: "Modern Equipment", icon: Activity },
  { title: "Compassionate Care", icon: HeartPulse },
  { title: "Flexible Scheduling", icon: CalendarClock },
  { title: "Long-Term Wellness Focus", icon: Sparkles },
];

const testimonials = [
  {
    name: "Raghav S.",
    role: "Professional Athlete",
    rating: 5,
    quote:
      "After a major shoulder injury, the VIRIYA team helped me return to training stronger than before. Every session felt precise and premium.",
  },
  {
    name: "Meera K.",
    role: "Software Engineer",
    rating: 5,
    quote:
      "I came in with chronic lower back pain and now move pain-free. Their posture program and regular tracking changed my daily life completely.",
  },
  {
    name: "Aman T.",
    role: "Business Executive",
    rating: 5,
    quote:
      "The clinic atmosphere is calming, sophisticated, and professional. I always felt heard, cared for, and guided at each stage of recovery.",
  },
  {
    name: "Priya N.",
    role: "Dance Instructor",
    rating: 5,
    quote:
      "Post-surgery, I didn't think I'd perform again. VIRIYA's neurological rehab protocol got me back on stage within four months.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80",
    label: "Recovery Suite",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=80",
    label: "Electrotherapy Lab",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    label: "Manual Therapy",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
    label: "Rehab Studio",
    span: "col-span-2 row-span-1",
  },
];

const faqs = [
  {
    q: "Do I need a referral before booking?",
    a: "No referral is required. You can directly book an assessment and our specialists will guide your recovery path from day one.",
  },
  {
    q: "How many sessions are usually needed?",
    a: "It depends on your condition, goals, and healing response. Most plans are structured after your first complete assessment.",
  },
  {
    q: "Do you provide home physiotherapy visits?",
    a: "Yes, we offer scheduled home sessions with tailored protocols for post-operative care, elderly mobility, and chronic conditions.",
  },
  {
    q: "Can athletes get performance-focused rehabilitation?",
    a: "Absolutely. We specialize in sports-specific rehab and return-to-performance pathways with movement analytics and progression tracking.",
  },
  {
    q: "Is parking available at the clinic?",
    a: "Yes, we have dedicated patient parking adjacent to the clinic entrance. Valet assistance is available on request.",
  },
];

const footerServices = [
  "Sports Rehabilitation",
  "Spine & Posture Therapy",
  "Orthopedic Physiotherapy",
  "Neurological Rehabilitation",
  "Dry Needling",
  "Home Physiotherapy",
];

function Counter({ value, suffix }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold text-[#0F2942] md:text-4xl"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   SECTION 1: Testimonials + Gallery (combined)
───────────────────────────────────────────── */
function TestimonialsGallerySection() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#B8935A]/8 blur-3xl" />

      {/* Header */}
      <motion.div {...motionSettings} className="mb-14 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#B8935A]">Social Proof</p>
          <h2 className="font-serif text-4xl leading-tight text-[#0A2035] md:text-5xl">
            Stories & Spaces
          </h2>
        </div>
        <p className="max-w-xs text-sm text-[#5A7A96] md:text-right">
          Real results from real patients — and a glimpse inside our world-class facility.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* ── Testimonials panel ── */}
        <motion.div {...motionSettings} className="flex flex-col gap-4">
          {/* Active quote card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#0A1E33] to-[#163355] p-7 shadow-2xl md:p-9">
            {/* Decorative quote mark */}
            <div className="absolute right-7 top-6 opacity-10">
              <Quote size={80} className="text-[#B8935A]" fill="currentColor" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-[#B8935A]" fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-[#D4E8FF] md:text-xl">
                  "{testimonials[active].quote}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8935A]/20 text-sm font-semibold text-[#B8935A]">
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#E8F4FF]">{testimonials[active].name}</p>
                    <p className="text-xs text-[#7A9DB8]">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/15"
                >
                  {i === active && (
                    <motion.div
                      layoutId="testimonial-bar"
                      className="absolute inset-0 rounded-full bg-[#B8935A]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial selector list */}
          <div className="grid grid-cols-2 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`rounded-2xl border px-4 py-3 text-left text-xs transition-all duration-300 ${active === i
                  ? "border-[#B8935A]/60 bg-[#0F2942] text-[#E8F4FF] shadow-lg"
                  : "border-[#B8D4F0]/40 bg-white/60 text-[#2D4A62] hover:bg-white hover:shadow-md"
                  }`}
              >
                <p className="font-semibold">{t.name}</p>
                <p className={`mt-0.5 ${active === i ? "text-[#7A9DB8]" : "text-[#8AABC4]"}`}>{t.role}</p>
              </button>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: BadgeCheck, label: "NABH Protocols" },
              { icon: ShieldCheck, label: "Certified Specialists" },
              { icon: Star, label: "4.9 / 5 Rating" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#B8D4F0]/50 bg-white/70 px-4 py-2 text-xs font-medium text-[#2D4A62] shadow backdrop-blur"
              >
                <Icon size={13} className="text-[#B8935A]" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Gallery mosaic ── */}
        <motion.div {...motionSettings} className="grid grid-cols-3 grid-rows-3 gap-3 [min-height:420px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              className={`${img.span} group relative cursor-pointer overflow-hidden rounded-2xl`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E33]/70 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-3 left-3 rounded-lg bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {img.label}
              </div>
              {/* Hover shine */}
              <div className="absolute inset-0 bg-[#B8935A]/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] max-w-3xl overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.label} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1E33] px-6 py-5">
                <p className="text-lg font-medium text-white">{lightbox.label}</p>
                <p className="text-sm text-[#7A9DB8]">VIRIYA PHYSIOCARE Facility</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white backdrop-blur"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2: Appointment + Contact (combined)
───────────────────────────────────────────── */
function AppointmentContactSection() {
  const [tab, setTab] = useState("book");

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3rem]">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#1A3F63]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#B8935A]/8 blur-3xl" />
      </div>

      {/* Outer wrapper with dark navy bg */}
      <motion.div
        {...motionSettings}
        className="overflow-hidden rounded-[2.5rem] border border-white/25 bg-gradient-to-br from-[#071524] via-[#0D2238] to-[#0A1E33] shadow-[0_40px_100px_rgba(7,21,36,0.45)]"
      >
        {/* Top bar with tab switcher */}
        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 md:px-10">
          <p className="font-serif text-xl text-[#E0F0FF]">VIRIYA PHYSIOCARE</p>
          <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 text-xs">
            {["book", "contact"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 font-medium capitalize transition-all duration-300 ${tab === t
                  ? "bg-[#B8935A] text-[#0A1E33] shadow"
                  : "text-[#7A9DB8] hover:text-white"
                  }`}
              >
                {t === "book" ? "Book Appointment" : "Contact Us"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Left info panel */}
          <div className="flex flex-col justify-between border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
            <div className="space-y-6">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#B8935A]">
                  {tab === "book" ? "Premium Recovery" : "Reach Us"}
                </p>
                <h2 className="font-serif text-3xl leading-tight text-[#E8F4FF] md:text-4xl">
                  {tab === "book"
                    ? "Begin your recovery journey today."
                    : "We're here to help you heal."}
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-[#7A9DB8]">
                {tab === "book"
                  ? "Reserve a consultation with our rehabilitation specialists. Receive a fully personalized care roadmap after your first session."
                  : "Have a question before booking? Our team responds within 2 hours during clinic hours. Walk-ins are also welcome."}
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                {[
                  {
                    icon: MapPin,
                    text:
                      "Viriya physiocare & rehabilitation centre, NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033",
                  },
                  { icon: Clock3, text: "Mon – Sat: 8:00 AM – 8:00 PM" },
                  { icon: Phone, text: "+91 91721 19904" },
                  { icon: Mail, text: "care@viriyaphysiocare.com" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[#B8D0E8]">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#B8935A]/15">
                      <Icon size={14} className="text-[#B8935A]" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              {/* Quick action buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-3.5 text-sm font-medium text-white shadow-lg transition hover:brightness-110"
                >
                  <MessageCircle size={15} />
                  WhatsApp Quick Booking
                </a>
                <a
                  href="tel:+919172119904"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-5 py-3.5 text-sm font-medium text-[#B8D0E8] transition hover:bg-white/12"
                >
                  <Phone size={15} />
                  Call For Emergency
                </a>
              </div>
            </div>

            {/* Mini map placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-32 bg-[#0D2238]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(42,90,140,0.35),transparent_60%)]" />
                {/* Fake map grid lines */}
                <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  {[0, 1, 2, 3].map((i) => (
                    <line key={`h${i}`} x1="0" y1={`${25 * (i + 1)}%`} x2="100%" y2={`${25 * (i + 1)}%`} stroke="#B8D4F0" strokeWidth="0.5" />
                  ))}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line key={`v${i}`} x1={`${16.67 * (i + 1)}%`} y1="0" x2={`${16.67 * (i + 1)}%`} y2="100%" stroke="#B8D4F0" strokeWidth="0.5" />
                  ))}
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8935A] shadow-lg shadow-[#B8935A]/40">
                    <MapPin size={14} className="text-white" fill="white" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#B8935A]/40 blur-sm" />
                </div>
                <div className="absolute bottom-3 left-3 rounded-lg bg-black/40 px-3 py-1.5 text-xs text-[#B8D0E8] backdrop-blur">
                  Viriya physiocare & rehabilitation centre, NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-10"
            >
              {tab === "book" ? (
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#B8935A]">Appointment Request</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Full Name", type: "text", placeholder: "Aditya Sharma" },
                      { label: "Phone Number", type: "tel", placeholder: "+91 91721 19904" },
                      { label: "Email Address", type: "email", placeholder: "aditya@email.com" },
                      { label: "Treatment Type", type: "text", placeholder: "Sports Rehab, Spine Therapy…" },
                    ].map((f) => (
                      <label key={f.label} className="block">
                        <span className="mb-1.5 block text-xs text-[#7A9DB8]">{f.label}</span>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[#7A9DB8]">Preferred Date</span>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10 [color-scheme:dark]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[#7A9DB8]">Additional Notes</span>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your condition or query…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                    />
                  </label>
                  <button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B8935A] px-6 py-4 text-sm font-semibold text-[#0A1E33] shadow-lg shadow-[#B8935A]/20 transition hover:brightness-110">
                    Confirm Appointment Request
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-[#3A6080]">
                    We'll confirm your slot within 2 hours via WhatsApp or call.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#B8935A]">Send A Message</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Your Name", type: "text", placeholder: "Priya Nair" },
                      { label: "Email or Phone", type: "text", placeholder: "priya@email.com" },
                    ].map((f) => (
                      <label key={f.label} className="block">
                        <span className="mb-1.5 block text-xs text-[#7A9DB8]">{f.label}</span>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[#7A9DB8]">Subject</span>
                    <input
                      type="text"
                      placeholder="Home visit inquiry, treatment question…"
                      className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[#7A9DB8]">Message</span>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                    />
                  </label>
                  <button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B8935A] px-6 py-4 text-sm font-semibold text-[#0A1E33] shadow-lg shadow-[#B8935A]/20 transition hover:brightness-110">
                    Send Message
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 3: Compact FAQ
───────────────────────────────────────────── */
function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
        {/* Left label */}
        <motion.div {...motionSettings} className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8935A]">FAQ</p>
          <h2 className="font-serif text-4xl leading-snug text-[#0A2035] md:text-5xl">
            Common Questions
          </h2>
          <p className="text-sm leading-relaxed text-[#5A7A96]">
            Everything you need to know before you begin your recovery journey with us.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1A3F63] underline-offset-4 hover:underline"
          >
            Still have questions? Contact us <ChevronRight size={14} />
          </a>
        </motion.div>

        {/* Accordion */}
        <motion.div {...motionSettings} className="space-y-2">
          {faqs.map((item, idx) => (
            <div
              key={item.q}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${open === idx
                ? "border-[#B8935A]/40 bg-[#0F2942] shadow-xl"
                : "border-[#B8D4F0]/40 bg-white/60 hover:bg-white/80"
                }`}
            >
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className={`text-sm font-medium ${open === idx ? "text-[#E8F4FF]" : "text-[#0F2942]"}`}>
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 rounded-full p-1 ${open === idx ? "bg-[#B8935A]/20 text-[#B8935A]" : "bg-[#B8D4F0]/40 text-[#5A7A96]"
                    }`}
                >
                  <ChevronDown size={15} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#7A9DB8]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 4: Premium Footer
───────────────────────────────────────────── */
function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#060F1A] text-[#7A9DB8]">
      {/* Top gold rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8935A]/50 to-transparent" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#1A3F63]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#B8935A]/8 blur-3xl" />

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <div>
              <div className="font-serif text-2xl tracking-wide text-[#E0F0FF]">VIRIYA</div>
              <div className="text-xs tracking-[0.35em] text-[#B8935A]">PHYSIOCARE</div>
            </div>
            <p className="text-sm leading-relaxed text-[#5A7A96]">
              Premium rehabilitation and physiotherapy care built on clinical precision, empathy, and long-term wellness for every patient.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#5A7A96] transition hover:border-[#B8935A]/40 hover:bg-[#B8935A]/10 hover:text-[#B8935A]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            {/* Cert badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#B8935A]/20 bg-[#B8935A]/8 px-3 py-2 text-xs text-[#B8935A]">
              <BadgeCheck size={13} />
              NABH-Standard Protocols
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0F0FF]">Treatments</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-[#5A7A96] transition hover:text-[#B8D0E8]"
                  >
                    <span className="h-px w-3 bg-[#B8935A]/40 transition group-hover:w-5 group-hover:bg-[#B8935A]" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0F0FF]">Quick Links</h4>
            <ul className="space-y-2.5">
              {["About the Clinic", "Patient Stories", "Recovery Journey", "Clinic Gallery", "Book Appointment", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-[#5A7A96] transition hover:text-[#B8D0E8]"
                  >
                    <span className="h-px w-3 bg-[#B8935A]/40 transition group-hover:w-5 group-hover:bg-[#B8935A]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0F0FF]">Get In Touch</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text:
                    "Viriya physiocare & rehabilitation centre, NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033",
                },
                { icon: Clock3, text: "Mon – Sat\n8:00 AM – 8:00 PM" },
                { icon: Phone, text: "+91 91721 19904" },
                { icon: Mail, text: "care@viriyaphysiocare.com" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-sm text-[#5A7A96]">
                  <div className="mt-0.5 flex-shrink-0">
                    <Icon size={14} className="text-[#B8935A]" />
                  </div>
                  <span style={{ whiteSpace: "pre-line" }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1A3F63] px-4 py-3 text-xs font-medium text-[#B8D0E8] transition hover:bg-[#243F5E]"
            >
              <MessageCircle size={13} className="text-[#B8935A]" />
              WhatsApp Us Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#3A5A76] md:flex-row">
          <p>© {new Date().getFullYear()} VIRIYA PHYSIOCARE & REHABILITATION CENTRE. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#7A9DB8]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
            <span>Clinic Open Today</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────── */
export default function App() {
  const chips = useMemo(
    () => ["Pain Relief", "Mobility Reset", "Posture Excellence", "Recovery Science"],
    [],
  );
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#F4F7FC] text-[#0A2035] pb-20 md:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(42,90,140,0.10),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(255,255,255,0.90),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(184,147,90,0.12),transparent_35%)]" />

      {/* ── Header ── */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10">
        <div className="font-serif text-lg tracking-wide text-[#0F2942] md:text-xl">
          VIRIYA PHYSIOCARE
        </div>
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="rounded-full border border-[#B8935A] bg-white/60 px-5 py-2 text-sm font-medium shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:bg-white">
          Book Now
        </button>
      </header>

      {/* ── Hero ── */}
      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-6 pb-20 pt-4 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B8935A]/30 bg-white/60 px-4 py-2 text-xs font-medium shadow-md backdrop-blur">
            <Sparkles size={14} />
            Elite Physiotherapy and Recovery Studio
          </div>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-[#0A2035] md:text-6xl">
            Recover Stronger.
            <br />
            Move Freely.
            <br />
            Live Pain-Free.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#2D4A62] md:text-lg">
            Premium rehabilitation and physiotherapy care focused on mobility,
            recovery, posture correction, pain management, and long-term wellness.
          </p>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full bg-[#D6E8FA]/80 px-3 py-1 text-xs text-[#1A3F63] shadow-sm">
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[#1A3F63] px-6 py-3 text-sm font-medium text-white shadow-xl transition hover:-translate-y-0.5">
              Book Consultation
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-[#2A5A8C] bg-white/70 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-white">
              Explore Treatments
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-1 text-sm text-[#5A7A96]">
            <span className="inline-flex items-center gap-2"><BadgeCheck size={16} /> NABH-Standard Protocols</span>
            <span className="inline-flex items-center gap-2"><Star size={16} /> Trusted by 6800+ Families</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -left-2 top-4 z-10 rounded-2xl border border-white/30 bg-white/50 p-2.5 shadow-xl backdrop-blur-xl md:-left-8 md:top-8 md:rounded-3xl md:p-4"
          >
            <div className="text-[10px] text-[#6E4F42] md:text-xs">Average Pain Reduction</div>
            <div className="text-lg font-semibold text-[#0F2942] md:text-xl">89%</div>
          </motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80"
            alt="Premium physiotherapy session"
            className="h-[360px] w-full rounded-[2rem] object-cover shadow-[0_30px_70px_rgba(15,41,66,0.28)] sm:h-[460px] md:h-[560px] md:rounded-[2.5rem]"
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5 }}
            className="absolute -bottom-4 right-0 z-10 max-w-[180px] rounded-2xl border border-white/20 bg-[#0F2942]/85 p-3 text-[#E8F4FF] shadow-2xl backdrop-blur-xl md:-bottom-8 md:max-w-[240px] md:rounded-3xl md:p-5"
          >
            <div className="text-[10px] uppercase tracking-widest text-[#B8D4F0] md:text-xs">Clinical Precision</div>
            <p className="mt-1 text-xs leading-relaxed md:text-sm">Personalized plans crafted by experienced rehab specialists.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Metrics ── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10">
        <motion.div {...motionSettings} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/40 bg-white/55 p-6 shadow-xl backdrop-blur-md">
              <item.icon className="mb-4 text-[#B8935A]" />
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-1 text-sm text-[#5A7A96]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section className="relative mx-auto w-full max-w-7xl space-y-16 px-6 py-14 md:px-10">
        {services.map((service, idx) => (
          <motion.article
            key={service.title}
            {...motionSettings}
            className={`grid items-center gap-7 rounded-[2rem] border border-white/35 bg-white/45 p-5 shadow-2xl backdrop-blur-xl md:p-8 ${idx % 2 === 0 ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
              }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className={`h-72 w-full rounded-3xl object-cover ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            />
            <div className={`${idx % 2 === 0 ? "md:order-1" : "md:order-2"} space-y-4`}>
              <service.icon className="text-[#B8935A]" />
              <h3 className="font-serif text-3xl text-[#0A2035]">{service.title}</h3>
              <p className="text-[#2D4A62]">{service.detail}</p>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-[#B8935A]">
                Learn more <ArrowRight size={14} />
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* ── About ── */}
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1fr] md:px-10">
        <motion.div {...motionSettings} className="relative">
          <img
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=1200&q=80"
            alt="Clinic doctor profile"
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-[0_25px_60px_rgba(15,41,66,0.26)]"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/70 px-5 py-4 text-sm shadow-xl backdrop-blur-md">
            17+ Years of Specialist Practice
          </div>
        </motion.div>
        <motion.div {...motionSettings} className="space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-[#5A7A96]">About The Clinic</p>
          <h2 className="font-serif text-4xl text-[#0A2035] md:text-5xl">
            Restoring movement with science, empathy, and precision.
          </h2>
          <p className="text-[#2D4A62]">
            At VIRIYA PHYSIOCARE & REHABILITATION CENTRE, our mission is to blend
            evidence-based clinical expertise with human-centered care. Every
            therapy protocol is designed around your lifestyle, condition, and
            recovery goals.
          </p>
          <p className="text-[#2D4A62]">
            Our philosophy is simple: personalized treatment, measurable progress,
            and long-term wellness. From orthopedic and neuro rehabilitation to
            posture and pain management, we build care journeys that feel premium,
            reassuring, and deeply effective.
          </p>
          <div className="rounded-3xl border border-white/40 bg-white/55 p-5 text-sm text-[#2D4A62] shadow-xl backdrop-blur-md">
            Qualifications: MPT (Ortho), Sports Rehab Certification, Advanced Dry
            Needling, Electrotherapy and Manual Therapy Specialist.
          </div>
        </motion.div>
      </section>

      {/* ── Journey ── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10">
        <motion.h2 {...motionSettings} className="mb-8 text-center font-serif text-4xl text-[#0A2035]">
          Your Recovery Journey
        </motion.h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max items-center gap-4">
            {journey.map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <motion.div
                  {...motionSettings}
                  className="rounded-2xl border border-white/30 bg-white/60 px-5 py-4 shadow-lg backdrop-blur"
                >
                  <div className="text-xs text-[#B8935A]">Step {idx + 1}</div>
                  <div className="text-sm font-medium text-[#0F2942]">{step}</div>
                </motion.div>
                {idx < journey.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-0.5 w-12 origin-left bg-gradient-to-r from-[#B8935A] to-transparent"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trust ── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10">
        <motion.h2 {...motionSettings} className="mb-8 font-serif text-4xl text-[#0A2035]">
          Why Patients Trust Us
        </motion.h2>
        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {bento.map((item, idx) => (
            <motion.div
              key={item.title}
              {...motionSettings}
              className={`rounded-3xl border border-[#B8D4F0]/40 bg-[linear-gradient(145deg,rgba(255,255,255,0.80),rgba(210,230,255,0.40))] p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 ${idx === 0 || idx === 5 ? "md:col-span-2" : ""
                }`}
            >
              <item.icon className="text-[#B8935A]" />
              <p className="mt-4 text-xl font-medium text-[#0F2942]">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── NEW: Testimonials + Gallery (combined) ── */}
      <TestimonialsGallerySection />

      {/* ── NEW: Appointment + Contact (combined) ── */}
      <AppointmentContactSection />

      {/* ── NEW: Compact FAQ ── */}
      <FAQSection />

      {/* ── NEW: Premium Footer ── */}
      <PremiumFooter />

      {/* ── Mobile Bottom Navigation ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-white/40 bg-white/80 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl md:hidden">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-[#1A3F63]">
          <Home size={20} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-[#5A7A96] transition hover:text-[#1A3F63]">
          <PhoneCall size={20} />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
        <button onClick={() => setIsBookingModalOpen(true)} className="relative -top-4 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-full bg-[#B8935A] text-[#0A1E33] shadow-[0_10px_20px_rgba(184,147,90,0.3)] transition hover:scale-105">
          <Calendar size={22} />
        </button>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-[#5A7A96] transition hover:text-[#1A3F63]">
          <Info size={20} />
          <span className="text-[10px] font-medium">About</span>
        </button>
      </div>

      {/* ── Booking Modal ── */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071524]/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#071524] to-[#0A1E33] p-6 shadow-2xl md:p-8"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#B8935A]">Quick Booking</p>
                <h3 className="font-serif text-2xl text-[#E8F4FF]">Request an Appointment</h3>
              </div>
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-[#7A9DB8]">Full Name</span>
                  <input
                    type="text"
                    placeholder="Aditya Sharma"
                    className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-[#7A9DB8]">Phone Number</span>
                  <input
                    type="tel"
                    placeholder="+91 91721 19904"
                    className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] placeholder-[#3A6080] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-[#7A9DB8]">Preferred Date</span>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#D4E8FF] outline-none transition focus:border-[#B8935A]/60 focus:bg-white/10 [color-scheme:dark]"
                  />
                </label>
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8935A] px-6 py-4 text-sm font-semibold text-[#0A1E33] shadow-lg shadow-[#B8935A]/20 transition hover:brightness-110"
                >
                  Confirm Appointment
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-[#3A6080]">
                  We'll confirm your slot within 2 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
