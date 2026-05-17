"use client";

import { useState } from "react";
import { FAQS } from "@/constants";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-4xl text-[#0A2035] md:text-5xl">
          Common Questions
        </h2>
        <p className="mt-4 text-[#5A7A96]">
          Everything you need to know about starting your journey with us.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {(FAQS || []).map((faq, i) => (
          <div key={i} className="h-fit">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className={`flex w-full items-center justify-between rounded-2xl border p-6 text-left transition-all duration-300 ${
                open === i
                  ? "border-[#B8935A] bg-white shadow-[0_10px_30px_rgba(15,41,66,0.08)]"
                  : "border-white/40 bg-white/30 hover:bg-white/50"
              }`}
            >
              <span className="font-medium text-[#0F2942] pr-4">{faq.q}</span>
              <ChevronDown
                className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-[#B8935A]" : "text-[#5A7A96]"}`}
                size={18}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-5 text-sm leading-relaxed text-[#5A7A96]">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
