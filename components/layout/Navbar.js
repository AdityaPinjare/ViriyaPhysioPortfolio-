"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F4F7FC]/85 backdrop-blur-xl shadow-lg border-b border-[#0F2942]/06"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#hero"
            className="font-serif text-lg tracking-wide text-[#0F2942] md:text-xl"
          >
            VIRIYA PHYSIOCARE
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-[#2D4A62] transition hover:text-[#0F2942]"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              href={SITE_CONFIG.whatsapp}
              as="a"
              target="_blank"
              rel="noopener"
            >
              Book Now
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F7FC]/95 backdrop-blur-xl md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-6 p-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xl font-medium text-[#0F2942]"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="lg"
              href={SITE_CONFIG.whatsapp}
              as="a"
              target="_blank"
              rel="noopener"
              className="mt-4"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
