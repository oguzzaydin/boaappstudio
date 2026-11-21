import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppLegalArticle from "@/components/AppLegalArticle";
import { applyAppLocale } from "@/data/rollbye-i18n";
import { parseLegalLocale } from "@/data/rollbye-legal";
import {
    FIC_APP_ID,
    ficDeleteDataDocs,
    ficLegalLinks,
    ficLegalPaths,
    ficUi,
} from "@/data/fakeincomingcall-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const doc = ficDeleteDataDocs[locale];
    return pageMetadata({
        title: doc.title,
        description: doc.summary,
        path: ficLegalPaths.deleteData,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === FIC_APP_ID);
    if (!base) {
        notFound();
    }
    return (
        <AppLegalArticle
            app={applyAppLocale(base, locale)}
            locale={locale}
            path={ficLegalPaths.deleteData}
            doc={ficDeleteDataDocs[locale]}
            breadcrumbName={ficUi[locale].deleteData}
            links={ficLegalLinks(locale)}
            backLabel={ficUi[locale].backToApp}
        />
    );
}
