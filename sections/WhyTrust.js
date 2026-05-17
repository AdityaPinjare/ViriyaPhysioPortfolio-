"use client";

import { TRUST_POINTS } from "@/constants";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useGSAP";
import { TrustCard } from "@/components/ui/Card";

export function WhyTrust() {
  const titleRef = useScrollReveal();
  const containerRef = useStaggerReveal();

  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-10">
      <div ref={titleRef}>
        <h2 className="font-serif text-3xl text-[#0A2035] md:text-4xl">
          Why Patients Trust Us
        </h2>
      </div>

      <div
        ref={containerRef}
        className="grid auto-rows-[140px] grid-cols-1 gap-4 md:grid-cols-3"
      >
        {TRUST_POINTS.map((item, index) => (
          <TrustCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
