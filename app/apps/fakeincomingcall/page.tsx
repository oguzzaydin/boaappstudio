import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppLanding from "@/components/AppLanding";
import { applyAppLocale } from "@/data/rollbye-i18n";
import { parseLegalLocale } from "@/data/rollbye-legal";
import { FIC_APP_ID, ficLegalPaths } from "@/data/fakeincomingcall-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === FIC_APP_ID);
    if (!base) {
        return { title: "Fake Incoming Call - Prank" };
    }
    const app = applyAppLocale(base, locale);
    return pageMetadata({
        title: app.name,
        description: app.description,
        path: ficLegalPaths.app,
        image: app.ogImage,
        imageAlt: app.ogImageAlt,
        imageWidth: app.ogImageWidth,
        imageHeight: app.ogImageHeight,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === FIC_APP_ID);
    if (!base) {
        notFound();
    }
    return (
        <AppLanding
            app={applyAppLocale(base, locale)}
            locale={locale}
            showLocaleSwitch
        />
    );
}
