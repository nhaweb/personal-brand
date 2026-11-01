"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

type FoldProps = {
  className?: string;
  summary: ReactNode;
  children: ReactNode;
  "data-reveal"?: boolean | string;
};

const CLOSE_MS = 420;

/** Accordion that keeps `<details open>` until the panel finish collapsing. */
export default function Fold({
  className = "",
  summary,
  children,
  ...rest
}: FoldProps) {
  const rootRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    return () => {
      if (closeTimer.current != null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  function clearCloseTimer() {
    if (closeTimer.current != null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function reduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function finishClose() {
    clearCloseTimer();
    const root = rootRef.current;
    if (root) root.open = false;
    setExpanded(false);
  }

  function onSummaryClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    const root = rootRef.current;
    if (!root) return;

    if (root.open && expanded) {
      if (reduceMotion()) {
        finishClose();
        return;
      }
      setExpanded(false);
      clearCloseTimer();
      const panel = panelRef.current;
      const onEnd = (ev: TransitionEvent) => {
        if (ev.target !== panel) return;
        if (ev.propertyName !== "grid-template-rows") return;
        panel?.removeEventListener("transitionend", onEnd);
        finishClose();
      };
      panel?.addEventListener("transitionend", onEnd);
      closeTimer.current = window.setTimeout(finishClose, CLOSE_MS);
      return;
    }

    clearCloseTimer();
    root.open = true;
    if (reduceMotion()) {
      setExpanded(true);
      return;
    }
    // Next frame so 0fr → 1fr actually transitions
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });
  }

  return (
    <details
      ref={rootRef}
      className={`fold${expanded ? " is-open" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <summary onClick={onSummaryClick}>{summary}</summary>
      <div className="fold__panel" ref={panelRef}>
        <div className="fold__clip">{children}</div>
      </div>
    </details>
  );
}
