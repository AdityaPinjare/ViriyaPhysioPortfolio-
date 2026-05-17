"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, GALLERY_IMAGES } from "@/constants";
import { useStaggerReveal } from "@/hooks/useGSAP";
import { Star, Quote } from "lucide-react";

export function SocialProof() {
  const [active, setActive] = useState(0);
  const revealRef = useStaggerReveal();

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
        {/* Testimonials Side */}
        <div ref={revealRef} className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl text-[#0A2035] md:text-5xl">
              Patient Stories
            </h2>
            <p className="mt-4 text-[#2D4A62]">
              Real recoveries from people who trusted our clinical precision.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] border border-white/30 bg-white/55 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-[#B8935A]/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex gap-1 text-[#B8935A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl leading-relaxed text-[#0A2035] md:text-2xl">
                  "
                  {TESTIMONIALS[active]?.quote ||
                    "Quality care that changed my life."}
                  "
                </p>
                <div>
                  <p className="font-semibold text-[#0F2942]">
                    {TESTIMONIALS[active]?.name}
                  </p>
                  <p className="text-sm text-[#5A7A96]">Verified Patient</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-[#B8935A]" : "w-2 bg-[#B8D4F0]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Side */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=600&q=80",
          ].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl shadow-lg ${
                i === 1 ? "mt-8 h-64" : i === 2 ? "-mt-8 h-64" : "h-64"
              }`}
            >
              <img
                src={src}
                alt="Clinic Gallery"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E33]/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
