import { notFound } from "next/navigation";

import Home from "@/app/page";
import ScrollToSection from "@/components/ui/ScrollToSection";

const sectionIds = [
  "servicos",
  "resultados",
  "manutencao",
  "sobre",
  "contato",
] as const;

type SectionId = (typeof sectionIds)[number];

type SectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

function isSectionId(section: string): section is SectionId {
  return sectionIds.some((sectionId) => sectionId === section);
}

export function generateStaticParams() {
  return sectionIds.map((section) => ({ section }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isSectionId(section)) {
    notFound();
  }

  return (
    <>
      <ScrollToSection sectionId={section} />
      <Home />
    </>
  );
}
