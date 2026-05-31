"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = clsx(
    "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-xl transition-colors duration-300 cursor-pointer",
    variant === "primary"
      ? "bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/20"
      : "glass text-slate-200 hover:border-sky-500/40 hover:text-sky-300",
    className
  );

  const content = (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <div
        ref={ref}
        className="inline-block"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={base}
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <button type="button" onClick={onClick} className={base}>
        {content}
      </button>
    </div>
  );
}
