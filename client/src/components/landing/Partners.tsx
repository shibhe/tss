import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  HeartHandshake,
  Handshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Partner {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ComponentType<{ className?: string }>;
  monogram: string;
  logo: string;
  logoBg: string;
}

const partners: Partner[] = [
  {
    id: "thalahub",
    name: "ThalaHub",
    url: "https://www.thalahub.co.za/",
    displayUrl: "thalahub.co.za",
    category: "Community Savings",
    tagline: "Digital Management for African Savings Groups",
    description:
      "Helps African savings groups — Stokvels, Chamas, Esusus, and others — run smoothly. Track contributions, manage loans, and keep everyone on the same page.",
    tags: [
      "Stokvels management",
      "Smart Bank Sync",
      "Loan Management",
      "AI Financial Records",
    ],
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/30",
    accentText: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60",
    badgeText: "text-indigo-700 dark:text-indigo-300",
    icon: Wallet,
    monogram: "TH",
    logo: "/partners/thalahub.png?v=2",
    logoBg: "bg-[#242c36]",
  },
  {
    id: "saferoute",
    name: "SafeRoute Africa",
    url: "https://saferoute.africa/",
    displayUrl: "saferoute.africa",
    category: "Family Protection",
    tagline: "Sovereign Personal & Family Safety",
    description:
      "Keeps your family safe. Adults, teens, and kids each get the right protection. When something goes wrong, alerts go out via WhatsApp, SMS, or smartwatch — no false alarms.",
    tags: [
      "Family Safety",
      "Guardian Protection",
      "Zero False Alarms",
    ],
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentText: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    icon: ShieldCheck,
    monogram: "SR",
    logo: "/partners/saferoute.png?v=2",
    logoBg: "bg-[#17263f]",
  },
  {
    id: "legacylens",
    name: "LegacyLens",
    url: "https://legacylens.co.za/",
    displayUrl: "legacylens.co.za",
    category: "Memorials & Preservation",
    tagline: "Personalised Memorials & Lifetime Preservation",
    description:
      "Not just a livestream. Families get their own memorial page — with an obituary, photos, condolences, donations, and replay access. Kept online forever.",
    tags: [
      "Personalised Memorial",
      "Tribute Gallery & Condolences",
    ],
    gradient: "from-rose-500 via-amber-500 to-orange-500",
    accentBg: "bg-rose-500/10",
    accentBorder: "border-rose-500/30",
    accentText: "text-rose-600 dark:text-rose-400",
    badgeBg: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60",
    badgeText: "text-rose-700 dark:text-rose-300",
    icon: HeartHandshake,
    monogram: "LL",
    logo: "/partners/legacylens.png?v=2",
    logoBg: "bg-white dark:bg-zinc-900",
  },
];

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = partner.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex h-full"
    >
      <div className="relative w-full flex flex-col justify-between bg-card hover:bg-card/95 border border-border/80 hover:border-primary/40 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
        {/* Top gradient accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
        />

        {/* Content Section */}
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            {/* Logo container with fallback */}
            <div className="flex items-center gap-4">
              <div
                className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ${partner.logoBg} shadow-md border ${partner.accentBorder} group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0 relative`}
              >
                {!imageFailed ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center text-white font-heading font-black text-xl`}
                  >
                    {partner.monogram}
                  </div>
                )}
              </div>

              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${partner.badgeBg} ${partner.badgeText}`}
                >
                  {partner.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-foreground mt-1.5 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
              </div>
            </div>

            {/* Accent Icon bubble */}
            <div
              className={`p-2.5 rounded-xl ${partner.accentBg} ${partner.accentBorder} border ${partner.accentText} shrink-0 hidden sm:flex`}
            >
              <Icon className="w-5 h-5" />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/90">
            <Sparkles className="w-3.5 h-3.5 text-primary/70 shrink-0" />
            <span>{partner.tagline}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {partner.description}
          </p>
        </div>

        {/* Footer Link / CTA */}
        <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            {partner.displayUrl}
          </span>

          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
          >
            <span>Visit Site</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Partners() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="applications" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Anchor for backward compatibility */}
      <span id="partners" className="sr-only" />

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight">
            Powered by Tivane Software Solutions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Applications designed, built, and powered by Tivane Software Solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>

        {/* Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 border border-primary/20 p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold font-heading text-foreground">
              Want to build an application with us?
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              From web platforms to mobile apps, we help you design, build, and launch software that works.
            </p>
            <div className="pt-2">
              <a href="#contact" onClick={handleScrollToContact}>
                <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
