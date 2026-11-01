"use client";

import Image from "next/image";
import Link from "next/link";
import Arrow from "../../components/Arrow";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLocale } from "../../i18n/LocaleProvider";

export default function WorkDetail({ slug }: { slug: string }) {
  const { t } = useLocale();
  const d = t.work.detail;
  const item = t.work.items.find((i) => i.slug === slug);

  // The server page 404s unknown slugs; locale switches can't change the set.
  if (!item) return null;

  const others = t.work.items.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <>
      <SiteHeader />

      <main id="top">
        <article className="case">
          <header className="wrap case__head">
            <h1 className="display-lg" id="case-heading" data-reveal>
              {item.name}
            </h1>
            <p className="case__lead gray" data-reveal data-i="1">
              {item.blurb}
            </p>
            <dl className="case__meta" data-reveal data-i="2">
              <div className="case__meta-item">
                <dt className="gray">{d.client}</dt>
                <dd>{item.client}</dd>
              </div>
              <div className="case__meta-item">
                <dt className="gray">{d.year}</dt>
                <dd className="nums">{item.year}</dd>
              </div>
              <div className="case__meta-item">
                <dt className="gray">{d.services}</dt>
                <dd>{item.tags.join(" · ")}</dd>
              </div>
            </dl>
            <Link className="text-link case__back" href="/#work" data-reveal data-i="3">
              {d.back}
            </Link>
          </header>

          <div className="wrap case__hero" data-reveal="media">
            <div className="media-shell">
              <Image
                src={item.image}
                alt={item.alt}
                width={1920}
                height={1080}
                className="media-shell__img"
                priority
                sizes="(max-width: 1360px) 100vw, 1360px"
              />
            </div>
          </div>

          <section className="wrap case__section case__overview" aria-label={d.overview}>
            <h2 className="case__section-title" data-reveal>
              {d.overview}
            </h2>
            <div className="case__prose">
              {item.overview.map((paragraph, i) => (
                <p key={i} data-reveal data-i={String(i + 1)}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="wrap case__section" aria-label={d.outcome}>
            <h2 className="case__section-title" data-reveal>
              {d.outcome}
            </h2>
            <div className="case__stats">
              {item.stats.map((stat, i) => (
                <article
                  className="case__stat"
                  key={stat.label}
                  data-reveal="rise"
                  data-i={String((i % 3) + 1)}
                >
                  <span className="case__stat-value nums">{stat.value}</span>
                  <span className="case__stat-label gray">{stat.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="wrap case__section" aria-label={d.process}>
            <h2 className="case__section-title" data-reveal>
              {d.process}
            </h2>
            <ol className="case__phases">
              {item.phases.map((phase, i) => (
                <li
                  className="case__phase"
                  key={phase.title}
                  data-reveal
                  data-i={String((i % 4) + 1)}
                >
                  <h3 className="case__phase-title">{phase.title}</h3>
                  <p className="case__phase-body gray">{phase.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="case__band" data-reveal="media">
            <Image
              src="/images/ai/band-skyline.jpg"
              alt={t.band.imageAlt}
              width={1920}
              height={1080}
              className="case__band-img"
              sizes="100vw"
            />
          </div>

          <section className="wrap case__section case__more" aria-label={d.more}>
            <h2 className="case__section-title" data-reveal>
              {d.more}
            </h2>
            <div className="case__more-grid">
              {others.map((other, i) => (
                <article
                  className="work-card"
                  key={other.slug}
                  data-reveal="rise"
                  data-i={String((i % 2) + 1)}
                >
                  <Link className="work-card__link" href={`/work/${other.slug}`}>
                    <div className="media-shell work-card__media">
                      <Image
                        src={other.image}
                        alt={other.alt}
                        width={1338}
                        height={1300}
                        className="media-shell__img"
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                      <span className="work-card__view">{t.common.view}</span>
                    </div>
                    <h3 className="work-card__title">{other.name}</h3>
                    <p className="work-card__blurb gray">{other.blurb}</p>
                    <span className="text-link">
                      {t.common.readMore}
                      <Arrow />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </article>

        <section className="cta cta--accent" aria-labelledby="case-cta-heading">
          <div className="wrap cta__layout">
            <div className="cta__inner">
              <h2 className="cta__title" id="case-cta-heading" data-reveal>
                {t.cta.title}
              </h2>
              <p className="gray max-36" data-reveal data-i="1">
                {t.cta.lead}
              </p>
              <div className="button-row" data-reveal data-i="2">
                <Link className="btn btn--soft" href="/contact">
                  {t.common.contactForm}
                  <Arrow />
                </Link>
              </div>
            </div>
            <a
              className="cta__mail"
              href="mailto:nhaweb.vn@gmail.com"
              data-reveal
              data-i="3"
            >
              nhaweb.vn@gmail.com
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
