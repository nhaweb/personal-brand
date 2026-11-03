import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { dictionaries } from "../i18n/dictionaries";
import { site } from "../lib/site";

const contact = dictionaries.en.contact;

export const metadata: Metadata = {
  title: "Contact",
  description: contact.lead,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description: contact.lead,
    url: "/contact",
    images: [
      {
        url: site.ogImage,
        width: 864,
        height: 1152,
        alt: site.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: contact.lead,
    images: [site.ogImage],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
