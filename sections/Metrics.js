"use client";

import { METRICS } from "@/constants";
import { useStaggerReveal } from "@/hooks/useGSAP";
import { MetricCard } from "@/components/ui/Card";

export function Metrics() {
  const containerRef = useStaggerReveal();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
      <div ref={containerRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}
