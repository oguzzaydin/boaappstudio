import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppTermsOfService from "@/components/AppTermsOfService";
import { applyAppLocale } from "@/data/rollbye-i18n";
import { localeHref, parseLegalLocale } from "@/data/rollbye-legal";
import {
    FIC_APP_ID,
    ficLastUpdated,
    ficLegalPaths,
    ficTermsPrivacyNote,
    ficTermsSections,
} from "@/data/fakeincomingcall-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

const meta = {
    en: {
        title: "Terms of Use — Fake Incoming Call - Prank",
        description:
            "Terms of use for Fake Incoming Call - Prank: entertainment and prank use only, not real telephony, acceptable use, and the optional one-time Remove ads purchase via Google Play.",
    },
    tr: {
        title: "Kullanım Koşulları — Fake Incoming Call - Prank",
        description:
            "Fake Incoming Call - Prank kullanım koşulları: yalnızca eğlence ve şaka amaçlı kullanım, gerçek telefon hizmeti değildir, kabul edilebilir kullanım ve Google Play üzerinden isteğe bağlı tek seferlik reklam kaldırma satın alımı.",
    },
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    return pageMetadata({
        title: meta[locale].title,
        description: meta[locale].description,
        path: ficLegalPaths.terms,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === FIC_APP_ID);
    if (!base) {
        notFound();
    }
    const app = applyAppLocale(base, locale);
    return (
        <AppTermsOfService
            app={app}
            canonicalPath={ficLegalPaths.terms}
            locale={locale}
            showLocaleSwitch
            lastUpdated={ficLastUpdated[locale]}
            privacyNote={ficTermsPrivacyNote[locale]}
            extraSections={ficTermsSections[locale]}
            privacyHref={localeHref(ficLegalPaths.privacy, locale)}
        />
    );
}
