"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../i18n/LocaleProvider";
import { socialLinks } from "./socialLinks";

export default function SiteFooter() {
  const { t } = useLocale();

  const links = [
    { href: "/#work", label: t.nav.work },
    { href: "/#services", label: t.nav.services },
    { href: "/#resume", label: t.nav.resume },
    { href: "/#faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__top">
        <Link className="site-footer__brand" href="/#top" aria-label="PML">
          <Image
            className="site-footer__logo"
            src="/images/pml-logo-orange.png"
            alt="PML"
            width={763}
            height={373}
          />
        </Link>
        <p className="site-footer__legal gray">{t.footer.legal}</p>
      </div>
      <nav className="wrap site-footer__links" aria-label={t.nav.primary}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
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
    </footer>
  );
}
