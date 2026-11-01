import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { dictionaries } from "../i18n/dictionaries";

export const metadata: Metadata = {
  title: `Contact · ${dictionaries.en.meta.title}`,
  description: dictionaries.en.cta.lead,
};

export default function ContactPage() {
  return <ContactContent />;
}
