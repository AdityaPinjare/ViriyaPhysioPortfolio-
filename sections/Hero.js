"use client";

import { SITE_CONFIG, HERO_CHIPS } from "@/constants";
import { useFloatAnimation } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/Button";
import { Card, FloatCard } from "@/components/ui/Card";
import { Sparkles, BadgeCheck, Star } from "lucide-react";
import PHOTO_20260512_120952 from "@/dist/assets/PHOTO_20260512_120952.jpg";

export function Hero() {
  const floatTopRef = useFloatAnimation(3, 8);
  const floatBottomRef = useFloatAnimation(2.5, 6);

  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-8 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pt-32"
    >
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#B8935A]/30 bg-white/60 px-4 py-2 text-xs font-medium shadow-md backdrop-blur">
          <Sparkles size={14} />
          Elite Physiotherapy and Recovery Studio
        </div>

        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-[#0A2035] md:text-5xl lg:text-6xl">
          Recover Stronger.
          <br />
          Move Freely.
          <br />
          Live Pain-Free.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-[#2D4A62] md:text-lg">
          Premium rehabilitation and physiotherapy care focused on mobility,
          recovery, posture correction, pain management, and long-term wellness.
        </p>

        <div className="flex flex-wrap gap-2">
          {HERO_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-[#D6E8FA]/80 px-3 py-1.5 text-xs font-medium text-[#1A3F63] shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <Button.Group
          whatsapp={SITE_CONFIG.whatsapp}
          phone={SITE_CONFIG.phoneLink}
          className="pt-2"
        />

        <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-[#5A7A96]">
          <span className="inline-flex items-center gap-2">
            <BadgeCheck size={16} /> NABH-Standard Protocols
          </span>
          <span className="inline-flex items-center gap-2">
            <Star size={16} /> Trusted by 6800+ Families
          </span>
        </div>
      </div>

      <div className="relative">
        <FloatCard position="top-right" variant="default" className="p-4">
          <div ref={floatTopRef}>
            <div className="text-xs text-[#6E4F42]">Average Pain Reduction</div>
            <div className="text-xl font-semibold text-[#0F2942]">89%</div>
          </div>
        </FloatCard>

        <img
          src={PHOTO_20260512_120952.src}
          alt="Premium physiotherapy session"
          className="h-[480px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_70px_rgba(15,41,66,0.28)] md:h-[560px]"
        />

        <FloatCard position="bottom-left" variant="dark" className="max-w-[220px] p-5">
          <div ref={floatBottomRef}>
            <div className="text-xs uppercase tracking-widest text-[#B8D4F0]">
              Clinical Precision
            </div>
            <p className="mt-1 text-sm leading-relaxed">
              Personalized plans crafted by experienced rehab specialists.
            </p>
          </div>
        </FloatCard>
      </div>
    </section>
  );
}
