"use client";

import { useScrollReveal } from "@/hooks/useGSAP";
import { Card } from "@/components/ui/Card";

export function About() {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <section
      id="about"
      className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1fr] md:px-10"
    >
      <div ref={imgRef} className="relative">
        <img
          src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=1200&q=80"
          alt="Clinic specialist"
          className="h-[400px] w-full rounded-[2rem] object-cover shadow-[0_25px_60px_rgba(15,41,66,0.26)] md:h-[480px]"
        />
        <Card variant="default" size="sm" className="absolute -bottom-4 left-4 shadow-xl">
          <div className="text-sm font-medium text-[#0F2942]">
            17+ Years of Specialist Practice
          </div>
        </Card>
      </div>

      <div ref={textRef} className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A7A96]">
          About The Clinic
        </p>
        <h2 className="font-serif text-3xl text-[#0A2035] md:text-4xl">
          Restoring movement with science, empathy, and precision.
        </h2>
        <p className="text-[#2D4A62] leading-relaxed">
          At VIRIYA PHYSIOCARE & REHABILITATION CENTRE, our mission is to blend
          evidence-based clinical expertise with human-centered care. Every
          therapy protocol is designed around your lifestyle, condition, and
          recovery goals.
        </p>
        <p className="text-[#2D4A62] leading-relaxed">
          Our philosophy is simple: personalized treatment, measurable progress,
          and long-term wellness. From orthopedic and neuro rehabilitation to
          posture and pain management, we build care journeys that feel premium,
          reassuring, and deeply effective.
        </p>
        <Card variant="default" size="md" className="text-sm text-[#2D4A62]">
          <strong className="text-[#0F2942]">Qualifications:</strong> MPT
          (Ortho), Sports Rehab Certification, Advanced Dry Needling,
          Electrotherapy and Manual Therapy Specialist.
        </Card>
      </div>
    </section>
  );
}
