import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppPrivacyPolicy from "@/components/AppPrivacyPolicy";
import { applyAppLocale } from "@/data/rollbye-i18n";
import { parseLegalLocale } from "@/data/rollbye-legal";
import {
    FIC_APP_ID,
    ficLegalPaths,
    ficPrivacySections,
} from "@/data/fakeincomingcall-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

const meta = {
    en: {
        title: "Privacy Policy — Fake Incoming Call - Prank",
        description:
            "How Fake Incoming Call - Prank handles data: no account, on-device storage, Google AdMob ads with UMP consent, an optional Remove ads purchase via Google Play and RevenueCat, and Firebase Analytics and Crashlytics.",
    },
    tr: {
        title: "Gizlilik Politikası — Fake Incoming Call - Prank",
        description:
            "Fake Incoming Call - Prank verileri nasıl işler: hesap yok, cihazda saklama, UMP onaylı Google AdMob reklamları, Google Play ve RevenueCat ile isteğe bağlı reklam kaldırma satın alımı, Firebase Analytics ve Crashlytics.",
    },
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    return pageMetadata({
        title: meta[locale].title,
        description: meta[locale].description,
        path: ficLegalPaths.privacy,
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
        <AppPrivacyPolicy
            app={app}
            canonicalPath={ficLegalPaths.privacy}
            locale={locale}
            showLocaleSwitch
            extraSections={ficPrivacySections[locale]}
        />
    );
}
