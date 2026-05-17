"use client";

import { SITE_CONFIG } from "@/constants";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="booking"
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
    >
      <div className="overflow-hidden rounded-[3rem] border border-white/40 bg-white/30 shadow-2xl backdrop-blur-xl">
        <div className="grid lg:grid-cols-2">
          {/* Form Section */}
          <div className="p-8 md:p-14">
            <div className="mb-10 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#B8935A]">
                Secure Your Slot
              </span>
              <h2 className="font-serif text-4xl text-[#0A2035]">
                Book an Appointment
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-[#B8D4F0] bg-white/50 px-5 py-4 outline-none transition focus:border-[#2A5A8C]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-[#B8D4F0] bg-white/50 px-5 py-4 outline-none transition focus:border-[#2A5A8C]"
                />
              </div>
              <select className="w-full rounded-2xl border border-[#B8D4F0] bg-white/50 px-5 py-4 outline-none transition focus:border-[#2A5A8C] appearance-none">
                <option>Select Treatment Type</option>
                <option>Sports Rehabilitation</option>
                <option>Spine & Posture</option>
                <option>Orthopedic Rehab</option>
                <option>Neuro Rehab</option>
              </select>
              <textarea
                placeholder="Tell us about your concern..."
                rows={4}
                className="w-full rounded-2xl border border-[#B8D4F0] bg-white/50 px-5 py-4 outline-none transition focus:border-[#2A5A8C]"
              />
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1A3F63] py-5 font-semibold text-white transition hover:bg-[#0A2035] hover:shadow-lg">
                Submit Booking Request <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="relative bg-[#0F2942] p-8 text-white md:p-14">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#B8935A,transparent_50%)]" />

            <div className="relative z-10 space-y-10">
              <h3 className="font-serif text-3xl">Clinic Information</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    text:
                      "Viriya physiocare & rehabilitation centre, NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033",
                    label: "Address",
                  },
                  {
                    icon: Clock3,
                    text: "Mon – Sat: 8:00 AM – 8:00 PM",
                    label: "Operating Hours",
                  },
                  {
                    icon: Phone,
                    text: SITE_CONFIG?.phone || "+91 91721 19904",
                    label: "Direct Call",
                  },
                  {
                    icon: Mail,
                    text: "care@viriyaphysiocare.com",
                    label: "Official Email",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B8935A]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#7A9DB8] font-medium">
                        {item.label}
                      </p>
                      <p className="text-lg text-[#E8F4FF]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-white/20" />
                  <p className="text-xs uppercase tracking-widest text-[#7A9DB8]">
                    Social Connect
                  </p>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={SITE_CONFIG?.instagram}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm transition hover:bg-white/10 hover:border-[#B8935A]"
                  >
                    <Instagram size={16} /> @viriyaphysiocare__
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
