import type { Metadata } from "next";
import { Archivo, Inter_Tight } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";
import JsonLd from "./components/JsonLd";
import LenisProvider from "./components/LenisProvider";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import WorkCatchUp from "./components/WorkCatchUp";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { dictionaries } from "./i18n/dictionaries";
import { getSiteUrl, site } from "./lib/site";

const archivo = Archivo({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const meta = dictionaries.en.meta;
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.title,
    template: `%s · ${meta.title}`,
  },
  description: meta.description,
  applicationName: site.brand,
  authors: [{ name: site.personName, url: siteUrl }],
  creator: site.personName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.brand,
    title: meta.title,
    description: meta.description,
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
    title: meta.title,
    description: meta.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <JsonLd />
        <LocaleProvider>
          <LenisProvider>
            <Reveal />
            <WorkCatchUp />
            <SiteHeader />
            {children}
            <BackToTop />
          </LenisProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
