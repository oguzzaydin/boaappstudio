import { LegalDocument, legalMetadata } from "@/components/LegalDocument";
import {
  parseLegalLocale,
  supportDocs,
  rollbyeLegalPaths,
} from "@/data/rollbye-legal";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  const doc = supportDocs[locale];
  return legalMetadata(rollbyeLegalPaths.support, locale, doc.title, doc.summary);
}

export default async function Page({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  return (
    <LegalDocument
      locale={locale}
      path={rollbyeLegalPaths.support}
      doc={supportDocs[locale]}
    />
  );
}
