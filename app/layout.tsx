import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Reveal from "./components/Reveal";
import WorkCatchUp from "./components/WorkCatchUp";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { dictionaries } from "./i18n/dictionaries";

export const metadata: Metadata = {
  title: dictionaries.en.meta.title,
  description: dictionaries.en.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Inter+Tight:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <LocaleProvider>
          <LenisProvider>
            <Reveal />
            <WorkCatchUp />
            {children}
          </LenisProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
