import { LegalDocument, legalMetadata } from "@/components/LegalDocument";
import {
  parseLegalLocale,
  privacyDocs,
  rollbyeLegalPaths,
} from "@/data/rollbye-legal";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  const doc = privacyDocs[locale];
  return legalMetadata(rollbyeLegalPaths.privacy, locale, doc.title, doc.summary);
}

export default async function Page({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  return (
    <LegalDocument
      locale={locale}
      path={rollbyeLegalPaths.privacy}
      doc={privacyDocs[locale]}
    />
  );
}
