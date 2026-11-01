"use client";

import { useLocale } from "../i18n/LocaleProvider";

export default function BackToTop() {
  const { t } = useLocale();

  function scrollToTop() {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "max(1rem, var(--margin))",
        bottom: "max(1rem, var(--margin))",
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        width: "3.25rem",
        height: "3.25rem",
        padding: 0,
        border: 0,
        borderRadius: "50%",
        background: "var(--ink)",
        color: "var(--bg)",
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
        transform: "none",
        boxShadow: "0 8px 24px rgb(22 14 8 / 0.18)",
        cursor: "pointer",
      }}
    >
      <svg
        className="back-to-top__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
