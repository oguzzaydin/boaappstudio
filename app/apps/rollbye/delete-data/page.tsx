import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppLegalArticle from "@/components/AppLegalArticle";
import { applyAppLocale } from "@/data/rollbye-i18n";
import {
    deleteDataDocs,
    parseLegalLocale,
    rollbyeLegalPaths,
    ui,
} from "@/data/rollbye-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const doc = deleteDataDocs[locale];
    return pageMetadata({
        title: doc.title,
        description: doc.summary,
        path: rollbyeLegalPaths.deleteData,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === "rollbye");
    if (!base) {
        notFound();
    }
    return (
        <AppLegalArticle
            app={applyAppLocale(base, locale)}
            locale={locale}
            path={rollbyeLegalPaths.deleteData}
            doc={deleteDataDocs[locale]}
            breadcrumbName={ui[locale].deleteData}
        />
    );
}
