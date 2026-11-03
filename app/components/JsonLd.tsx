import { getSiteUrl, sameAs, site } from "../lib/site";

/** Person schema for search engines and AI crawlers. */
export default function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.personName,
    alternateName: [site.brand],
    url,
    email: site.email,
    jobTitle: site.jobTitle,
    image: `${url}${site.ogImage}`,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
