import { Metadata } from "next";
import { notFound } from "next/navigation";

import CvView from "@/components/cv/cv-view";
import { LANGS, cv, isLang } from "@/lib/cv";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const description = isLang(params.lang) && params.lang === "pt"
    ? `Currículo de ${cv.basics.name}`
    : `Resume of ${cv.basics.name}`;
  return {
    title: `CV | ${cv.basics.name}`,
    description,
  };
}

export default function CvPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  return <CvView lang={params.lang} />;
}
