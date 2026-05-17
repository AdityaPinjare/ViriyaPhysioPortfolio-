"use client";

import { useState } from "react";
import { TESTIMONIALS, GALLERY_IMAGES } from "@/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import { Card } from "@/components/ui/Card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-10"
    >
      <div ref={titleRef}>
        <h2 className="font-serif text-3xl text-[#0A2035] md:text-4xl">
          Patient Stories
        </h2>
      </div>

      <div ref={contentRef} className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
        {/* Testimonial Card */}
        <Card variant="glass" size="lg" className="relative">
          <div className="mb-4 flex text-[#B8935A]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          <p className="text-xl leading-relaxed text-[#2D4A62]">
            &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
          </p>

          <p className="mt-6 text-sm font-medium text-[#5A7A96]">
            {TESTIMONIALS[activeIndex].name}
          </p>

          {/* Navigation Arrows */}
          <div className="absolute right-6 top-6 flex gap-2">
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8935A]/30 bg-white/60 text-[#0F2942] transition hover:bg-white hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8935A]/30 bg-white/60 text-[#0F2942] transition hover:bg-white hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Card>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3">
          {GALLERY_IMAGES.map((src, idx) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${
                idx === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt="Clinic environment"
                className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E33]/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
