import { LegalDocument, legalMetadata } from "@/components/LegalDocument";
import {
  parseLegalLocale,
  termsDocs,
  rollbyeLegalPaths,
} from "@/data/rollbye-legal";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  const doc = termsDocs[locale];
  return legalMetadata(rollbyeLegalPaths.terms, locale, doc.title, doc.summary);
}

export default async function Page({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  return (
    <LegalDocument
      locale={locale}
      path={rollbyeLegalPaths.terms}
      doc={termsDocs[locale]}
    />
  );
}
