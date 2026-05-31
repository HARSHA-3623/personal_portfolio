"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

export function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    scrollToSection(hash, { delay: 400 });
  }, []);

  return null;
}
