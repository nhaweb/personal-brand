"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import ContactForm from "./ContactForm";
import LangSwitch from "./LangSwitch";
import { socialLinks } from "./socialLinks";
import { useLocale } from "../i18n/LocaleProvider";

/** Match --t-overlay-out; keep scroll lock until the sheet finishes leaving. */
const OVERLAY_OUT_MS = 420;

export default function SiteHeader() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [menuLeaving, setMenuLeaving] = useState(false);
  const [formLeaving, setFormLeaving] = useState(false);
  const menuTimer = useRef<number | null>(null);
  const formTimer = useRef<number | null>(null);
  const titleId = useId();
  const formTitleId = useId();

  const links = [
    { href: "/#work", label: t.nav.work },
    { href: "/#services", label: t.nav.services },
    { href: "/#resume", label: t.nav.resume },
    { href: "/#faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  const scrollLocked = menuOpen || formOpen || menuLeaving || formLeaving;

  function clearMenuTimer() {
    if (menuTimer.current != null) {
      window.clearTimeout(menuTimer.current);
      menuTimer.current = null;
    }
  }

  function clearFormTimer() {
    if (formTimer.current != null) {
      window.clearTimeout(formTimer.current);
      formTimer.current = null;
    }
  }

  function openMenu() {
    clearMenuTimer();
    setFormOpen(false);
    setFormLeaving(false);
    setMenuLeaving(false);
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen((open) => {
      if (!open) return open;
      setMenuLeaving(true);
      clearMenuTimer();
      menuTimer.current = window.setTimeout(() => {
        setMenuLeaving(false);
        menuTimer.current = null;
      }, OVERLAY_OUT_MS);
      return false;
    });
  }

  function openForm() {
    clearFormTimer();
    setMenuOpen(false);
    setMenuLeaving(false);
    setFormLeaving(false);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen((open) => {
      if (!open) return open;
      setFormLeaving(true);
      clearFormTimer();
      formTimer.current = window.setTimeout(() => {
        setFormLeaving(false);
        formTimer.current = null;
      }, OVERLAY_OUT_MS);
      return false;
    });
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen((open) => {
        if (!open) return open;
        setMenuLeaving(true);
        clearMenuTimer();
        menuTimer.current = window.setTimeout(() => {
          setMenuLeaving(false);
          menuTimer.current = null;
        }, OVERLAY_OUT_MS);
        return false;
      });
      setFormOpen((open) => {
        if (!open) return open;
        setFormLeaving(true);
        clearFormTimer();
        formTimer.current = window.setTimeout(() => {
          setFormLeaving(false);
          formTimer.current = null;
        }, OVERLAY_OUT_MS);
        return false;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", scrollLocked);
    return () => root.classList.remove("menu-open");
  }, [scrollLocked]);

  useEffect(() => {
    return () => {
      clearMenuTimer();
      clearFormTimer();
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__bar wrap">
          <Link className="site-header__brand" href="/#top" aria-label="PML">
            <Image
              className="site-header__logo"
              src="/images/pml-logo-orange.png"
              alt="PML"
              width={763}
              height={373}
              priority
            />
          </Link>

          <nav className="site-header__socials" aria-label={t.nav.social}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                target={s.href.startsWith("http") ? "_blank" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="site-header__right">
            <LangSwitch className="site-header__lang" />
            <button
              type="button"
              className="site-header__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={openMenu}
            >
              <span className="site-header__burger" aria-hidden="true" />
              {t.nav.menu}
            </button>
            <Link className="btn btn--accent site-header__cta" href="/contact">
              {t.common.getInTouch}
              <Arrow />
            </Link>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`overlay${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        inert={menuOpen ? undefined : true}
      >
        <div className="overlay__bar wrap">
          <p className="overlay__title" id={titleId}>
            {t.nav.menu}
          </p>
          <div className="overlay__bar-actions flex items-center gap-5">
            <LangSwitch />
            <button
              type="button"
              className="overlay__close font-medium underline underline-offset-4"
              aria-label={t.nav.closeMenu}
              onClick={closeMenu}
            >
              {t.nav.close}
            </button>
          </div>
        </div>
        <nav className="overlay__nav wrap" aria-label={t.nav.primary}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={
                {
                  ["--enter-delay" as string]: menuOpen
                    ? `${90 + i * 55}ms`
                    : "0ms",
                } as React.CSSProperties
              }
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="overlay__foot wrap">
          <button
            type="button"
            className="btn btn--accent"
            onClick={() => {
              clearMenuTimer();
              setMenuOpen(false);
              setMenuLeaving(false);
              openForm();
            }}
          >
            {t.common.contactForm}
            <Arrow />
          </button>
          <a className="text-link" href="mailto:pmluanvn@gmail.com">
            {t.common.writeEmail}
          </a>
        </div>
      </div>

      <div
        className={`overlay overlay--form${formOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={formTitleId}
        inert={formOpen ? undefined : true}
      >
        <div className="overlay__bar wrap">
          <p className="overlay__title" id={formTitleId}>
            {t.form.title}
          </p>
          <button
            type="button"
            className="overlay__close font-medium underline underline-offset-4"
            aria-label={t.nav.closeForm}
            onClick={closeForm}
          >
            {t.nav.close}
          </button>
        </div>
        <ContactForm className="wrap" />
      </div>
    </>
  );
}
