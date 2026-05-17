"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG, MOBILE_NAV_ITEMS } from "@/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import { MessageCircle, Phone } from "lucide-react";

function getIcon(name) {
  const icons = {
    Activity: require("lucide-react").Activity,
    Home: require("lucide-react").Home,
    User: require("lucide-react").User,
    Phone: require("lucide-react").Phone,
    Calendar: require("lucide-react").Calendar,
  };
  return icons[name] || icons.Home;
}

export function MobileNavbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const ref = useScrollReveal();

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={ref}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="mx-auto max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40">
          <div className="flex items-center justify-around p-2">
            {MOBILE_NAV_ITEMS.map((item) => {
              const Icon = getIcon(item.icon);
              const isActive = activeTab === item.label;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    scrollTo(e, item.href);
                    setActiveTab(item.label);
                  }}
                  className={`relative flex flex-col items-center gap-1 rounded-2xl px-4 py-2 transition-all duration-300 ${
                    isActive
                      ? "bg-[#1A3F63] text-white shadow-lg"
                      : "text-[#5A7A96] hover:bg-white/60"
                  } ${item.primary ? "bg-[#B8935A] text-white shadow-lg" : ""}`}
                >
                  <Icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener"
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 hover:shadow-2xl md:hidden"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Sticky Book CTA on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#0A1E33] to-transparent p-4 pb-24 md:hidden">
        <a
          href={SITE_CONFIG.phoneLink}
          className="flex items-center justify-center gap-2 rounded-full bg-[#B8935A] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#D4AA72]"
        >
          <Phone size={16} />
          Emergency: {SITE_CONFIG.phone}
        </a>
      </div>
    </>
  );
}
