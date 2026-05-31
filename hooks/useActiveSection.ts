"use client";

import { useEffect, useState, useCallback } from "react";
import { getScrollOffset } from "@/lib/scroll";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "hero");

  const updateActive = useCallback(() => {
    if (window.scrollY < 100) {
      setActive("hero");
      return;
    }

    const offset = getScrollOffset() + 48;
    const scrollPosition = window.scrollY + offset;

    let current = sectionIds.find((id) => id !== "hero") ?? "about";

    for (const id of sectionIds) {
      if (id === "hero") continue;
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= scrollPosition) {
        current = id;
      }
    }

    setActive(current);
  }, [sectionIds]);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  return active;
}
