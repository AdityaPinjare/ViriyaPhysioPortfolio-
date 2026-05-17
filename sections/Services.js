"use client";

import { SERVICES } from "@/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import { ServiceCard } from "@/components/ui/Card";

export function Services() {
  const titleRef = useScrollReveal();

  return (
    <section id="services" className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-10">
      <div ref={titleRef} className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-[#B8935A]">
          Our Treatments
        </p>
        <h2 className="font-serif text-3xl text-[#0A2035] md:text-4xl">
          Specialized Recovery Programs
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
