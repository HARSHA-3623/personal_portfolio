"use client";

import { Reveal } from "@/components/ui/Reveal";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "left",
}: Props) {
  return (
    <Reveal
      className={`mb-10 sm:mb-12 lg:mb-14 ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-500/80 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-px w-12 bg-gradient-to-r from-sky-500/60 to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
