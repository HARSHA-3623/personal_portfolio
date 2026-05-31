const EXTRA_OFFSET = 20;

/** Measured fixed header height + breathing room for section titles */
export function getScrollOffset(): number {
  if (typeof document === "undefined") return 88;
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const height = header?.getBoundingClientRect().height ?? 72;
  return Math.ceil(height) + EXTRA_OFFSET;
}

export function scrollToSection(
  sectionId: string,
  options?: { delay?: number }
): void {
  const run = () => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const offset = getScrollOffset();
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReduced ? "auto" : "smooth",
    });

    if (typeof history !== "undefined" && history.replaceState) {
      history.replaceState(null, "", `#${sectionId}`);
    }
  };

  const delay = options?.delay ?? 0;
  if (delay > 0) {
    window.setTimeout(run, delay);
  } else {
    requestAnimationFrame(() => requestAnimationFrame(run));
  }
}
