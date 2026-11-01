"use client";

import Link from "next/link";
import Arrow from "./components/Arrow";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { useLocale } from "./i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="nf" aria-labelledby="nf-heading">
          <div className="wrap nf__inner">
            <p className="gray nums" data-reveal>
              404
            </p>
            <h1 className="display-lg" id="nf-heading" data-reveal data-i="1">
              {t.notFound.title}
            </h1>
            <p className="nf__body gray max-36" data-reveal data-i="2">
              {t.notFound.body}
            </p>
            <div className="button-row" data-reveal data-i="3">
              <Link className="btn btn--accent" href="/#work">
                {t.notFound.back}
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
