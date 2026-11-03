import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetail from "./WorkDetail";
import { dictionaries } from "../../i18n/dictionaries";

/** Slugs are shared across locales; the English dictionary is the source. */
export function generateStaticParams() {
  return dictionaries.en.work.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = dictionaries.en.work.items.find((i) => i.slug === slug);
  if (!item) return {};

  const path = `/work/${item.slug}`;
  return {
    title: item.name,
    description: item.blurb,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: item.name,
      description: item.blurb,
      url: path,
      type: "article",
      images: [
        {
          url: item.image,
          alt: item.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.name,
      description: item.blurb,
      images: [item.image],
    },
  };
}

export default async function WorkPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const item = dictionaries.en.work.items.find((i) => i.slug === slug);
  if (!item) notFound();

  return <WorkDetail slug={slug} />;
}
