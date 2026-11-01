"use client";

import Image from "next/image";
import Link from "next/link";
import Arrow from "../components/Arrow";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { socialLinks } from "../components/socialLinks";
import { useLocale } from "../i18n/LocaleProvider";

export default function ContactContent() {
  const { t } = useLocale();

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="contact-page" aria-labelledby="contact-heading">
          <div className="wrap contact-page__grid">
            <div className="contact-page__main">
              <h1 className="display-lg" id="contact-heading" data-reveal>
                {t.contact.title}
              </h1>
              <p className="contact-page__lead max-36" data-reveal data-i="1">
                {t.contact.lead}
              </p>
              <div className="contact-page__form" data-reveal data-i="2">
                <ContactForm />
              </div>
            </div>

            <div className="contact-page__side">
              <div className="media-shell contact-page__portrait" data-reveal="media">
                <Image
                  src="/images/ai/about-portrait.jpg"
                  alt={t.hero.imageAlt}
                  width={864}
                  height={1152}
                  className="media-shell__img"
                  sizes="(max-width: 960px) 100vw, 45vw"
                />
              </div>

              <aside className="contact-aside" data-reveal data-i="3">
                <div className="contact-aside__block">
                  <p className="gray">{t.contact.emailLabel}</p>
                  <a
                    className="text-link contact-aside__value"
                    href="mailto:nhaweb.vn@gmail.com"
                  >
                    nhaweb.vn@gmail.com
                  </a>
                </div>

                <div className="contact-aside__block">
                  <p className="gray">{t.contact.socialLabel}</p>
                  <ul className="contact-aside__list">
                    {socialLinks.map((s) => (
                      <li key={s.label}>
                        <a
                          className="text-link contact-aside__value"
                          href={s.href}
                          rel={
                            s.href.startsWith("http") ? "noreferrer" : undefined
                          }
                          target={
                            s.href.startsWith("http") ? "_blank" : undefined
                          }
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="contact-aside__block">
                  <p className="gray">{t.contact.availability}</p>
                  <p className="contact-aside__value">
                    {t.contact.availabilityValue}
                  </p>
                  <p className="contact-aside__note gray">{t.contact.response}</p>
                </div>
              </aside>
            </div>
          </div>

          <div className="wrap contact-page__more">
            <h2 className="case__section-title" data-reveal>
              {t.work.detail.more}
            </h2>
            <div className="contact-page__work-grid">
              {t.work.items.slice(0, 3).map((item, i) => (
                <article
                  className="work-card"
                  key={item.slug}
                  data-reveal="rise"
                  data-i={String((i % 3) + 1)}
                >
                  <Link className="work-card__link" href={`/work/${item.slug}`}>
                    <div className="media-shell work-card__media">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={1338}
                        height={1300}
                        className="media-shell__img"
                        sizes="(max-width: 720px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="work-card__title">{item.name}</h3>
                    <span className="text-link">
                      {t.common.readMore}
                      <Arrow />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
