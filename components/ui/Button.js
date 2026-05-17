"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const buttonVariants = {
  primary:
    "bg-[#1A3F63] text-white shadow-[0_6px_24px_rgba(15,41,66,0.25)] hover:shadow-[0_8px_32px_rgba(15,41,66,0.32)] hover:-translate-y-0.5",
  secondary:
    "bg-white/70 text-[#2D4A62] border border-[#2A5A8C] hover:bg-white hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.4)] hover:-translate-y-0.5",
  gold:
    "bg-[#B8935A] text-white shadow-[0_6px_20px_rgba(184,147,90,0.3)] hover:shadow-[0_8px_28px_rgba(184,147,90,0.4)] hover:-translate-y-0.5",
  outline:
    "bg-transparent text-[#1A3F63] border border-[#B8935A] hover:bg-[#B8935A] hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm";

  return (
    <button
      className={`${baseClasses} ${buttonVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}

export function CTAButtons({ whatsapp, phone, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        variant="whatsapp"
        icon={<MessageCircle size={16} />}
        iconPosition="left"
        href={whatsapp}
        as="a"
      >
        WhatsApp Booking
      </Button>
      <Button
        variant="primary"
        icon={<Phone size={16} />}
        iconPosition="left"
        href={phone}
        as="a"
      >
        Call Now
      </Button>
    </div>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm";

  return (
    <a
      className={`${baseClasses} ${buttonVariants[variant]} ${sizes.md} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight size={14} />
    </a>
  );
}
