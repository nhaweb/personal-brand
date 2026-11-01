"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    /** Set by LenisProvider so any component can drive smooth scrolling. */
    __lenis?: Lenis;
  }
}

function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Automated browsers (inspect gate, Lighthouse) need native scroll.
    if (reduce || navigator.webdriver) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    window.__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Lenis keeps its own scroll offset across App Router navigations.
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    if (window.location.hash) return;
    scrollToTop();
  }, [pathname]);

  return children;
}
