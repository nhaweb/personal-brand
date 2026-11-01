"use client";

import Image from "next/image";
import Arrow from "./components/Arrow";
import BandVideo from "./components/BandVideo";
import Fold from "./components/Fold";
import SiteHeader from "./components/SiteHeader";
import { useLocale } from "./i18n/LocaleProvider";

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="start" aria-labelledby="hero-heading">
          <div className="wrap start__intro">
            <h1 className="start__title" id="hero-heading" data-reveal>
              {t.hero.title}
            </h1>
            <p className="start__lead gray" data-reveal data-i="1">
              {t.hero.lead}
            </p>
            <div className="button-row" data-reveal data-i="2">
              <a className="text-link" href="mailto:hello@viet.studio">
                {t.common.writeEmail}
              </a>
              <a className="btn btn--accent" href="#contact">
                {t.common.contactForm}
                <Arrow />
              </a>
            </div>
          </div>

          <div className="wrap start__media" data-reveal="media">
            <div className="media-shell">
              <Image
                src="/images/ai/hero-desk.jpg"
                alt={t.hero.imageAlt}
                width={1920}
                height={1080}
                className="media-shell__img"
                priority
                sizes="(max-width: 1360px) 100vw, 1360px"
              />
            </div>
          </div>

          <div className="wrap about" id="about">
            <p className="about__label gray" data-reveal>
              {t.about.label}
            </p>
            <div className="about__copy">
              <p className="about__lead" data-reveal data-i="1">
                {t.about.p1}
              </p>
              <p className="about__lead" data-reveal data-i="2">
                {t.about.p2}
              </p>
            </div>
            <p className="about__note gray" data-reveal data-i="3">
              {t.about.note}
            </p>
            <a className="btn btn--soft" href="#contact" data-reveal data-i="4">
              {t.common.getInTouch}
              <Arrow />
            </a>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-heading">
          <div className="wrap work__head">
            <div className="work__titles">
              <h2 className="display-lg" id="work-heading" data-reveal>
                {t.work.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.work.lead}
              </p>
            </div>
            <div className="button-row" data-reveal data-i="2">
              <a className="text-link" href="mailto:hello@viet.studio">
                {t.common.writeEmail}
              </a>
              <a className="btn btn--accent" href="#contact">
                {t.common.contactForm}
                <Arrow />
              </a>
            </div>
          </div>

          <div className="wrap work__grid">
            {t.work.items.map((item, i) => (
              <article
                className="work-card"
                key={item.name}
                data-reveal="rise"
                data-i={String((i % 2) + 1)}
              >
                <a className="work-card__link" href="#contact">
                  <div className="media-shell work-card__media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1338}
                      height={1300}
                      className="media-shell__img"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <span className="work-card__view">{t.common.view}</span>
                  </div>
                  <h3 className="work-card__title">{item.name}</h3>
                  <p className="work-card__blurb gray">{item.blurb}</p>
                  <span className="text-link">
                    {t.common.readMore}
                    <Arrow />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="band" aria-labelledby="band-heading">
          <div className="wrap band__inner">
            <div className="band__copy">
              <h2 className="display-lg" id="band-heading" data-reveal>
                {t.band.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.band.lead}
              </p>
              <a className="btn btn--accent" href="#contact" data-reveal data-i="2">
                {t.common.getInTouch}
                <Arrow />
              </a>
            </div>
          </div>
          <div className="media-shell band__media" data-reveal="media">
            <BandVideo />
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-heading">
          <div className="wrap work__head">
            <div className="work__titles">
              <h2 className="display-lg" id="services-heading" data-reveal>
                {t.services.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.services.lead}
              </p>
            </div>
            <div className="button-row" data-reveal data-i="2">
              <a className="text-link" href="mailto:hello@viet.studio">
                {t.common.writeEmail}
              </a>
              <a className="btn btn--accent" href="#contact">
                {t.common.contactForm}
                <Arrow />
              </a>
            </div>
          </div>

          <div className="wrap services__grid">
            {t.services.items.map((service, i) => (
              <article
                className="service"
                key={service.title}
                data-reveal="rise"
                data-i={String((i % 4) + 1)}
              >
                <h3 className="service__title">{service.title}</h3>
                <p className="service__body pb-6">{service.body}</p>
                <ul className="service__items">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="wrap services__note gray" data-reveal>
            {t.services.emptyPrompt}{" "}
            <a className="text-link" href="#contact">
              {t.services.contactMe}
            </a>
          </p>
        </section>

        <section className="resume" id="resume" aria-labelledby="resume-heading">
          <div className="wrap work__head">
            <div className="work__titles">
              <h2 className="display-lg" id="resume-heading" data-reveal>
                {t.resume.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.resume.lead}
              </p>
            </div>
            <div className="button-row" data-reveal data-i="2">
              <a className="text-link" href="mailto:hello@viet.studio">
                {t.common.writeEmail}
              </a>
              <a className="btn btn--accent" href="#contact">
                {t.common.contactForm}
                <Arrow />
              </a>
            </div>
          </div>

          <div className="wrap resume__list">
            {t.resume.items.map((row) => (
              <Fold
                key={row.role + row.dates}
                data-reveal
                summary={
                  <>
                    <span className="fold__meta gray">{row.org}</span>
                    <span className="fold__main">
                      <span className="fold__title">{row.role}</span>
                      <span className="fold__dates gray nums">{row.dates}</span>
                    </span>
                    <span className="fold__icon" aria-hidden="true" />
                  </>
                }
              >
                <p className="fold__body gray">{row.body}</p>
              </Fold>
            ))}
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-heading">
          <div className="wrap faq__layout">
            <div className="faq__intro">
              <h2 className="display-lg" id="faq-heading" data-reveal>
                {t.faq.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.faq.lead}
              </p>
              <a className="btn btn--soft" href="#contact" data-reveal data-i="2">
                {t.common.getInTouch}
                <Arrow />
              </a>
            </div>
            <div className="faq__list">
              {t.faq.items.map((item) => (
                <Fold
                  key={item.q}
                  className="fold--faq"
                  data-reveal
                  summary={
                    <>
                      <span className="fold__meta gray">{item.q}</span>
                      <span className="fold__title">{item.title}</span>
                      <span className="fold__icon" aria-hidden="true" />
                    </>
                  }
                >
                  <p className="fold__body gray">{item.a}</p>
                </Fold>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact" aria-labelledby="cta-heading">
          <div className="wrap cta__inner">
            <h2 className="cta__title" id="cta-heading" data-reveal>
              {t.cta.title}
            </h2>
            <p className="gray max-36" data-reveal data-i="1">
              {t.cta.lead}
            </p>
            <div className="button-row" data-reveal data-i="2">
              <a className="text-link" href="mailto:hello@viet.studio">
                {t.common.writeEmail}
              </a>
              <a
                className="btn btn--accent"
                href="mailto:hello@viet.studio?subject=Project%20enquiry"
              >
                {t.common.contactForm}
                <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer__nav">
          <a href="#work">{t.nav.work}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#resume">{t.nav.resume}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="wrap site-footer__socials">
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:hello@viet.studio">Email</a>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </div>
        <p className="wrap site-footer__legal gray">{t.footer.legal}</p>
      </footer>
    </>
  );
}
