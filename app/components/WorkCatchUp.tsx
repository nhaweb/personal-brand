"use client";

import { useEffect } from "react";

/** Desktop: even work cards start lower, then catch up to the left column on scroll. */
export default function WorkCatchUp() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let active = false;

    const OFFSET = () =>
      Math.min(160, Math.max(96, window.innerHeight * 0.14));

    const apply = () => {
      const cards = document.querySelectorAll<HTMLElement>(
        ".work-card:nth-child(even)",
      );
      if (!mq.matches || reduce.matches) {
        cards.forEach((card) => {
          card.style.removeProperty("--work-shift");
        });
        return;
      }

      const offset = OFFSET();
      // Longer travel range = slower, more even catch-up while scrolling
      const start = window.innerHeight * 1.05;
      const end = window.innerHeight * -0.05;

      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const progress = Math.min(
          1,
          Math.max(0, (start - top) / (start - end)),
        );
        // Near-linear with a soft settle at the end
        const eased = progress * (2 - progress);
        const shift = offset * (1 - eased);
        card.style.setProperty("--work-shift", `${shift.toFixed(2)}px`);
      });
    };

    const tick = () => {
      apply();
      if (active) frame = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (active) return;
      active = true;
      frame = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      active = false;
      cancelAnimationFrame(frame);
    };

    const onChange = () => {
      apply();
      if (mq.matches && !reduce.matches) startLoop();
      else stopLoop();
    };

    onChange();
    mq.addEventListener("change", onChange);
    reduce.addEventListener("change", onChange);
    window.addEventListener("resize", apply, { passive: true });

    return () => {
      stopLoop();
      mq.removeEventListener("change", onChange);
      reduce.removeEventListener("change", onChange);
      window.removeEventListener("resize", apply);
      document
        .querySelectorAll<HTMLElement>(".work-card:nth-child(even)")
        .forEach((card) => card.style.removeProperty("--work-shift"));
    };
  }, []);

  return null;
}
