"use client";

import { useScrollReveal } from "@/hooks/useGSAP";

const cardVariants = {
  default:
    "bg-white/55 border border-white/35 backdrop-blur-xl shadow-xl",
  glass:
    "bg-white/45 border border-white/30 backdrop-blur-xl shadow-2xl",
  premium:
    "bg-gradient-to-br from-white/60 to-white/30 border border-white/40 backdrop-blur-2xl shadow-2xl",
  dark:
    "bg-[#0F2942]/85 border border-white/10 backdrop-blur-xl shadow-2xl text-[#E8F4FF]",
};

const sizes = {
  sm: "p-4 rounded-2xl",
  md: "p-6 rounded-3xl",
  lg: "p-8 rounded-[2.5rem]",
};

export function Card({
  children,
  variant = "default",
  size = "md",
  className = "",
  animate = true,
  ...props
}) {
  const ref = animate ? useScrollReveal() : null;

  const baseClasses = "transition-all duration-300";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${cardVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function ServiceCard({ service, index }) {
  const IconComponent = getIcon(service.icon);

  return (
    <Card
      variant="glass"
      size="md"
      className="group cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={service.img}
          alt={service.title}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E33]/60 to-transparent" />
      </div>
      <div className="mt-4">
        <IconComponent className="mb-2 text-[#B8935A]" size={20} />
        <h3 className="font-serif text-xl text-[#0A2035]">{service.title}</h3>
        <p className="mt-2 text-sm text-[#5A7A96] line-clamp-2">{service.desc}</p>
      </div>
    </Card>
  );
}

export function MetricCard({ metric }) {
  const IconComponent = getIcon(metric.icon);

  return (
    <Card variant="default" size="md" className="text-center">
      <IconComponent className="mx-auto mb-3 text-[#B8935A]" size={24} />
      <div className="text-3xl font-semibold text-[#0F2942]">{metric.value}</div>
      <div className="mt-1 text-sm text-[#5A7A96]">{metric.label}</div>
    </Card>
  );
}

export function TrustCard({ item, index }) {
  const IconComponent = getIcon(item.icon);

  return (
    <Card
      variant="premium"
      size="md"
      className={`flex flex-col justify-end transition hover:-translate-y-1 ${
        item.wide ? "md:col-span-2" : ""
      }`}
    >
      <IconComponent className="mb-3 text-[#B8935A]" size={24} />
      <p className="text-lg font-medium text-[#0F2942]">{item.title}</p>
    </Card>
  );
}

export function FloatCard({
  children,
  position = "top-right",
  variant = "default",
  className = "",
}) {
  const positions = {
    "top-right": "-top-4 -right-4",
    "top-left": "-top-4 -left-4",
    "bottom-right": "-bottom-4 -right-4",
    "bottom-left": "-bottom-4 -left-4",
  };

  return (
    <div
      className={`absolute ${positions[position]} z-10 ${className}`}
    >
      <Card variant={variant} size="sm" className="shadow-2xl">
        {children}
      </Card>
    </div>
  );
}

function getIcon(name) {
  const icons = {
    Activity: require("lucide-react").Activity,
    ArrowRight: require("lucide-react").ArrowRight,
    BadgeCheck: require("lucide-react").BadgeCheck,
    Brain: require("lucide-react").Brain,
    CalendarClock: require("lucide-react").CalendarClock,
    ChevronDown: require("lucide-react").ChevronDown,
    Clock3: require("lucide-react").Clock3,
    HeartPulse: require("lucide-react").HeartPulse,
    Hospital: require("lucide-react").Hospital,
    Home: require("lucide-react").Home,
    Instagram: require("lucide-react").Instagram,
    Mail: require("lucide-react").Mail,
    MapPin: require("lucide-react").MapPin,
    MessageCircle: require("lucide-react").MessageCircle,
    Phone: require("lucide-react").Phone,
    ShieldCheck: require("lucide-react").ShieldCheck,
    Sparkles: require("lucide-react").Sparkles,
    Star: require("lucide-react").Star,
    Stethoscope: require("lucide-react").Stethoscope,
    User: require("lucide-react").User,
    UserCheck: require("lucide-react").UserCheck,
    Waves: require("lucide-react").Waves,
    Calendar: require("lucide-react").Calendar,
  };

  return icons[name] || icons.Activity;
}
