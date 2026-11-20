import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppPrivacyPolicy from "@/components/AppPrivacyPolicy";
import { applyAppLocale } from "@/data/rollbye-i18n";
import {
    parseLegalLocale,
    privacyDocs,
    rollbyeLegalPaths,
} from "@/data/rollbye-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const doc = privacyDocs[locale];
    return pageMetadata({
        title: doc.title,
        description: doc.summary,
        path: rollbyeLegalPaths.privacy,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === "rollbye");
    if (!base) {
        notFound();
    }
    const app = applyAppLocale(base, locale);
    return (
        <AppPrivacyPolicy
            app={app}
            canonicalPath={rollbyeLegalPaths.privacy}
            locale={locale}
            showLocaleSwitch
        />
    );
}
