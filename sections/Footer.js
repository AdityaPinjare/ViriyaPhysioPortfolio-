import { SITE_CONFIG } from "@/constants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1E33] pt-24 pb-12 text-[#B8D0E8]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding Column */}
          <div className="space-y-8">
            <div className="font-serif text-2xl tracking-wider text-white">
              VIRIYA PHYSIOCARE
            </div>
            <p className="text-sm leading-relaxed text-[#7A9DB8]">
              Pioneering advanced physical therapy through evidence-based
              practice and compassionate rehabilitation since 2007.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#B8935A] hover:text-[#B8935A]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Specialized Treatments */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Treatments
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Sports Rehabilitation",
                "Spine & Posture Therapy",
                "Neurological Physio",
                "Post-Op Recovery",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="group flex items-center justify-between transition hover:text-[#B8935A]"
                  >
                    {item}{" "}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: "Clinical Expertise", href: "#about" },
                { name: "Patient Success Stories", href: "#testimonials" },
                { name: "Treatment Methodology", href: "#services" },
                { name: "Schedule Assessment", href: "#booking" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#B8935A]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#B8935A]" />
                <span className="leading-relaxed">
                  Viriya physiocare & rehabilitation centre,
                  <br />
                  NIT, swimming pool, N Ambazari Rd, near science college, Dharampeth, Nagpur, Maharashtra 440033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#B8935A]" />{" "}
                <span>+91 91721 19904</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#B8935A]" />{" "}
                <span>care@viriyaphysiocare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-12 text-center text-[10px] uppercase tracking-widest text-[#5A7A96]">
          <p>
            © {year} Viriya Physiocare & Rehabilitation Centre. Developed with
            clinical precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
