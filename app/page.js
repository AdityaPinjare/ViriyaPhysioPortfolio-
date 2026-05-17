"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity, ArrowRight, BadgeCheck, Brain, CalendarClock, ChevronDown,
  Clock3, HeartPulse, Hospital, Instagram, Mail, MapPin, MessageCircle,
  Phone, ShieldCheck, Sparkles, Star, Stethoscope, UserCheck, Waves,
  Home as HomeIcon, Calendar, PhoneCall, Info, X
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const ADDRESS =
  "Viriya physiocare & rehabilitation centre, NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033";

const metrics = [
  { label: "Patients Treated", value: "6800+", icon: UserCheck },
  { label: "Recovery Rate", value: "96%", icon: BadgeCheck },
  { label: "Years Expertise", value: "17+", icon: ShieldCheck },
  { label: "Therapies", value: "28+", icon: Sparkles },
];

const services = [
  { title: "Sports Rehabilitation", desc: "Performance-focused recovery for athletes.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80", icon: Activity },
  { title: "Spine & Posture", desc: "Precision alignment to reduce chronic strain.", img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80", icon: Stethoscope },
  { title: "Orthopedic Physio", desc: "Advanced joint & post-op rehab plans.", img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80", icon: Hospital },
  { title: "Neuro Rehab", desc: "Motor restoration & neuroplasticity care.", img: "/assets/Neuro-rehabilitation-services.webp", icon: Brain },
  { title: "Dry Needling", desc: "Targeted trigger-point pain release.", img: "/assets/needletherapy.jpg", icon: Waves },
  { title: "Cupping Therapy", desc: "Myofascial decompression for tightness and recovery.", img: "/assets/cuppingtherapy.jpg", icon: HeartPulse },
  { title: "Home Physio", desc: "Premium at-home clinical sessions.", img: "/assets/homephysio.jpg", icon: UserCheck },
  { title: "Mobility Recovery", desc: "Holistic movement restoration programs.", img: "https://images.unsplash.com/photo-1604480133080-602261a680df?auto=format&fit=crop&w=800&q=80", icon: Sparkles },
];

const bento = [
  { title: "Personalized Treatment", desc: "Plans built around your pain pattern, lifestyle, and progress.", icon: UserCheck, stat: "1:1", wide: true },
  { title: "Evidence-Based Therapy", desc: "Clinical reasoning, measurable goals, and guided progression.", icon: ShieldCheck, stat: "96%" },
  { title: "Modern Equipment", desc: "Therapy tools for strength, mobility, pain relief, and recovery.", icon: Activity, stat: "28+" },
  { title: "Compassionate Care", desc: "Clear communication and hands-on support at every visit.", icon: HeartPulse, stat: "4.9" },
  { title: "Flexible Scheduling", desc: "Clinic appointments and home physiotherapy options.", icon: CalendarClock, stat: "6 days", wide: true },
];

const testimonials = [
  { name: "Raghav S.", role: "Sports injury rehab", time: "2 weeks ago", quote: "Shoulder pain was affecting my training. The assessment was detailed, sessions were structured, and I could see steady improvement every week." },
  { name: "Meera K.", role: "Back pain treatment", time: "1 month ago", quote: "Very clean clinic and patient-friendly staff. My lower back pain reduced a lot after posture correction and guided exercises." },
  { name: "Aman T.", role: "Post-op recovery", time: "3 weeks ago", quote: "The doctor explained each step clearly and gave a practical home routine. Recovery felt organized, calm, and professional." },
  { name: "Priya N.", role: "Mobility therapy", time: "5 days ago", quote: "Great experience. The therapy was gentle but effective, and the team tracked my progress instead of just repeating the same exercises." },
];

const gallery = [
  { label: "Recovery Suite", img: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80", large: true },
  { label: "Manual Therapy", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80" },
  { label: "Rehab Studio", img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80" },
  { label: "Electrotherapy", img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=80" },
];

const faqs = [
  { q: "Do I need a referral?", a: "No referral required. Book directly and our specialists will guide your recovery." },
  { q: "How many sessions needed?", a: "Depends on your condition. Most plans are structured after your first assessment." },
  { q: "Do you offer home visits?", a: "Yes — scheduled home sessions for post-op care, elderly mobility, and chronic conditions." },
  { q: "Sports-specific rehab?", a: "Absolutely. We specialize in return-to-performance pathways with movement analytics." },
  { q: "Can I book the same day?", a: "Same-day slots are available on many weekdays. WhatsApp is the fastest way to check." },
];

export default function Home() {
  const mainRef = useRef(null);
  const [activeTesti, setActiveTesti] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-left > *", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      });
      gsap.from(".hero-visual", {
        x: 60, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3,
      });
      // Floating cards
      gsap.to(".hero-float-card.top", {
        y: -10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".hero-float-card.bottom", {
        y: 8, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      // All reveal sections
      gsap.utils.toArray(".gs-reveal").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const WHATSAPP = "https://wa.me/919172119904?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation";
  const PHONE = "tel:+919172119904";
  const INSTA = "https://www.instagram.com/viriyaphysiocare__/";

  return (
    <div ref={mainRef}>
      {/* ── Header ── */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <div className="logo-text">VIRIYA PHYSIOCARE</div>
          <nav className="header-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <a href="#booking">Contact</a>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-book"
              style={{ color: "#DDA182" }}
            >
              Book Now
            </button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-badge"><Sparkles size={14} /> Elite Physiotherapy & Recovery</div>
          <h1 className="font-serif">Recover Stronger.<br />Move Freely.<br />Live Pain-Free.</h1>
          <p className="hero-sub">Premium rehabilitation and physiotherapy — mobility, posture correction, pain management, and long-term wellness.</p>
          <div className="hero-chips">
            {["Pain Relief", "Mobility Reset", "Posture Excellence", "Recovery Science"].map((c) => (
              <span key={c} className="hero-chip">{c}</span>
            ))}
          </div>
          <div className="hero-ctas">
            <button onClick={() => setIsBookingModalOpen(true)} className="cta-whatsapp" style={{ background: '#DDA182', boxShadow: '0 6px 20px rgba(184, 147, 90, 0.3)' }}>
              Book Consultation
            </button>
            <a href={PHONE} className="cta-primary">
              <Phone size={16} /> Call Now
            </a>
          </div>
          <div className="hero-trust">
            <span><BadgeCheck size={15} /> NABH-Standard Protocols</span>
            <span><Star size={15} /> Trusted by 6800+ Families</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/assets/Logo2.jpg"
            alt="Physiotherapy session"
            className="hero-img"
          />
          <div className="hero-float-card top" style={{ backgroundColor: "#DDA182" }}>
            <div className="label" style={{ color: "#8B4A33" }}>Pain Reduction</div>
            <div className="value" style={{ color: "#8B4A33" }}>89%</div>
          </div>
          <div className="hero-float-card bottom" style={{ backgroundColor: "#8B4A33" }}>
            <div className="label" style={{ color: "#DDA182" }}>Clinical Precision</div>
            <div className="value" style={{ color: "#DDA182" }}>Personalized plans by experienced rehab specialists.</div>
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="metrics gs-reveal">
        {metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <m.icon size={22} />
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </section>

      {/* ── Services ── */}
      <section className="services-section" id="services">
        <div className="gs-reveal">
          <div className="section-label">Our Treatments</div>
          <h2 className="section-title font-serif">Specialized Recovery Programs</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card gs-reveal">
              <img src={typeof s.img === "string" ? s.img : s.img.src} alt={s.title} />
              <div className="service-card-body">
                <s.icon size={20} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section" id="about">
        <div className="gs-reveal">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80"
            alt="Clinic specialist"
            className="about-img"
          />
        </div>
        <div className="about-text gs-reveal">
          <div className="section-label">About The Clinic</div>
          <h2 className="font-serif">Restoring movement with science, empathy, and precision.</h2>
          <p>At VIRIYA PHYSIOCARE & REHABILITATION CENTRE, we blend evidence-based expertise with human-centered care. Every therapy protocol is designed around your lifestyle, condition, and recovery goals.</p>
          <p>From orthopedic and neuro rehabilitation to posture and pain management, we build care journeys that feel premium, reassuring, and deeply effective.</p>
          <div className="about-qual">
            <strong>Qualifications:</strong> MPT (Ortho), Sports Rehab Certification, Advanced Dry Needling, Electrotherapy & Manual Therapy Specialist.
          </div>
        </div>
      </section>

      {/* ── Why Trust ── */}
      <section className="bento-section">
        <div className="modern-section-header gs-reveal">
          <div className="section-label">Why Patients Trust Us</div>
          <h2 className="section-title font-serif">Recovery care that feels precise, calm, and personal.</h2>
          <p className="section-desc">Every treatment plan combines clinical expertise with practical guidance, so patients know what is happening and why it matters.</p>
        </div>
        <div className="bento-grid">
          {bento.map((b) => (
            <div key={b.title} className={`bento-card gs-reveal ${b.wide ? "wide" : ""}`}>
              <div className="bento-icon"><b.icon size={21} /></div>
              <div className="bento-stat">{b.stat}</div>
              <div>
                <p>{b.title}</p>
                <span>{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials + Gallery ── */}
      <section className="proof-gallery-section" id="testimonials">
        <div className="modern-section-header gs-reveal">
          <div className="section-label">Google Reviews + Clinic Gallery</div>
          <h2 className="section-title font-serif">Real patient feedback from recovery journeys.</h2>
          <p className="section-desc">Recent Google-style reviews from patients who visited for pain relief, mobility care, post-op rehab, and sports recovery.</p>
        </div>

        <div className="proof-gallery-grid gs-reveal">
          <div className="reviews-panel">
            <div className="reviews-summary">
              <div className="google-mark" aria-hidden="true">G</div>
              <div>
                <p>Google reviews</p>
                <div className="rating-line">
                  <strong>4.9</strong>
                  <span>
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                  </span>
                </div>
                <small>Based on 180+ patient ratings</small>
              </div>
            </div>

            <div className="reviews-list">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTesti(i)}
                  className={`review-card ${activeTesti === i ? "active" : ""}`}
                >
                  <span className="review-avatar">{t.name.charAt(0)}</span>
                  <span className="review-body">
                    <span className="review-topline">
                      <strong>{t.name}</strong>
                      <small>{t.time}</small>
                    </span>
                    <span className="review-stars">
                      {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={12} fill="currentColor" />)}
                    </span>
                    <span className="review-quote">&ldquo;{t.quote}&rdquo;</span>
                    <span className="review-service">{t.role}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-mosaic">
            {gallery.map((item) => (
              <figure key={item.label} className={item.large ? "gallery-item large" : "gallery-item"}>
                <img src={item.img} alt={item.label} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Appointment + Contact ── */}
      <section className="appointment-section" id="booking">
        <div className="appointment-shell gs-reveal">
          <div className="appointment-copy">
            <div className="section-label">Appointment + Contact</div>
            <h2 className="font-serif">Begin with the right assessment.</h2>
            <p>Share your concern and we will help you choose the right physiotherapy plan, clinic slot, or home visit pathway.</p>
            <div className="booking-actions">
              <a href={WHATSAPP} className="wa-btn" target="_blank" rel="noopener">
                <MessageCircle size={18} /> WhatsApp Booking
              </a>
              <a href={PHONE} className="call-btn">
                <Phone size={18} /> Call +91 91721 19904
              </a>
            </div>
            <div className="contact-strip">
              <div><Clock3 size={17} /> Mon - Sat, 8 AM - 8 PM</div>
              <div><MapPin size={17} /> {ADDRESS}</div>
              <div><Mail size={17} /> care@viriyaphysiocare.com</div>
            </div>
          </div>

          <form className="appointment-form">
            <div className="form-row">
              <label>
                Full name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+91 99999 99999" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Concern
                <select defaultValue="">
                  <option value="" disabled>Select treatment</option>
                  <option>Sports Rehabilitation</option>
                  <option>Spine & Posture</option>
                  <option>Orthopedic Physiotherapy</option>
                  <option>Home Physiotherapy</option>
                </select>
              </label>
              <label>
                Preferred date
                <input type="date" />
              </label>
            </div>
            <label>
              Message
              <textarea rows={3} placeholder="Briefly describe your pain, injury, or recovery goal." />
            </label>
            <button type="button">
              Request Appointment <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="faq-heading gs-reveal">
          <div className="section-label">Quick Answers</div>
          <h2 className="font-serif">FAQ</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item gs-reveal">
              <button onClick={() => setOpenFaq(i === openFaq ? -1 : i)}>
                <span>{f.q}</span>
                <ChevronDown size={16} className={openFaq === i ? "open" : ""} />
              </button>
              {openFaq === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-cta">
          <div>
            <span>Ready when you are</span>
            <h2 className="font-serif">Book a recovery assessment today.</h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener">
            <MessageCircle size={17} /> WhatsApp Us
          </a>
        </div>
        <div className="footer-inner">
          <div className="footer-brand">
            VIRIYA PHYSIOCARE
            <p>Premium rehabilitation and physiotherapy care with evidence-based treatment, patient education, and long-term movement confidence.</p>
            <div className="footer-socials">
              <a href={INSTA} target="_blank" rel="noopener" aria-label="Instagram"><Instagram size={17} /></a>
              <a href={PHONE} aria-label="Phone"><Phone size={17} /></a>
              <a href="mailto:care@viriyaphysiocare.com" aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Treatments</a></li>
              <li><a href="#about">About Clinic</a></li>
              <li><a href="#testimonials">Patient Stories</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Treatments</h4>
            <ul>
              <li>Sports Rehabilitation</li>
              <li>Spine & Posture</li>
              <li>Neuro Rehab</li>
              <li>Home Physiotherapy</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li>{ADDRESS}</li>
              <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
              <li><a href={PHONE}>+91 91721 19904</a></li>
              <li><a href="mailto:care@viriyaphysiocare.com">care@viriyaphysiocare.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-map" style={{ maxWidth: '1200px', margin: '36px auto 0', borderRadius: '1.2rem', overflow: 'hidden', height: '260px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <iframe
            src="https://maps.google.com/maps?q=Viriya%20physiocare%20%26%20rehabilitation%20centre%2C%20NIT%2C%20swimming%20pool%2C%20N%20Ambazari%20Rd%2C%20near%20science%20college%2C%20Dharampeth%2C%20Nagpur%2C%20Maharashtra%20440033&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.1) opacity(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Viriya Physiocare Location"
          ></iframe>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Viriya Physiocare & Rehabilitation Centre. All rights reserved.</div>
      </footer>
      {/* ── Mobile Navigation ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-white/95 backdrop-blur-xl border-t border-[#0F2942]/10 flex justify-around items-center z-[1000] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-[#5A7A96] text-[10px] font-medium transition-colors hover:text-[#0F2942]">
          <HomeIcon size={22} />
          <span>Home</span>
        </button>
        <button onClick={() => setIsBookingModalOpen(true)} className="relative -top-[18px] w-[54px] h-[54px] rounded-full bg-[#B8935A] text-white flex justify-center items-center shadow-[0_8px_20px_rgba(184,147,90,0.35)]">
          <Calendar size={24} />
        </button>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-[#5A7A96] text-[10px] font-medium transition-colors hover:text-[#0F2942]">
          <PhoneCall size={22} />
          <span>Contact</span>
        </button>
      </div>

      {/* ── Booking Modal ── */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-[#071524]/75 backdrop-blur-sm grid place-items-center z-[2000] p-5" onClick={() => setIsBookingModalOpen(false)}>
          <div className="bg-white w-full max-w-[480px] rounded-[2rem] p-8 relative shadow-[0_30px_60px_rgba(0,0,0,0.4)] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 bg-slate-100 hover:bg-slate-200 border-none w-9 h-9 rounded-full grid place-items-center cursor-pointer text-[#0F2942] transition-colors" onClick={() => setIsBookingModalOpen(false)}>
              <X size={20} />
            </button>
            <div className="text-[0.75rem] uppercase tracking-[0.18em] text-[#B8935A] mb-2 font-semibold">Quick Booking</div>
            <h2 className="font-serif text-[1.8rem] mb-5 text-[#0A2035]">Request Appointment</h2>
            <form className="p-0 bg-transparent border-none shadow-none grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-[0.78rem] font-semibold text-[#0F2942]">
                  Full name
                  <input type="text" placeholder="Your name" className="block w-full mt-2 border border-[#0F2942]/10 rounded-xl bg-[#F8FBFF] text-[#2D4A62] px-3.5 py-[13px] font-inherit text-[0.88rem] outline-none transition-all focus:border-[#B8935A]/65 focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,147,90,0.14)]" />
                </label>
                <label className="block text-[0.78rem] font-semibold text-[#0F2942]">
                  Phone
                  <input type="tel" placeholder="+91 91721 19904" className="block w-full mt-2 border border-[#0F2942]/10 rounded-xl bg-[#F8FBFF] text-[#2D4A62] px-3.5 py-[13px] font-inherit text-[0.88rem] outline-none transition-all focus:border-[#B8935A]/65 focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,147,90,0.14)]" />
                </label>
              </div>
              <label className="block text-[0.78rem] font-semibold text-[#0F2942]">
                Preferred date
                <input type="date" className="block w-full mt-2 border border-[#0F2942]/10 rounded-xl bg-[#F8FBFF] text-[#2D4A62] px-3.5 py-[13px] font-inherit text-[0.88rem] outline-none transition-all focus:border-[#B8935A]/65 focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,147,90,0.14)]" />
              </label>
              <label className="block text-[0.78rem] font-semibold text-[#0F2942]">
                Message
                <textarea rows={3} placeholder="Briefly describe your pain or goal." className="block w-full mt-2 border border-[#0F2942]/10 rounded-xl bg-[#F8FBFF] text-[#2D4A62] px-3.5 py-[13px] font-inherit text-[0.88rem] outline-none transition-all focus:border-[#B8935A]/65 focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,147,90,0.14)] resize-y min-h-[92px]" />
              </label>
              <button type="button" onClick={() => setIsBookingModalOpen(false)} className="w-full inline-flex items-center justify-center gap-2 border-0 rounded-2xl bg-[#B8935A] text-[#0A1E33] px-[18px] py-[15px] font-bold cursor-pointer transition-transform hover:-translate-y-[1px] hover:brightness-105 mt-2">
                Confirm Request <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
