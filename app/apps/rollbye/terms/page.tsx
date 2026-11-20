import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppTermsOfService from "@/components/AppTermsOfService";
import { applyAppLocale } from "@/data/rollbye-i18n";
import {
    parseLegalLocale,
    rollbyeLegalPaths,
    termsDocs,
} from "@/data/rollbye-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

const privacyNote = {
    en: "For Rollbye, photos and videos stay on your device and are never uploaded. Optional Premium is billed by Apple or Google. You can request deletion of analytics, crash, advertising, or purchase records as described on the data deletion page.",
    tr: "Rollbye'da fotoğraf ve videolar cihazında kalır, hiçbir yere yüklenmez. İsteğe bağlı Premium, Apple veya Google tarafından faturalandırılır. Analitik, kilitlenme, reklam veya satın alma kayıtlarının silinmesini veri silme sayfasında anlatıldığı gibi talep edebilirsin.",
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const doc = termsDocs[locale];
    return pageMetadata({
        title: doc.title,
        description: doc.summary,
        path: rollbyeLegalPaths.terms,
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
        <AppTermsOfService
            app={app}
            canonicalPath={rollbyeLegalPaths.terms}
            locale={locale}
            showLocaleSwitch
            lastUpdated={locale === "tr" ? "20 Kasım 2026" : "November 20, 2026"}
            privacyNote={privacyNote[locale]}
        />
    );
}
